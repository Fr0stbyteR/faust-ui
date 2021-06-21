# FaustUI [![Badge](https://img.shields.io/badge/link-996.icu-%23FF4D5B.svg?style=flat-square)](https://996.icu/#/en_US)

This project is an user interface parser, compositor and components renderer for Faust Programming language. [Faust user interface widgets/primitives](https://faust.grame.fr/doc/manual/index.html#user-interface-primitives-and-configuration) allow for an **abstract** description of a user interface from within the Faust code. This description is independent from any GUI toolkits/frameworks and is purely abstract. Widgets can be **discrete** (e.g., `button`, `checkbox`, etc.), **continuous** (e.g., `hslider`, `vslider`, `nentry`), and  **organizational** (e.g., `vgroup`, `hgroup`).

Discrete and continuous elements are signal generators. For example, a `button` produces a signal which is 1 when the button is pressed and 0 otherwise: 

When a Faust DSP code is compiled, a corresponding JSON file will be generated with data related to the DSP including its UI structure information. FaustUI takes these information as input in order to generate an user interface in an HTML environment with hooks to communicate with the actual DSP.

## Communicator
`./src/FaustUI.ts` is the main class that can be loaded in a seperate browser `window` or `iframe`. the class listens to messages that comes by `window.postMessage`.
Two type of messages are listening by the `FaustUI` class. 
1. Parameter change: If the message has a `type` key with a value of `param`, the corresponding UI component with a same parameter path will display the changed parameter.
2. New UI: If tye message has a `type` key with a value of `ui`, the class will re-render the incoming new UI.

When a message is received, the window that initiated this message will be considered as the `host`. Then if a UI component is changed by user, the component will call `FaustUI` class's `paramChangeByUI` function which posts a `param` message to the `host` window. 

User can also override the `paramChangeByUI` function or manually call `paramChangeByDSP` method to communicate differently with the UI or the DSP.

Once a new UI needs to be rendered, the class will firstly send it to a layout parser/calculator in order to get the coordination and size of each component.

## Parser
A structure definition of the UI information provided by Faust compiler can be found in `./src/types.d.ts`. The parser `./src/layout/Layout.ts` analyses the raw UI object recursively, then transform each UI component into a corresponding layout class instance. The class adds the dimensions and methods of components in order to calculate and adjust the position and the size of them. 

### Grid system
The layout calculation uses `grids` as unit as components has an original width and height in `grids`. Once the layout is calculated, the amount of grids of each components should be fixed. Renderer can simply multiply these amount by a factor to change the actual relative size without recalculating their positions and dimensions.

### Primitives and their variations
Faust have 3 organizational UI primitives, aka groups, a group contains other UI items that can also be groups: 

`vgroup` for a group whose items are aligned vertically

`hgroup` for a group whose items are aligned horizontally

`tgroup` for a group that has tabs to switch panels for each item.

5 "input" UI primitives that are UI-to-DSP controllers:

`button` for a buton that gives `1` on press and `0` on release.

`checkbox` for a toggle that gives `1` or `0` by its state.

`hslider` for a horizontal slider.

`vslider` for a vertical slider.

`nentry` for a numerical entry that is basically an input box

2 "output" UI primitives that are DSP-to-UI monitors:

`hbargraph` for a horizontal bar-graph that can be used to show any number in range. (e.g. signal level meter)

`vbargraph` for a vertical bar-graph

By defining a `style` metadata, user can eventually override the look of a UI primitive. Variations that are supported officially for `hslider`, `vslider` and `nentry`:

`knob` (`[style:knob]` Metadata) for a rotary control knob

`menu` (`[style:menu{'Name0':value0;'Name1':value1}]` Metadata) for a drop-down menu that provide options and their values.

`radio` (`[style:radio{'Name0':value0;'Name1':value1}]` Metadata) for a radio menu.

`hbargraph` and `vbargraph`'s variations:

`led` (`[style:led]` Metadata) for a colored light.

`numerical` (`[style:numerical)` Metadata) for a numerical box that displays only values.

### Sizing
Each UI component has its initial dimensions in grids. Then some of them can be extensible in one or two axis if they have extra spaces. 

| type      | vertically extensible          | horizontal extensible          |
|-----------|--------------------------------|--------------------------------|
| hgroup    | if has v-extensible descendant | if has h-extensible descendant |
| vgroup    | if has v-extensible descendant | if has h-extensible descendant |
| tgroup    | if has v-extensible descendant | if has h-extensible descendant |
| button    | no                             | yes                            |
| checkbox  | no                             | yes                            |
| hslider   | no                             | yes                            |
| vslider   | yes                            | no                             |
| nentry    | no                             | no                             |
| knob      | no                             | no                             |
| menu      | no                             | yes                            |
| radio     | yes                            | yes                            |
| hbargraph | no                             | yes                            |
| vbargraph | yes                            | no                             |
| led       | no                             | no                             |
| numerical | no                             | no                             |

### Padding
In order to render the layout elegantly, some paddings are added to the groups and between each items. These values can be found under `./src/layout/AbstractGroup.ts`. 

## Layout Calculation
The layout calculation is done in 4 phases:
1. inject height and width information to each items.
2. calculate groups' initial size by sum up descendants' size.
3. expand items if they are extensible. The extra space in a group should be shared by all extensibles.
4. calculate the coordination of each item, align them to the middle line of the group. This adds absolute position (x, y relative to root: `left` and `top`) and relative position (x, y relative to parent group: `offsetLeft` and `offsetTop`).

Each phase of the calculation is called recursively and initiate by a "root" group. Thus once it's calculated, the "root" group and its descendants contains all information about position and size.

## Rendering
Component rendering constructors can be found below `./src/components` folder. After the layout calculation, `FaustUI` construct the `root` group with the group constructor that will construct all its descendants.

The UI rendering is also done in 4 phases:
1. construct each component by its corresponding class constructor. The component register itself using `FaustUI` class's `register` method.
2. `componentWillMount` method is called by a component's parent group, the component should prepare all DOM elements that need to be mounted to DOM tree.
3. `mount` method is called by a component's parent group, the component should get its `container` mounted with children DOM elements. Then the parent group will fill its `container` by its children's `container`s.
4. `componentDidMount` method is called by a component's parent group, the component now have all its DOM elements connected to the page. Thus their `getBoundingRect` method can be used in order to justify and draw canvas etc. It should also bind events to state changes in this phase.

A more detailed description of UI component class can be found in `./src/components/Component.ts`

## Building
Install dev dependencies:

```bash
npm install
```

If you don't want to build the minified js for testing purpose:

```bash
npm run build
```

Otherwise use:

```bash
npm run dist
```
To test, put the directory in a local server, then open the following page: `./dist/test.html`

## Versioning 
You'll have to raise the package version number in `package.json` for `npm run update` to properly work.

