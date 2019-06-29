(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["FaustUI"] = factory();
	else
		root["FaustUI"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectSpread.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectSpread.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

module.exports = _objectSpread;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/Base.scss":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/Base.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".faust-ui-component {\n  display: flex;\n  position: absolute;\n  flex-direction: column;\n  overflow: hidden; }\n  .faust-ui-component:focus {\n    outline: none; }\n  .faust-ui-component .faust-ui-component-label {\n    position: relative;\n    font-weight: bold;\n    margin: 4px; }\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/Button.scss":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/Button.scss ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".faust-ui-component.faust-ui-component-button button {\n  display: block;\n  position: relative;\n  cursor: pointer;\n  border-width: 1px;\n  text-align: center;\n  border-radius: 4px;\n  margin: 4px;\n  flex: 1 0 auto;\n  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.5); }\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/Checkbox.scss":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/Checkbox.scss ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".faust-ui-component.faust-ui-component-checkbox button {\n  display: block;\n  position: relative;\n  cursor: pointer;\n  border-width: 1px;\n  text-align: center;\n  border-radius: 1px;\n  margin: 4px;\n  flex: 1 0 auto;\n  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.5); }\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/Nentry.scss":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/Nentry.scss ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".faust-ui-component.faust-ui-component-nentry input {\n  margin: 0px 4px;\n  padding: 0px 2px;\n  border-width: 1px;\n  border-radius: 4px;\n  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.5); }\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/index.scss":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/index.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".faust-ui-root {\n  position: relative;\n  display: block; }\n  .faust-ui-root .faust-ui-group {\n    position: absolute;\n    display: block;\n    background-color: rgba(80, 80, 80, 0.75);\n    border-radius: 4px;\n    border: 1px rgba(255, 255, 255, 0.25) solid; }\n  .faust-ui-root .faust-ui-item {\n    position: absolute;\n    display: block; }\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/events/events.js":
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function $getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return $getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = $getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  var args = [];
  for (var i = 0; i < arguments.length; i++) args.push(arguments[i]);
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    ReflectApply(this.listener, this.target, args);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      if (typeof listener !== 'function') {
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
      }
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      if (typeof listener !== 'function') {
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
      }

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/FaustUI.ts":
/*!************************!*\
  !*** ./src/FaustUI.ts ***!
  \************************/
/*! exports provided: FaustUI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaustUI", function() { return FaustUI; });
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! events */ "./node_modules/events/events.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Layout */ "./src/Layout.ts");
/* harmony import */ var _FaustUIRoot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FaustUIRoot */ "./src/FaustUIRoot.ts");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_5__);






class FaustUI extends events__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"] {
  on(type, listener) {
    return super.on(type, listener);
  }

  once(type, listener) {
    return super.once(type, listener);
  }

  off(type, listener) {
    return super.off(type, listener);
  }

  removeAllListeners(type) {
    return super.removeAllListeners(type);
  }

  emit(type, e) {
    return super.emit(type, e);
  }

  constructor(options) {
    super();

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "root", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "faustUIRoot", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "_ui", void 0);

    var root = options.root,
        uiIn = options.ui;
    this.root = root;
    if (uiIn) this.ui = uiIn;
    this.render();
    window.addEventListener("resize", () => {
      this.faustUIRoot.setState(this.calc());
      this.emit("layoutChange");
    });
  }

  calc() {
    var _this$root$getBoundin = this.root.getBoundingClientRect(),
        width = _this$root$getBoundin.width,
        height = _this$root$getBoundin.height;

    var _Layout$calcLayout = _Layout__WEBPACK_IMPORTED_MODULE_3__["Layout"].calcLayout(this.ui),
        layout = _Layout$calcLayout.layout;

    return {
      width,
      height,
      layout
    };
  }

  render() {
    var _this$calc = this.calc(),
        width = _this$calc.width,
        height = _this$calc.height,
        layout = _this$calc.layout;

    this.faustUIRoot = new _FaustUIRoot__WEBPACK_IMPORTED_MODULE_4__["FaustUIRoot"]({
      width,
      height,
      layout,
      ui: this.ui,
      emitter: this
    });
    var children = this.faustUIRoot.render();
    children.forEach(e => this.root.appendChild(e));
  }

  get ui() {
    return this._ui;
  }

  set ui(uiIn) {
    this._ui = uiIn;
    var state = this.calc();
    if (this.faustUIRoot) this.faustUIRoot.setState(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, state, {
      ui: this.ui
    }));
    this.emit("uiChange", this._ui);
  }

  changeParamByUI(path, value) {
    this.emit("paramChangeByUI", {
      path,
      value
    });
  }

  changeParamByDSP(path, value) {
    this.emit("paramChangeByDSP", {
      path,
      value
    });
  }

}

/***/ }),

/***/ "./src/FaustUIGroup.ts":
/*!*****************************!*\
  !*** ./src/FaustUIGroup.ts ***!
  \*****************************/
/*! exports provided: FaustUIGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaustUIGroup", function() { return FaustUIGroup; });
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Layout */ "./src/Layout.ts");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Button */ "./src/components/Button.ts");
/* harmony import */ var _components_Checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Checkbox */ "./src/components/Checkbox.ts");
/* harmony import */ var _components_Nentry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Nentry */ "./src/components/Nentry.ts");
/* harmony import */ var _components_Component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Component */ "./src/components/Component.ts");







class FaustUIGroup extends _components_Component__WEBPACK_IMPORTED_MODULE_6__["Component"] {
  constructor() {
    super(...arguments);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "items", void 0);
  }

  static getComponent(item, emitter, grid, itemLeft, itemTop) {
    var type = _Layout__WEBPACK_IMPORTED_MODULE_2__["Layout"].predictType(item);
    var tooltipMeta = item.meta ? item.meta.find(meta => meta.tooltip) : undefined;
    var tooltip = tooltipMeta ? tooltipMeta.tooltip : undefined;
    var label = item.label,
        min = item.min,
        max = item.max,
        address = item.address,
        layout = item.layout;
    var props = {
      label,
      address,
      tooltip,
      emitter,
      style: {
        width: layout.width * grid,
        height: layout.height * grid,
        left: itemLeft,
        top: itemTop
      },
      type: "float",
      min: isFinite(+min) ? +min : Number.MIN_VALUE,
      max: isFinite(+max) ? +max : Number.MAX_VALUE,
      step: "step" in item ? +item.step : 1,
      value: "init" in item ? +item.init || 0 : 0
    };
    if (type === "button") return new _components_Button__WEBPACK_IMPORTED_MODULE_3__["FaustUIButton"](_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, props));
    if (type === "checkbox") return new _components_Checkbox__WEBPACK_IMPORTED_MODULE_4__["FaustUICheckbox"](_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, props));
    if (type === "nentry") return new _components_Nentry__WEBPACK_IMPORTED_MODULE_5__["FaustUINentry"](_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, props));
    /*
    if (type === "knob") return <LiveDial showname={false} {...props} />;
    if (type === "menu") return <LiveTab {...props} />;
    if (type === "radio") return <LiveTab {...props} />;
    if (type === "hslider") return <LiveSlider orientation="horizontal" showname={false} {...props} />;
    if (type === "vslider") return <LiveSlider orientation="vertical" showname={false} {...props} />;
    if (type === "hbargraph") return <LiveMeter orientation="horizontal" {...props} />;
    if (type === "vbargraph") return <LiveMeter orientation="vertical" {...props} />;
    if (type === "led") return <LiveMeter orientation="vertical" {...props} />;*/

    return undefined;
  }

  componentWillMount() {
    this.items = [];
    this.container = document.createElement("div");
    this.updateUI();
  }

  updateUI() {
    this.children = [];
    var _this$state = this.state,
        ui = _this$state.ui,
        grid = _this$state.grid;
    var _this$state2 = this.state,
        outerLeft = _this$state2.outerLeft,
        outerTop = _this$state2.outerTop;
    var _ui$layout = ui.layout,
        left = _ui$layout.left,
        top = _ui$layout.top,
        width = _ui$layout.width,
        height = _ui$layout.height;
    left = left * grid - outerLeft;
    top = top * grid - outerTop;
    width *= grid;
    height *= grid;
    outerLeft += left;
    outerTop += top;
    this.container.style.left = "".concat(left, "px");
    this.container.style.top = "".concat(top, "px");
    this.container.style.width = "".concat(width, "px");
    this.container.style.height = "".concat(height, "px");
    this.container.className = ["faust-ui-group", "faust-ui-" + ui.type].join(" ");
    this.children = [];
    var tabs = [];
    ui.items.forEach(item => {
      var itemLeft = item.layout.left * grid - outerLeft;
      var itemTop = item.layout.top * grid - outerTop;

      if (item.type === "tgroup") {
        tabs.push(item.label);
        var component = new FaustUIGroup({
          grid,
          outerLeft,
          outerTop,
          ui: item,
          emitter: this.state.emitter
        });
        this.children.push(component);
        this.items[this.children.length - 1] = item;
      } else if (item.type === "vgroup" || item.type === "hgroup") {
        var _component = new FaustUIGroup({
          grid,
          outerLeft,
          outerTop,
          ui: item,
          emitter: this.state.emitter
        });

        this.children.push(_component);
        this.items[this.children.length - 1] = item;
      } else {
        var ioItem = item;
        var itemComponent = FaustUIGroup.getComponent(ioItem, this.state.emitter, grid, itemLeft, itemTop);

        if (itemComponent) {
          this.children.push(itemComponent);
          this.items[this.children.length - 1] = ioItem;
        }
      }
    });
  }

  updateLayout() {
    var _this$state3 = this.state,
        ui = _this$state3.ui,
        grid = _this$state3.grid;
    var _this$state4 = this.state,
        outerLeft = _this$state4.outerLeft,
        outerTop = _this$state4.outerTop;
    var _ui$layout2 = ui.layout,
        left = _ui$layout2.left,
        top = _ui$layout2.top,
        width = _ui$layout2.width,
        height = _ui$layout2.height;
    left = left * grid - outerLeft;
    top = top * grid - outerTop;
    width *= grid;
    height *= grid;
    outerLeft += left;
    outerTop += top;
    this.container.style.left = "".concat(left, "px");
    this.container.style.top = "".concat(top, "px");
    this.container.style.width = "".concat(width, "px");
    this.container.style.height = "".concat(height, "px");
    this.children.forEach((child, i) => {
      if (child instanceof FaustUIGroup) {
        child.setState({
          outerLeft,
          outerTop,
          grid: this.state.grid
        });
      } else {
        var item = this.items[i];
        var itemLeft = item.layout.left * grid - outerLeft;
        var itemTop = item.layout.top * grid - outerTop;
        var style = {
          width: item.layout.width * grid,
          height: item.layout.height * grid,
          left: itemLeft,
          top: itemTop
        };
        child.setState({
          style
        });
      }
    });
  }

  componentDidMount() {
    this.on("ui", () => this.updateUI());
    this.on("grid", () => this.updateLayout());
    this.on("outerLeft", () => this.updateLayout());
    this.on("outerTop", () => this.updateLayout());
  }

}

/***/ }),

/***/ "./src/FaustUIRoot.ts":
/*!****************************!*\
  !*** ./src/FaustUIRoot.ts ***!
  \****************************/
/*! exports provided: FaustUIRoot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaustUIRoot", function() { return FaustUIRoot; });
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FaustUIGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FaustUIGroup */ "./src/FaustUIGroup.ts");
/* harmony import */ var _components_Component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Component */ "./src/components/Component.ts");




class FaustUIRoot extends _components_Component__WEBPACK_IMPORTED_MODULE_3__["Component"] {
  constructor() {
    super(...arguments);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "container", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "xGrids", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "yGrids", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "grid", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "left", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "top", void 0);
  }

  componentWillMount() {
    this.container = document.createElement("div");
    this.container.className = "faust-ui-root";
  }

  componentDidMount() {
    this.on("layout", () => this.updateLayout());
    this.on("width", () => this.updateLayout());
    this.on("height", () => this.updateLayout());
    this.on("ui", () => this.updateChildren());
  }

  updateLayout() {
    this.xGrids = this.state.layout.width;
    this.yGrids = this.state.layout.height;
    this.grid = Math.min(this.state.width / this.xGrids, this.state.height / this.yGrids);
    this.left = (this.state.width - this.xGrids * this.grid) / 2;
    this.top = (this.state.height - this.yGrids * this.grid) / 2;
    this.container.style.top = "".concat(this.top, "px");
    this.container.style.left = "".concat(this.left, "px");
    var childrenStateUpdate = {
      grid: this.grid
    };
    this.children.forEach(e => e.setState(childrenStateUpdate));
  }

  updateChildren() {
    this.container.innerHTML = "";
    this.children = this.state.ui.map(group => new _FaustUIGroup__WEBPACK_IMPORTED_MODULE_2__["FaustUIGroup"](_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, this.state, {
      grid: this.grid,
      ui: group,
      outerLeft: 0,
      outerTop: 0
    })));
  }

  mount() {
    this.updateChildren();
    this.updateLayout();
    return super.mount();
  }

}

/***/ }),

/***/ "./src/Layout.ts":
/*!***********************!*\
  !*** ./src/Layout.ts ***!
  \***********************/
/*! exports provided: Layout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return Layout; });
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);


class Layout {
  static predictType(item) {
    if (item.type === "vgroup" || item.type === "hgroup" || item.type === "tgroup" || item.type === "button" || item.type === "checkbox") return item.type;

    if (item.type === "hbargraph" || item.type === "vbargraph") {
      if (item.meta && item.meta.find(meta => meta.style && meta.style.startsWith("led"))) return "led";
      return item.type;
    }

    if (item.type === "hslider" || item.type === "nentry" || item.type === "vslider") {
      if (item.meta && item.meta.find(meta => meta.style && meta.style.startsWith("knob"))) return "knob";
      if (item.meta && item.meta.find(meta => meta.style && meta.style.startsWith("menu"))) return "menu";
      if (item.meta && item.meta.find(meta => meta.style && meta.style.startsWith("radio"))) return "radio";
    }

    return item.type;
  }

  static injectLayout(ui) {
    ui.forEach(item => {
      if ("items" in item) this.injectLayout(item.items);else item.layout = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, this.itemLayoutMap[this.predictType(item)]);
    });
    return ui;
  }

  static adjustLayout(uiInjected, directionIn) {
    var groupLayout = {
      width: this.padding * 2,
      height: this.padding * 2 + this.labelHeight,
      sizing: "none"
    };
    var direction = directionIn || "vertical";
    var tabs = 0;
    uiInjected.forEach(item => {
      if (item.type === "hgroup") item.layout = this.adjustLayout(item.items, "horizontal");else if (item.type === "vgroup") item.layout = this.adjustLayout(item.items, "vertical");else if (item.type === "tgroup") {
        item.layout = this.adjustLayout(item.items, "stacked");
        tabs++;
      }

      if (direction === "horizontal") {
        groupLayout.width += item.layout.width;
        groupLayout.height = Math.max(groupLayout.height, item.layout.height + 2 * this.padding + this.labelHeight);
      } else if (direction === "vertical") {
        groupLayout.width = Math.max(groupLayout.width, item.layout.width + 2 * this.padding);
        groupLayout.height += item.layout.height;
      } else {
        groupLayout.width = Math.max(groupLayout.width, item.layout.width + 2 * this.padding);
        groupLayout.height = Math.max(groupLayout.height, item.layout.height + 2 * this.padding + this.labelHeight);
      }
    });

    if (tabs) {
      groupLayout.height += this.itemLayoutMap.tab.height;
      groupLayout.width = Math.max(groupLayout.width, tabs * this.itemLayoutMap.tab.width + 2 * this.padding);
    }

    uiInjected.forEach(item => {
      if (directionIn !== "horizontal" && (item.layout.sizing === "both" || item.layout.sizing === "horizontal")) item.layout.width = groupLayout.width - 2 * this.padding;
      if (directionIn !== "vertical" && (item.layout.sizing === "both" || item.layout.sizing === "vertical")) item.layout.height = groupLayout.height - 2 * this.padding - this.labelHeight;
    });
    return groupLayout;
  }

  static offsetLayout(uiAdjusted, directionIn, layoutIn) {
    var direction = directionIn || "vertical";
    var $left = (layoutIn.left || 0) + this.padding;
    var $top = (layoutIn.top || 0) + this.padding + this.labelHeight;
    var width = layoutIn.width,
        height = layoutIn.height;
    uiAdjusted.forEach(item => {
      item.layout.left = $left;
      item.layout.top = $top; // center the item

      if (direction === "horizontal" || direction === "stacked") item.layout.top += (height - this.labelHeight - item.layout.height) / 2 - this.padding;else if (direction === "vertical" || direction === "stacked") item.layout.left += (width - item.layout.width) / 2 - this.padding;
      if (item.type === "hgroup") this.offsetLayout(item.items, "horizontal", item.layout);else if (item.type === "vgroup") this.offsetLayout(item.items, "vertical", item.layout);else if (item.type === "tgroup") this.offsetLayout(item.items, "stacked", item.layout);
      if (direction === "horizontal") $left += item.layout.width;else if (direction === "vertical") $top += item.layout.height;
    });
    return uiAdjusted;
  }

  static calcLayout(ui) {
    this.injectLayout(ui);
    var layout = this.adjustLayout(ui);
    this.offsetLayout(ui, "vertical", layout);
    layout.left = 0;
    layout.top = 0;
    return {
      ui,
      layout
    };
  }

}

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(Layout, "padding", 0.2);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(Layout, "labelHeight", 0.5);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(Layout, "itemLayoutMap", {
  hslider: {
    width: 5,
    height: 1,
    sizing: "horizontal"
  },
  vslider: {
    width: 1,
    height: 5,
    sizing: "vertical"
  },
  nentry: {
    width: 3,
    height: 1,
    sizing: "horizontal"
  },
  button: {
    width: 2,
    height: 1,
    sizing: "horizontal"
  },
  checkbox: {
    width: 2,
    height: 1,
    sizing: "horizontal"
  },
  knob: {
    width: 1,
    height: 1,
    sizing: "none"
  },
  menu: {
    width: 3,
    height: 1,
    sizing: "horizontal"
  },
  radio: {
    width: 2,
    height: 2,
    sizing: "both"
  },
  led: {
    width: 1,
    height: 1,
    sizing: "none"
  },
  hbargraph: {
    width: 5,
    height: 1,
    sizing: "horizontal"
  },
  vbargraph: {
    width: 1,
    height: 5,
    sizing: "vertical"
  },
  tab: {
    width: 1,
    height: 2,
    sizing: "none"
  }
});

/***/ }),

/***/ "./src/components/Base.scss":
/*!**********************************!*\
  !*** ./src/components/Base.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/lib/loader.js!./Base.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/Base.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/Base.ts":
/*!********************************!*\
  !*** ./src/components/Base.ts ***!
  \********************************/
/*! exports provided: FaustUIItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaustUIItem", function() { return FaustUIItem; });
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/components/utils.ts");
/* harmony import */ var _Base_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Base.scss */ "./src/components/Base.scss");
/* harmony import */ var _Base_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Base_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Component */ "./src/components/Component.ts");



/* eslint-disable @typescript-eslint/no-unused-vars */



class FaustUIItem extends _Component__WEBPACK_IMPORTED_MODULE_4__["Component"] {
  constructor() {
    super(...arguments);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "container", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "className", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "handleKeyDown", e => {});

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "handleKeyUp", e => {});

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "handleTouchStart", e => {
      var rect = e.currentTarget.getBoundingClientRect();
      var prevX = e.touches[0].pageX;
      var prevY = e.touches[0].pageY;
      var fromX = prevX - rect.left;
      var fromY = prevY - rect.top;
      var prevValue = this.state.value;
      this.handlePointerDown({
        x: fromX,
        y: fromY,
        originalEvent: e
      });

      var handleTouchMove = e => {
        e.preventDefault();
        var pageX = e.changedTouches[0].pageX;
        var pageY = e.changedTouches[0].pageY;
        var movementX = pageX - prevX;
        var movementY = pageY - prevY;
        prevX = pageX;
        prevY = pageY;
        var x = pageX - rect.left;
        var y = pageY - rect.top;
        this.handlePointerDrag({
          prevValue,
          x,
          y,
          fromX,
          fromY,
          movementX,
          movementY,
          originalEvent: e
        });
      };

      var handleTouchEnd = e => {
        e.preventDefault();
        var x = e.changedTouches[0].pageX - rect.left;
        var y = e.changedTouches[0].pageY - rect.top;
        this.handlePointerUp({
          x,
          y,
          originalEvent: e
        });
        document.removeEventListener("touchmove", handleTouchMove);
        document.removeEventListener("touchend", handleTouchEnd);
      };

      document.addEventListener("touchmove", handleTouchMove, {
        passive: false
      });
      document.addEventListener("touchend", handleTouchEnd, {
        passive: false
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "handleWheel", e => {});

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "handleClick", e => {});

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "handleMouseDown", e => {
      e.preventDefault();
      e.currentTarget.focus();
      var rect = e.currentTarget.getBoundingClientRect();
      var fromX = e.pageX - rect.left;
      var fromY = e.pageY - rect.top;
      var prevValue = this.state.value;
      this.handlePointerDown({
        x: fromX,
        y: fromY,
        originalEvent: e
      });

      var handleMouseMove = e => {
        e.preventDefault();
        var x = e.pageX - rect.left;
        var y = e.pageY - rect.top;
        this.handlePointerDrag({
          prevValue,
          x,
          y,
          fromX,
          fromY,
          movementX: e.movementX,
          movementY: e.movementY,
          originalEvent: e
        });
      };

      var handleMouseUp = e => {
        e.preventDefault();
        var x = e.pageX - rect.left;
        var y = e.pageY - rect.top;
        this.handlePointerUp({
          x,
          y,
          originalEvent: e
        });
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "handleMouseOver", e => {});

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "handleMouseOut", e => {});

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "handleContextMenu", e => {});

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "handlePointerDown", e => {});

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "handlePointerDrag", e => {});

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "handlePointerUp", e => {});

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "handleFocusIn", e => this.setState({
      focus: true
    }));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "handleFocusOut", e => this.setState({
      focus: false
    }));
  }

  get displayValue() {
    var _this$state = this.state,
        value = _this$state.value,
        type = _this$state.type,
        unitstyle = _this$state.unitstyle,
        units = _this$state.units;
    if (type === "enum") return Object.keys(this.state.enums).find(key => this.state.enums[key] === value) || "";
    if (type === "int") return value.toFixed(0);
    if (type === "float") return value.toFixed(2);
    if (unitstyle === "time") return value.toFixed(type === "int" ? 0 : 2) + " ms";
    if (unitstyle === "hertz") return value.toFixed(type === "int" ? 0 : 2) + " Hz";
    if (unitstyle === "decibel") return value.toFixed(type === "int" ? 0 : 2) + " dB";
    if (unitstyle === "%") return value.toFixed(type === "int" ? 0 : 2) + " %";
    if (unitstyle === "pan") return value === 0 ? "C" : (type === "int" ? Math.abs(value) : Math.abs(value).toFixed(2)) + (value < 0 ? " L" : " R");
    if (unitstyle === "semitones") return value.toFixed(type === "int" ? 0 : 2) + " st";
    if (unitstyle === "midi") return Object(_utils__WEBPACK_IMPORTED_MODULE_2__["toMIDI"])(value);
    if (unitstyle === "custom") return value.toFixed(type === "int" ? 0 : 2) + " " + units;
    if (unitstyle === "native") return value.toFixed(type === "int" ? 0 : 2);
    return "N/A";
  }

  setValue(value) {
    this.setState({
      value
    });
    this.change(value);
  }

  change(valueIn) {
    if (this.state.emitter) this.state.emitter.emit("paramChangeByUI", {
      value: typeof valueIn === "number" ? valueIn : this.state.value,
      path: this.state.address
    });
  }

  setState(newState) {
    var shouldUpdate = false;

    for (var _key in newState) {
      var stateKey = _key;
      var stateValue = newState[stateKey];

      if (stateKey === "style") {
        if (this.state.style) {
          for (var styleKey in newState.style) {
            if (styleKey in this.state.style && this.state.style[styleKey] !== newState.style[styleKey]) {
              this.state.style[styleKey] = newState.style[styleKey];
              shouldUpdate = true;
            }
          }
        } else {
          this.state.style = newState.style;
          shouldUpdate = true;
        }
      } else if (stateKey in this.state && this.state[stateKey] !== stateValue) {
        this.state[stateKey] = stateValue;
        shouldUpdate = true;
      } else return;

      if (shouldUpdate) this.emit(stateKey, this.state[stateKey]);
    }
  }

  componentWillMount() {
    this.container = document.createElement("div");
    this.container.className = ["faust-ui-component", "faust-ui-component-" + this.className].join(" ");
    this.container.tabIndex = 1;
    this.container.title = this.state.tooltip;
  }

  resize() {
    var style = this.state ? _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, this.defaultProps.style, this.state.style) : this.defaultProps.style;
    this.container.style.width = "".concat(style.width, "px");
    this.container.style.height = "".concat(style.height, "px");
    this.container.style.left = "".concat(style.left, "px");
    this.container.style.top = "".concat(style.top, "px");
  }

  componentDidMount() {
    this.paint();
    this.state.emitter.on("paramChangeByDSP", e => {
      if (e.path === this.state.address) {
        this.setState({
          value: e.value
        });
        this.paint();
      }
    });
    this.state.emitter.on("layoutChange", () => {
      var style = this.state.style;
      this.setState({
        style
      });
      this.paint();
    });
    this.state.emitter.on("uiChange", () => {
      this.setState(this.state);
      this.paint();
    });
    this.on("style", () => this.resize());
  }

  paint() {}

  mount() {
    this.resize();
    return super.mount();
  }

}

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(FaustUIItem, "defaultProps", {
  value: 0,
  active: true,
  focus: false,
  label: "",
  address: "",
  min: 0,
  max: 1,
  enums: {},
  type: "float",
  unitstyle: "native",
  units: "",
  exponent: 1,
  step: 0.01,
  style: {
    width: 45,
    height: 15,
    left: 0,
    top: 0
  }
});

/***/ }),

/***/ "./src/components/Button.scss":
/*!************************************!*\
  !*** ./src/components/Button.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/lib/loader.js!./Button.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/Button.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/Button.ts":
/*!**********************************!*\
  !*** ./src/components/Button.ts ***!
  \**********************************/
/*! exports provided: FaustUIButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaustUIButton", function() { return FaustUIButton; });
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Base */ "./src/components/Base.ts");
/* harmony import */ var _Button_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Button.scss */ "./src/components/Button.scss");
/* harmony import */ var _Button_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Button_scss__WEBPACK_IMPORTED_MODULE_3__);




class FaustUIButton extends _Base__WEBPACK_IMPORTED_MODULE_2__["FaustUIItem"] {
  constructor() {
    super(...arguments);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "className", "button");

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "btn", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "span", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "handlePointerDown", () => {
      this.setValue(1);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "handlePointerUp", () => {
      this.setValue(0);
    });
  }

  static get defaultProps() {
    var inherited = super.defaultProps;
    return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, inherited, {
      style: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, inherited.style, {
        fontname: "Arial",
        fontsize: undefined,
        fontface: "normal",
        bgcolor: "rgba(40, 40, 40, 1)",
        bgoncolor: "rgba(18, 18, 18, 1)",
        bordercolor: "rgba(80, 80, 80, 1)",
        borderoncolor: "rgba(255, 165, 0, 1)",
        textcolor: "rgba(226, 222, 255, 0.5)",
        textoncolor: "rgba(255, 165, 0, 1)"
      })
    });
  }

  componentWillMount() {
    super.componentWillMount();
    this.btn = document.createElement("button");
    this.span = document.createElement("span");
    this.span.innerText = this.state.label;
    this.setStyle();
  }

  setStyle() {
    var value = this.state.value;

    var style = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, this.defaultProps.style, this.state.style);

    this.btn.style.backgroundColor = value ? style.bgoncolor : style.bgcolor;
    this.btn.style.borderColor = value ? style.borderoncolor : style.bordercolor;
    this.btn.style.color = value ? style.textoncolor : style.textcolor;
    this.btn.style.fontSize = "".concat(style.fontsize || style.height / 4, "px");
    this.btn.style.fontFamily = "".concat(style.fontname, ", sans-serif");
    this.btn.style.fontStyle = style.fontface;
  }

  componentDidMount() {
    super.componentDidMount();
    this.btn.addEventListener("mousedown", this.handlePointerDown);
    this.btn.addEventListener("mouseup", this.handlePointerUp);
    this.btn.addEventListener("touchstart", this.handlePointerDown);
    this.btn.addEventListener("touchend", this.handlePointerUp);
    this.on("style", () => this.setStyle());
    this.on("label", () => this.span.innerText = this.state.label);
  }

  mount() {
    this.btn.appendChild(this.span);
    this.container.appendChild(this.btn);
    return super.mount();
  }

}

/***/ }),

/***/ "./src/components/Checkbox.scss":
/*!**************************************!*\
  !*** ./src/components/Checkbox.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/lib/loader.js!./Checkbox.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/Checkbox.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/Checkbox.ts":
/*!************************************!*\
  !*** ./src/components/Checkbox.ts ***!
  \************************************/
/*! exports provided: FaustUICheckbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaustUICheckbox", function() { return FaustUICheckbox; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button */ "./src/components/Button.ts");
/* harmony import */ var _Checkbox_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Checkbox.scss */ "./src/components/Checkbox.scss");
/* harmony import */ var _Checkbox_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Checkbox_scss__WEBPACK_IMPORTED_MODULE_2__);



class FaustUICheckbox extends _Button__WEBPACK_IMPORTED_MODULE_1__["FaustUIButton"] {
  constructor() {
    super(...arguments);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "className", "checkbox");

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "handlePointerDown", () => {
      this.setValue(1 - this.state.value);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "handlePointerUp", () => {});
  }

}

/***/ }),

/***/ "./src/components/Component.ts":
/*!*************************************!*\
  !*** ./src/components/Component.ts ***!
  \*************************************/
/*! exports provided: Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! events */ "./node_modules/events/events.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_2__);



class Component extends events__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"] {
  on(type, listener) {
    return super.on(type, listener);
  }

  once(type, listener) {
    return super.once(type, listener);
  }

  off(type, listener) {
    return super.off(type, listener);
  }

  removeAllListeners(type) {
    return super.removeAllListeners(type);
  }

  emit(type, e) {
    return super.emit(type, e);
  }

  get defaultProps() {
    return this.constructor.defaultProps;
  }

  constructor(props) {
    super();

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "children", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "container", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "state", void 0);

    var state = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, this.defaultProps, props);

    this.state = state;
    return this;
  }

  render() {
    this.componentWillMount();
    var rendered = this.mount();
    this.componentDidMount();
    return rendered;
  }

  setState(newState) {
    for (var _key in newState) {
      var stateKey = _key;
      var stateValue = newState[stateKey];

      if (stateKey in this.state && this.state[stateKey] !== stateValue) {
        this.state[stateKey] = stateValue;
        this.emit(stateKey, stateValue);
      }
    }
  }

  componentWillMount() {}

  componentDidMount() {}

  mount() {
    if (this.container && this.children) this.children.forEach(child => child.render().forEach(e => this.container.appendChild(e)));
    return [this.container];
  }

}

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(Component, "defaultProps", {});

/***/ }),

/***/ "./src/components/Nentry.scss":
/*!************************************!*\
  !*** ./src/components/Nentry.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/lib/loader.js!./Nentry.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/Nentry.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/components/Nentry.ts":
/*!**********************************!*\
  !*** ./src/components/Nentry.ts ***!
  \**********************************/
/*! exports provided: FaustUINentry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaustUINentry", function() { return FaustUINentry; });
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Base */ "./src/components/Base.ts");
/* harmony import */ var _Nentry_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Nentry.scss */ "./src/components/Nentry.scss");
/* harmony import */ var _Nentry_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Nentry_scss__WEBPACK_IMPORTED_MODULE_3__);




class FaustUINentry extends _Base__WEBPACK_IMPORTED_MODULE_2__["FaustUIItem"] {
  constructor() {
    super(...arguments);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "className", "nentry");

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "label", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "input", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "handleChange", e => {
      this.setValue(+e.currentTarget.value);
    });
  }

  static get defaultProps() {
    var inherited = super.defaultProps;
    return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, inherited, {
      style: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, inherited.style, {
        fontname: "Arial",
        fontsize: undefined,
        fontface: "regular",
        bgcolor: "rgba(18, 18, 18, 1)",
        bordercolor: "rgba(80, 80, 80, 1)",
        labelcolor: "rgba(226, 222, 255, 0.5)",
        textcolor: "rgba(226, 222, 255, 0.5)"
      })
    });
  }

  componentWillMount() {
    super.componentWillMount();
    this.label = document.createElement("div");
    this.label.className = "faust-ui-component-label";
    this.label.innerText = this.state.label;
    this.input = document.createElement("input");
    this.input.type = "number";
    this.input.value = this.state.value.toString();
    this.input.max = this.state.max.toString();
    this.input.min = this.state.min.toString();
    this.input.step = this.state.step.toString();
    this.setStyle();
  }

  setStyle() {
    var style = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, this.defaultProps.style, this.state.style);

    this.input.style.backgroundColor = style.bgcolor;
    this.input.style.borderColor = style.bordercolor;
    this.input.style.color = style.textcolor;
    this.input.style.fontSize = "".concat(style.fontsize || style.height / 4, "px");
    this.label.style.fontSize = "".concat(style.height / 4, "px");
  }

  componentDidMount() {
    super.componentDidMount();
    this.input.addEventListener("change", this.handleChange);
    this.on("style", () => this.setStyle());
    this.on("label", () => this.label.innerText = this.state.label);
    this.on("value", () => this.input.value = this.state.value.toString());
    this.on("max", () => this.input.max = this.state.max.toString());
    this.on("min", () => this.input.min = this.state.min.toString());
    this.on("step", () => this.input.step = this.state.step.toString());
  }

  mount() {
    this.container.appendChild(this.label);
    this.container.appendChild(this.input);
    return super.mount();
  }

}

/***/ }),

/***/ "./src/components/utils.ts":
/*!*********************************!*\
  !*** ./src/components/utils.ts ***!
  \*********************************/
/*! exports provided: toMIDI, toRad, atodb, dbtoa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toMIDI", function() { return toMIDI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toRad", function() { return toRad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "atodb", function() { return atodb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dbtoa", function() { return dbtoa; });
var toMIDI = f => ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"][(f % 12 + 12) % 12] + Math.round(f / 12 - 2);
var toRad = degrees => degrees * Math.PI / 180;
var atodb = a => 20 * Math.log10(a);
var dbtoa = db => Math.pow(10, db / 20);

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/lib/loader.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/index.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: FaustUI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FaustUI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FaustUI */ "./src/FaustUI.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FaustUI", function() { return _FaustUI__WEBPACK_IMPORTED_MODULE_0__["FaustUI"]; });



/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9GYXVzdFVJL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9GYXVzdFVJL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0ZhdXN0VUkvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9GYXVzdFVJLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0U3ByZWFkLmpzIiwid2VicGFjazovL0ZhdXN0VUkvLi9zcmMvY29tcG9uZW50cy9CYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vRmF1c3RVSS8uL3NyYy9jb21wb25lbnRzL0J1dHRvbi5zY3NzIiwid2VicGFjazovL0ZhdXN0VUkvLi9zcmMvY29tcG9uZW50cy9DaGVja2JveC5zY3NzIiwid2VicGFjazovL0ZhdXN0VUkvLi9zcmMvY29tcG9uZW50cy9OZW50cnkuc2NzcyIsIndlYnBhY2s6Ly9GYXVzdFVJLy4vc3JjL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vRmF1c3RVSS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vRmF1c3RVSS8uL25vZGVfbW9kdWxlcy9ldmVudHMvZXZlbnRzLmpzIiwid2VicGFjazovL0ZhdXN0VUkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vRmF1c3RVSS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vRmF1c3RVSS8uL3NyYy9GYXVzdFVJLnRzIiwid2VicGFjazovL0ZhdXN0VUkvLi9zcmMvRmF1c3RVSUdyb3VwLnRzIiwid2VicGFjazovL0ZhdXN0VUkvLi9zcmMvRmF1c3RVSVJvb3QudHMiLCJ3ZWJwYWNrOi8vRmF1c3RVSS8uL3NyYy9MYXlvdXQudHMiLCJ3ZWJwYWNrOi8vRmF1c3RVSS8uL3NyYy9jb21wb25lbnRzL0Jhc2Uuc2Nzcz9jZWRjIiwid2VicGFjazovL0ZhdXN0VUkvLi9zcmMvY29tcG9uZW50cy9CYXNlLnRzIiwid2VicGFjazovL0ZhdXN0VUkvLi9zcmMvY29tcG9uZW50cy9CdXR0b24uc2Nzcz9iMGY3Iiwid2VicGFjazovL0ZhdXN0VUkvLi9zcmMvY29tcG9uZW50cy9CdXR0b24udHMiLCJ3ZWJwYWNrOi8vRmF1c3RVSS8uL3NyYy9jb21wb25lbnRzL0NoZWNrYm94LnNjc3M/YmU5MiIsIndlYnBhY2s6Ly9GYXVzdFVJLy4vc3JjL2NvbXBvbmVudHMvQ2hlY2tib3gudHMiLCJ3ZWJwYWNrOi8vRmF1c3RVSS8uL3NyYy9jb21wb25lbnRzL0NvbXBvbmVudC50cyIsIndlYnBhY2s6Ly9GYXVzdFVJLy4vc3JjL2NvbXBvbmVudHMvTmVudHJ5LnNjc3M/OTRlYSIsIndlYnBhY2s6Ly9GYXVzdFVJLy4vc3JjL2NvbXBvbmVudHMvTmVudHJ5LnRzIiwid2VicGFjazovL0ZhdXN0VUkvLi9zcmMvY29tcG9uZW50cy91dGlscy50cyIsIndlYnBhY2s6Ly9GYXVzdFVJLy4vc3JjL2luZGV4LnNjc3M/NzVlNCIsIndlYnBhY2s6Ly9GYXVzdFVJLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbIkZhdXN0VUkiLCJFdmVudEVtaXR0ZXIiLCJvbiIsInR5cGUiLCJsaXN0ZW5lciIsIm9uY2UiLCJvZmYiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJlbWl0IiwiZSIsImNvbnN0cnVjdG9yIiwib3B0aW9ucyIsInJvb3QiLCJ1aUluIiwidWkiLCJyZW5kZXIiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZmF1c3RVSVJvb3QiLCJzZXRTdGF0ZSIsImNhbGMiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aWR0aCIsImhlaWdodCIsIkxheW91dCIsImNhbGNMYXlvdXQiLCJsYXlvdXQiLCJGYXVzdFVJUm9vdCIsImVtaXR0ZXIiLCJjaGlsZHJlbiIsImZvckVhY2giLCJhcHBlbmRDaGlsZCIsIl91aSIsInN0YXRlIiwiY2hhbmdlUGFyYW1CeVVJIiwicGF0aCIsInZhbHVlIiwiY2hhbmdlUGFyYW1CeURTUCIsIkZhdXN0VUlHcm91cCIsIkNvbXBvbmVudCIsImdldENvbXBvbmVudCIsIml0ZW0iLCJncmlkIiwiaXRlbUxlZnQiLCJpdGVtVG9wIiwicHJlZGljdFR5cGUiLCJ0b29sdGlwTWV0YSIsIm1ldGEiLCJmaW5kIiwidG9vbHRpcCIsInVuZGVmaW5lZCIsImxhYmVsIiwibWluIiwibWF4IiwiYWRkcmVzcyIsInByb3BzIiwic3R5bGUiLCJsZWZ0IiwidG9wIiwiaXNGaW5pdGUiLCJOdW1iZXIiLCJNSU5fVkFMVUUiLCJNQVhfVkFMVUUiLCJzdGVwIiwiaW5pdCIsIkZhdXN0VUlCdXR0b24iLCJGYXVzdFVJQ2hlY2tib3giLCJGYXVzdFVJTmVudHJ5IiwiY29tcG9uZW50V2lsbE1vdW50IiwiaXRlbXMiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ1cGRhdGVVSSIsIm91dGVyTGVmdCIsIm91dGVyVG9wIiwiY2xhc3NOYW1lIiwiam9pbiIsInRhYnMiLCJwdXNoIiwiY29tcG9uZW50IiwibGVuZ3RoIiwiaW9JdGVtIiwiaXRlbUNvbXBvbmVudCIsInVwZGF0ZUxheW91dCIsImNoaWxkIiwiaSIsImNvbXBvbmVudERpZE1vdW50IiwidXBkYXRlQ2hpbGRyZW4iLCJ4R3JpZHMiLCJ5R3JpZHMiLCJNYXRoIiwiY2hpbGRyZW5TdGF0ZVVwZGF0ZSIsImlubmVySFRNTCIsIm1hcCIsImdyb3VwIiwibW91bnQiLCJzdGFydHNXaXRoIiwiaW5qZWN0TGF5b3V0IiwiaXRlbUxheW91dE1hcCIsImFkanVzdExheW91dCIsInVpSW5qZWN0ZWQiLCJkaXJlY3Rpb25JbiIsImdyb3VwTGF5b3V0IiwicGFkZGluZyIsImxhYmVsSGVpZ2h0Iiwic2l6aW5nIiwiZGlyZWN0aW9uIiwidGFiIiwib2Zmc2V0TGF5b3V0IiwidWlBZGp1c3RlZCIsImxheW91dEluIiwiJGxlZnQiLCIkdG9wIiwiaHNsaWRlciIsInZzbGlkZXIiLCJuZW50cnkiLCJidXR0b24iLCJjaGVja2JveCIsImtub2IiLCJtZW51IiwicmFkaW8iLCJsZWQiLCJoYmFyZ3JhcGgiLCJ2YmFyZ3JhcGgiLCJGYXVzdFVJSXRlbSIsInJlY3QiLCJjdXJyZW50VGFyZ2V0IiwicHJldlgiLCJ0b3VjaGVzIiwicGFnZVgiLCJwcmV2WSIsInBhZ2VZIiwiZnJvbVgiLCJmcm9tWSIsInByZXZWYWx1ZSIsImhhbmRsZVBvaW50ZXJEb3duIiwieCIsInkiLCJvcmlnaW5hbEV2ZW50IiwiaGFuZGxlVG91Y2hNb3ZlIiwicHJldmVudERlZmF1bHQiLCJjaGFuZ2VkVG91Y2hlcyIsIm1vdmVtZW50WCIsIm1vdmVtZW50WSIsImhhbmRsZVBvaW50ZXJEcmFnIiwiaGFuZGxlVG91Y2hFbmQiLCJoYW5kbGVQb2ludGVyVXAiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicGFzc2l2ZSIsImZvY3VzIiwiaGFuZGxlTW91c2VNb3ZlIiwiaGFuZGxlTW91c2VVcCIsImRpc3BsYXlWYWx1ZSIsInVuaXRzdHlsZSIsInVuaXRzIiwiT2JqZWN0Iiwia2V5cyIsImVudW1zIiwia2V5IiwidG9GaXhlZCIsImFicyIsInRvTUlESSIsInNldFZhbHVlIiwiY2hhbmdlIiwidmFsdWVJbiIsIm5ld1N0YXRlIiwic2hvdWxkVXBkYXRlIiwic3RhdGVLZXkiLCJzdGF0ZVZhbHVlIiwic3R5bGVLZXkiLCJ0YWJJbmRleCIsInRpdGxlIiwicmVzaXplIiwiZGVmYXVsdFByb3BzIiwicGFpbnQiLCJhY3RpdmUiLCJleHBvbmVudCIsImluaGVyaXRlZCIsImZvbnRuYW1lIiwiZm9udHNpemUiLCJmb250ZmFjZSIsImJnY29sb3IiLCJiZ29uY29sb3IiLCJib3JkZXJjb2xvciIsImJvcmRlcm9uY29sb3IiLCJ0ZXh0Y29sb3IiLCJ0ZXh0b25jb2xvciIsImJ0biIsInNwYW4iLCJpbm5lclRleHQiLCJzZXRTdHlsZSIsImJhY2tncm91bmRDb2xvciIsImJvcmRlckNvbG9yIiwiY29sb3IiLCJmb250U2l6ZSIsImZvbnRGYW1pbHkiLCJmb250U3R5bGUiLCJyZW5kZXJlZCIsImxhYmVsY29sb3IiLCJpbnB1dCIsInRvU3RyaW5nIiwiaGFuZGxlQ2hhbmdlIiwiZiIsInJvdW5kIiwidG9SYWQiLCJkZWdyZWVzIiwiUEkiLCJhdG9kYiIsImEiLCJsb2cxMCIsImRidG9hIiwiZGIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQzs7Ozs7Ozs7Ozs7QUNmQSxxQkFBcUIsbUJBQU8sQ0FBQyxpRkFBa0I7O0FBRS9DO0FBQ0EsaUJB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QUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQSxLQUFLLEtBQXdDLEVBQUUsRUFFN0M7O0FBRUYsUUFBUSxzQkFBaUI7QUFDekI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtB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QUVyRDtBQUNBOzs7O0FBSUEsZUFBZTs7QUFFZjtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyxtR0FBZ0Q7O0FBRXJFOztBQUVBLEdBQUcsS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7OztBQ25CZjtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkZhdXN0VUlcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiRmF1c3RVSVwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7IiwidmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcIi4vZGVmaW5lUHJvcGVydHlcIik7XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307XG4gICAgdmFyIG93bktleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuXG4gICAgaWYgKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBvd25LZXlzID0gb3duS2V5cy5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwgc3ltKS5lbnVtZXJhYmxlO1xuICAgICAgfSkpO1xuICAgIH1cblxuICAgIG93bktleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0U3ByZWFkOyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmZhdXN0LXVpLWNvbXBvbmVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG92ZXJmbG93OiBoaWRkZW47IH1cXG4gIC5mYXVzdC11aS1jb21wb25lbnQ6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lOyB9XFxuICAuZmF1c3QtdWktY29tcG9uZW50IC5mYXVzdC11aS1jb21wb25lbnQtbGFiZWwge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBtYXJnaW46IDRweDsgfVxcblwiLCBcIlwiXSk7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5mYXVzdC11aS1jb21wb25lbnQuZmF1c3QtdWktY29tcG9uZW50LWJ1dHRvbiBidXR0b24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItd2lkdGg6IDFweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIG1hcmdpbjogNHB4O1xcbiAgZmxleDogMSAwIGF1dG87XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjUpOyB9XFxuXCIsIFwiXCJdKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmZhdXN0LXVpLWNvbXBvbmVudC5mYXVzdC11aS1jb21wb25lbnQtY2hlY2tib3ggYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxcHg7XFxuICBtYXJnaW46IDRweDtcXG4gIGZsZXg6IDEgMCBhdXRvO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC41KTsgfVxcblwiLCBcIlwiXSk7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5mYXVzdC11aS1jb21wb25lbnQuZmF1c3QtdWktY29tcG9uZW50LW5lbnRyeSBpbnB1dCB7XFxuICBtYXJnaW46IDBweCA0cHg7XFxuICBwYWRkaW5nOiAwcHggMnB4O1xcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjUpOyB9XFxuXCIsIFwiXCJdKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmZhdXN0LXVpLXJvb3Qge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogYmxvY2s7IH1cXG4gIC5mYXVzdC11aS1yb290IC5mYXVzdC11aS1ncm91cCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODAsIDgwLCA4MCwgMC43NSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgYm9yZGVyOiAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KSBzb2xpZDsgfVxcbiAgLmZhdXN0LXVpLXJvb3QgLmZhdXN0LXVpLWl0ZW0ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IGJsb2NrOyB9XFxuXCIsIFwiXCJdKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwie1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBtb2R1bGVzW19pXTsgLy8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuICAgICAgLy8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcbiAgICAgIC8vIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cbiAgICAgIC8vIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblxuICAgICAgaWYgKGl0ZW1bMF0gPT0gbnVsbCB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBpZiAobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2UgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCIoXCIuY29uY2F0KGl0ZW1bMl0sIFwiKSBhbmQgKFwiKS5jb25jYXQobWVkaWFRdWVyeSwgXCIpXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFIgPSB0eXBlb2YgUmVmbGVjdCA9PT0gJ29iamVjdCcgPyBSZWZsZWN0IDogbnVsbFxudmFyIFJlZmxlY3RBcHBseSA9IFIgJiYgdHlwZW9mIFIuYXBwbHkgPT09ICdmdW5jdGlvbidcbiAgPyBSLmFwcGx5XG4gIDogZnVuY3Rpb24gUmVmbGVjdEFwcGx5KHRhcmdldCwgcmVjZWl2ZXIsIGFyZ3MpIHtcbiAgICByZXR1cm4gRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwodGFyZ2V0LCByZWNlaXZlciwgYXJncyk7XG4gIH1cblxudmFyIFJlZmxlY3RPd25LZXlzXG5pZiAoUiAmJiB0eXBlb2YgUi5vd25LZXlzID09PSAnZnVuY3Rpb24nKSB7XG4gIFJlZmxlY3RPd25LZXlzID0gUi5vd25LZXlzXG59IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgUmVmbGVjdE93bktleXMgPSBmdW5jdGlvbiBSZWZsZWN0T3duS2V5cyh0YXJnZXQpIHtcbiAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGFyZ2V0KVxuICAgICAgLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHRhcmdldCkpO1xuICB9O1xufSBlbHNlIHtcbiAgUmVmbGVjdE93bktleXMgPSBmdW5jdGlvbiBSZWZsZWN0T3duS2V5cyh0YXJnZXQpIHtcbiAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGFyZ2V0KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gUHJvY2Vzc0VtaXRXYXJuaW5nKHdhcm5pbmcpIHtcbiAgaWYgKGNvbnNvbGUgJiYgY29uc29sZS53YXJuKSBjb25zb2xlLndhcm4od2FybmluZyk7XG59XG5cbnZhciBOdW1iZXJJc05hTiA9IE51bWJlci5pc05hTiB8fCBmdW5jdGlvbiBOdW1iZXJJc05hTih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT09IHZhbHVlO1xufVxuXG5mdW5jdGlvbiBFdmVudEVtaXR0ZXIoKSB7XG4gIEV2ZW50RW1pdHRlci5pbml0LmNhbGwodGhpcyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IEV2ZW50RW1pdHRlcjtcblxuLy8gQmFja3dhcmRzLWNvbXBhdCB3aXRoIG5vZGUgMC4xMC54XG5FdmVudEVtaXR0ZXIuRXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHMgPSB1bmRlZmluZWQ7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHNDb3VudCA9IDA7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9tYXhMaXN0ZW5lcnMgPSB1bmRlZmluZWQ7XG5cbi8vIEJ5IGRlZmF1bHQgRXZlbnRFbWl0dGVycyB3aWxsIHByaW50IGEgd2FybmluZyBpZiBtb3JlIHRoYW4gMTAgbGlzdGVuZXJzIGFyZVxuLy8gYWRkZWQgdG8gaXQuIFRoaXMgaXMgYSB1c2VmdWwgZGVmYXVsdCB3aGljaCBoZWxwcyBmaW5kaW5nIG1lbW9yeSBsZWFrcy5cbnZhciBkZWZhdWx0TWF4TGlzdGVuZXJzID0gMTA7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShFdmVudEVtaXR0ZXIsICdkZWZhdWx0TWF4TGlzdGVuZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBkZWZhdWx0TWF4TGlzdGVuZXJzO1xuICB9LFxuICBzZXQ6IGZ1bmN0aW9uKGFyZykge1xuICAgIGlmICh0eXBlb2YgYXJnICE9PSAnbnVtYmVyJyB8fCBhcmcgPCAwIHx8IE51bWJlcklzTmFOKGFyZykpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgdmFsdWUgb2YgXCJkZWZhdWx0TWF4TGlzdGVuZXJzXCIgaXMgb3V0IG9mIHJhbmdlLiBJdCBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIG51bWJlci4gUmVjZWl2ZWQgJyArIGFyZyArICcuJyk7XG4gICAgfVxuICAgIGRlZmF1bHRNYXhMaXN0ZW5lcnMgPSBhcmc7XG4gIH1cbn0pO1xuXG5FdmVudEVtaXR0ZXIuaW5pdCA9IGZ1bmN0aW9uKCkge1xuXG4gIGlmICh0aGlzLl9ldmVudHMgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgdGhpcy5fZXZlbnRzID09PSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykuX2V2ZW50cykge1xuICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICB9XG5cbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gdGhpcy5fbWF4TGlzdGVuZXJzIHx8IHVuZGVmaW5lZDtcbn07XG5cbi8vIE9idmlvdXNseSBub3QgYWxsIEVtaXR0ZXJzIHNob3VsZCBiZSBsaW1pdGVkIHRvIDEwLiBUaGlzIGZ1bmN0aW9uIGFsbG93c1xuLy8gdGhhdCB0byBiZSBpbmNyZWFzZWQuIFNldCB0byB6ZXJvIGZvciB1bmxpbWl0ZWQuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnNldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uIHNldE1heExpc3RlbmVycyhuKSB7XG4gIGlmICh0eXBlb2YgbiAhPT0gJ251bWJlcicgfHwgbiA8IDAgfHwgTnVtYmVySXNOYU4obikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVGhlIHZhbHVlIG9mIFwiblwiIGlzIG91dCBvZiByYW5nZS4gSXQgbXVzdCBiZSBhIG5vbi1uZWdhdGl2ZSBudW1iZXIuIFJlY2VpdmVkICcgKyBuICsgJy4nKTtcbiAgfVxuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSBuO1xuICByZXR1cm4gdGhpcztcbn07XG5cbmZ1bmN0aW9uICRnZXRNYXhMaXN0ZW5lcnModGhhdCkge1xuICBpZiAodGhhdC5fbWF4TGlzdGVuZXJzID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIEV2ZW50RW1pdHRlci5kZWZhdWx0TWF4TGlzdGVuZXJzO1xuICByZXR1cm4gdGhhdC5fbWF4TGlzdGVuZXJzO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmdldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uIGdldE1heExpc3RlbmVycygpIHtcbiAgcmV0dXJuICRnZXRNYXhMaXN0ZW5lcnModGhpcyk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbiBlbWl0KHR5cGUpIHtcbiAgdmFyIGFyZ3MgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuICB2YXIgZG9FcnJvciA9ICh0eXBlID09PSAnZXJyb3InKTtcblxuICB2YXIgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICBpZiAoZXZlbnRzICE9PSB1bmRlZmluZWQpXG4gICAgZG9FcnJvciA9IChkb0Vycm9yICYmIGV2ZW50cy5lcnJvciA9PT0gdW5kZWZpbmVkKTtcbiAgZWxzZSBpZiAoIWRvRXJyb3IpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIC8vIElmIHRoZXJlIGlzIG5vICdlcnJvcicgZXZlbnQgbGlzdGVuZXIgdGhlbiB0aHJvdy5cbiAgaWYgKGRvRXJyb3IpIHtcbiAgICB2YXIgZXI7XG4gICAgaWYgKGFyZ3MubGVuZ3RoID4gMClcbiAgICAgIGVyID0gYXJnc1swXTtcbiAgICBpZiAoZXIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgLy8gTm90ZTogVGhlIGNvbW1lbnRzIG9uIHRoZSBgdGhyb3dgIGxpbmVzIGFyZSBpbnRlbnRpb25hbCwgdGhleSBzaG93XG4gICAgICAvLyB1cCBpbiBOb2RlJ3Mgb3V0cHV0IGlmIHRoaXMgcmVzdWx0cyBpbiBhbiB1bmhhbmRsZWQgZXhjZXB0aW9uLlxuICAgICAgdGhyb3cgZXI7IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG4gICAgfVxuICAgIC8vIEF0IGxlYXN0IGdpdmUgc29tZSBraW5kIG9mIGNvbnRleHQgdG8gdGhlIHVzZXJcbiAgICB2YXIgZXJyID0gbmV3IEVycm9yKCdVbmhhbmRsZWQgZXJyb3IuJyArIChlciA/ICcgKCcgKyBlci5tZXNzYWdlICsgJyknIDogJycpKTtcbiAgICBlcnIuY29udGV4dCA9IGVyO1xuICAgIHRocm93IGVycjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgfVxuXG4gIHZhciBoYW5kbGVyID0gZXZlbnRzW3R5cGVdO1xuXG4gIGlmIChoYW5kbGVyID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIFJlZmxlY3RBcHBseShoYW5kbGVyLCB0aGlzLCBhcmdzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbGVuID0gaGFuZGxlci5sZW5ndGg7XG4gICAgdmFyIGxpc3RlbmVycyA9IGFycmF5Q2xvbmUoaGFuZGxlciwgbGVuKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKVxuICAgICAgUmVmbGVjdEFwcGx5KGxpc3RlbmVyc1tpXSwgdGhpcywgYXJncyk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmZ1bmN0aW9uIF9hZGRMaXN0ZW5lcih0YXJnZXQsIHR5cGUsIGxpc3RlbmVyLCBwcmVwZW5kKSB7XG4gIHZhciBtO1xuICB2YXIgZXZlbnRzO1xuICB2YXIgZXhpc3Rpbmc7XG5cbiAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcImxpc3RlbmVyXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uLiBSZWNlaXZlZCB0eXBlICcgKyB0eXBlb2YgbGlzdGVuZXIpO1xuICB9XG5cbiAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG4gIGlmIChldmVudHMgPT09IHVuZGVmaW5lZCkge1xuICAgIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB0YXJnZXQuX2V2ZW50c0NvdW50ID0gMDtcbiAgfSBlbHNlIHtcbiAgICAvLyBUbyBhdm9pZCByZWN1cnNpb24gaW4gdGhlIGNhc2UgdGhhdCB0eXBlID09PSBcIm5ld0xpc3RlbmVyXCIhIEJlZm9yZVxuICAgIC8vIGFkZGluZyBpdCB0byB0aGUgbGlzdGVuZXJzLCBmaXJzdCBlbWl0IFwibmV3TGlzdGVuZXJcIi5cbiAgICBpZiAoZXZlbnRzLm5ld0xpc3RlbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRhcmdldC5lbWl0KCduZXdMaXN0ZW5lcicsIHR5cGUsXG4gICAgICAgICAgICAgICAgICBsaXN0ZW5lci5saXN0ZW5lciA/IGxpc3RlbmVyLmxpc3RlbmVyIDogbGlzdGVuZXIpO1xuXG4gICAgICAvLyBSZS1hc3NpZ24gYGV2ZW50c2AgYmVjYXVzZSBhIG5ld0xpc3RlbmVyIGhhbmRsZXIgY291bGQgaGF2ZSBjYXVzZWQgdGhlXG4gICAgICAvLyB0aGlzLl9ldmVudHMgdG8gYmUgYXNzaWduZWQgdG8gYSBuZXcgb2JqZWN0XG4gICAgICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcbiAgICB9XG4gICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV07XG4gIH1cblxuICBpZiAoZXhpc3RpbmcgPT09IHVuZGVmaW5lZCkge1xuICAgIC8vIE9wdGltaXplIHRoZSBjYXNlIG9mIG9uZSBsaXN0ZW5lci4gRG9uJ3QgbmVlZCB0aGUgZXh0cmEgYXJyYXkgb2JqZWN0LlxuICAgIGV4aXN0aW5nID0gZXZlbnRzW3R5cGVdID0gbGlzdGVuZXI7XG4gICAgKyt0YXJnZXQuX2V2ZW50c0NvdW50O1xuICB9IGVsc2Uge1xuICAgIGlmICh0eXBlb2YgZXhpc3RpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIEFkZGluZyB0aGUgc2Vjb25kIGVsZW1lbnQsIG5lZWQgdG8gY2hhbmdlIHRvIGFycmF5LlxuICAgICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV0gPVxuICAgICAgICBwcmVwZW5kID8gW2xpc3RlbmVyLCBleGlzdGluZ10gOiBbZXhpc3RpbmcsIGxpc3RlbmVyXTtcbiAgICAgIC8vIElmIHdlJ3ZlIGFscmVhZHkgZ290IGFuIGFycmF5LCBqdXN0IGFwcGVuZC5cbiAgICB9IGVsc2UgaWYgKHByZXBlbmQpIHtcbiAgICAgIGV4aXN0aW5nLnVuc2hpZnQobGlzdGVuZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBleGlzdGluZy5wdXNoKGxpc3RlbmVyKTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBmb3IgbGlzdGVuZXIgbGVha1xuICAgIG0gPSAkZ2V0TWF4TGlzdGVuZXJzKHRhcmdldCk7XG4gICAgaWYgKG0gPiAwICYmIGV4aXN0aW5nLmxlbmd0aCA+IG0gJiYgIWV4aXN0aW5nLndhcm5lZCkge1xuICAgICAgZXhpc3Rpbmcud2FybmVkID0gdHJ1ZTtcbiAgICAgIC8vIE5vIGVycm9yIGNvZGUgZm9yIHRoaXMgc2luY2UgaXQgaXMgYSBXYXJuaW5nXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgICAgIHZhciB3ID0gbmV3IEVycm9yKCdQb3NzaWJsZSBFdmVudEVtaXR0ZXIgbWVtb3J5IGxlYWsgZGV0ZWN0ZWQuICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZy5sZW5ndGggKyAnICcgKyBTdHJpbmcodHlwZSkgKyAnIGxpc3RlbmVycyAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FkZGVkLiBVc2UgZW1pdHRlci5zZXRNYXhMaXN0ZW5lcnMoKSB0byAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2luY3JlYXNlIGxpbWl0Jyk7XG4gICAgICB3Lm5hbWUgPSAnTWF4TGlzdGVuZXJzRXhjZWVkZWRXYXJuaW5nJztcbiAgICAgIHcuZW1pdHRlciA9IHRhcmdldDtcbiAgICAgIHcudHlwZSA9IHR5cGU7XG4gICAgICB3LmNvdW50ID0gZXhpc3RpbmcubGVuZ3RoO1xuICAgICAgUHJvY2Vzc0VtaXRXYXJuaW5nKHcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbiBhZGRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICByZXR1cm4gX2FkZExpc3RlbmVyKHRoaXMsIHR5cGUsIGxpc3RlbmVyLCBmYWxzZSk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5wcmVwZW5kTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHByZXBlbmRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgcmV0dXJuIF9hZGRMaXN0ZW5lcih0aGlzLCB0eXBlLCBsaXN0ZW5lciwgdHJ1ZSk7XG4gICAgfTtcblxuZnVuY3Rpb24gb25jZVdyYXBwZXIoKSB7XG4gIHZhciBhcmdzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSBhcmdzLnB1c2goYXJndW1lbnRzW2ldKTtcbiAgaWYgKCF0aGlzLmZpcmVkKSB7XG4gICAgdGhpcy50YXJnZXQucmVtb3ZlTGlzdGVuZXIodGhpcy50eXBlLCB0aGlzLndyYXBGbik7XG4gICAgdGhpcy5maXJlZCA9IHRydWU7XG4gICAgUmVmbGVjdEFwcGx5KHRoaXMubGlzdGVuZXIsIHRoaXMudGFyZ2V0LCBhcmdzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfb25jZVdyYXAodGFyZ2V0LCB0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgc3RhdGUgPSB7IGZpcmVkOiBmYWxzZSwgd3JhcEZuOiB1bmRlZmluZWQsIHRhcmdldDogdGFyZ2V0LCB0eXBlOiB0eXBlLCBsaXN0ZW5lcjogbGlzdGVuZXIgfTtcbiAgdmFyIHdyYXBwZWQgPSBvbmNlV3JhcHBlci5iaW5kKHN0YXRlKTtcbiAgd3JhcHBlZC5saXN0ZW5lciA9IGxpc3RlbmVyO1xuICBzdGF0ZS53cmFwRm4gPSB3cmFwcGVkO1xuICByZXR1cm4gd3JhcHBlZDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24gb25jZSh0eXBlLCBsaXN0ZW5lcikge1xuICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwibGlzdGVuZXJcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24uIFJlY2VpdmVkIHR5cGUgJyArIHR5cGVvZiBsaXN0ZW5lcik7XG4gIH1cbiAgdGhpcy5vbih0eXBlLCBfb25jZVdyYXAodGhpcywgdHlwZSwgbGlzdGVuZXIpKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnByZXBlbmRPbmNlTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHByZXBlbmRPbmNlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwibGlzdGVuZXJcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24uIFJlY2VpdmVkIHR5cGUgJyArIHR5cGVvZiBsaXN0ZW5lcik7XG4gICAgICB9XG4gICAgICB0aGlzLnByZXBlbmRMaXN0ZW5lcih0eXBlLCBfb25jZVdyYXAodGhpcywgdHlwZSwgbGlzdGVuZXIpKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbi8vIEVtaXRzIGEgJ3JlbW92ZUxpc3RlbmVyJyBldmVudCBpZiBhbmQgb25seSBpZiB0aGUgbGlzdGVuZXIgd2FzIHJlbW92ZWQuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID1cbiAgICBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgdmFyIGxpc3QsIGV2ZW50cywgcG9zaXRpb24sIGksIG9yaWdpbmFsTGlzdGVuZXI7XG5cbiAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwibGlzdGVuZXJcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24uIFJlY2VpdmVkIHR5cGUgJyArIHR5cGVvZiBsaXN0ZW5lcik7XG4gICAgICB9XG5cbiAgICAgIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgICAgIGlmIChldmVudHMgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgIGxpc3QgPSBldmVudHNbdHlwZV07XG4gICAgICBpZiAobGlzdCA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgaWYgKGxpc3QgPT09IGxpc3RlbmVyIHx8IGxpc3QubGlzdGVuZXIgPT09IGxpc3RlbmVyKSB7XG4gICAgICAgIGlmICgtLXRoaXMuX2V2ZW50c0NvdW50ID09PSAwKVxuICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGRlbGV0ZSBldmVudHNbdHlwZV07XG4gICAgICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lcilcbiAgICAgICAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBsaXN0Lmxpc3RlbmVyIHx8IGxpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgbGlzdCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwb3NpdGlvbiA9IC0xO1xuXG4gICAgICAgIGZvciAoaSA9IGxpc3QubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICBpZiAobGlzdFtpXSA9PT0gbGlzdGVuZXIgfHwgbGlzdFtpXS5saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgICAgIG9yaWdpbmFsTGlzdGVuZXIgPSBsaXN0W2ldLmxpc3RlbmVyO1xuICAgICAgICAgICAgcG9zaXRpb24gPSBpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBvc2l0aW9uIDwgMClcbiAgICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgICBpZiAocG9zaXRpb24gPT09IDApXG4gICAgICAgICAgbGlzdC5zaGlmdCgpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBzcGxpY2VPbmUobGlzdCwgcG9zaXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxpc3QubGVuZ3RoID09PSAxKVxuICAgICAgICAgIGV2ZW50c1t0eXBlXSA9IGxpc3RbMF07XG5cbiAgICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lciAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBvcmlnaW5hbExpc3RlbmVyIHx8IGxpc3RlbmVyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vZmYgPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9XG4gICAgZnVuY3Rpb24gcmVtb3ZlQWxsTGlzdGVuZXJzKHR5cGUpIHtcbiAgICAgIHZhciBsaXN0ZW5lcnMsIGV2ZW50cywgaTtcblxuICAgICAgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICAgICAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgLy8gbm90IGxpc3RlbmluZyBmb3IgcmVtb3ZlTGlzdGVuZXIsIG5vIG5lZWQgdG8gZW1pdFxuICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnRzW3R5cGVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAoLS10aGlzLl9ldmVudHNDb3VudCA9PT0gMClcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgZGVsZXRlIGV2ZW50c1t0eXBlXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgLy8gZW1pdCByZW1vdmVMaXN0ZW5lciBmb3IgYWxsIGxpc3RlbmVycyBvbiBhbGwgZXZlbnRzXG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGV2ZW50cyk7XG4gICAgICAgIHZhciBrZXk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgICBpZiAoa2V5ID09PSAncmVtb3ZlTGlzdGVuZXInKSBjb250aW51ZTtcbiAgICAgICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycyhrZXkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKCdyZW1vdmVMaXN0ZW5lcicpO1xuICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICBsaXN0ZW5lcnMgPSBldmVudHNbdHlwZV07XG5cbiAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXJzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzKTtcbiAgICAgIH0gZWxzZSBpZiAobGlzdGVuZXJzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gTElGTyBvcmRlclxuICAgICAgICBmb3IgKGkgPSBsaXN0ZW5lcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyc1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuZnVuY3Rpb24gX2xpc3RlbmVycyh0YXJnZXQsIHR5cGUsIHVud3JhcCkge1xuICB2YXIgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG5cbiAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBbXTtcblxuICB2YXIgZXZsaXN0ZW5lciA9IGV2ZW50c1t0eXBlXTtcbiAgaWYgKGV2bGlzdGVuZXIgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gW107XG5cbiAgaWYgKHR5cGVvZiBldmxpc3RlbmVyID09PSAnZnVuY3Rpb24nKVxuICAgIHJldHVybiB1bndyYXAgPyBbZXZsaXN0ZW5lci5saXN0ZW5lciB8fCBldmxpc3RlbmVyXSA6IFtldmxpc3RlbmVyXTtcblxuICByZXR1cm4gdW53cmFwID9cbiAgICB1bndyYXBMaXN0ZW5lcnMoZXZsaXN0ZW5lcikgOiBhcnJheUNsb25lKGV2bGlzdGVuZXIsIGV2bGlzdGVuZXIubGVuZ3RoKTtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnMgPSBmdW5jdGlvbiBsaXN0ZW5lcnModHlwZSkge1xuICByZXR1cm4gX2xpc3RlbmVycyh0aGlzLCB0eXBlLCB0cnVlKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmF3TGlzdGVuZXJzID0gZnVuY3Rpb24gcmF3TGlzdGVuZXJzKHR5cGUpIHtcbiAgcmV0dXJuIF9saXN0ZW5lcnModGhpcywgdHlwZSwgZmFsc2UpO1xufTtcblxuRXZlbnRFbWl0dGVyLmxpc3RlbmVyQ291bnQgPSBmdW5jdGlvbihlbWl0dGVyLCB0eXBlKSB7XG4gIGlmICh0eXBlb2YgZW1pdHRlci5saXN0ZW5lckNvdW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGVtaXR0ZXIubGlzdGVuZXJDb3VudCh0eXBlKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbGlzdGVuZXJDb3VudC5jYWxsKGVtaXR0ZXIsIHR5cGUpO1xuICB9XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVyQ291bnQgPSBsaXN0ZW5lckNvdW50O1xuZnVuY3Rpb24gbGlzdGVuZXJDb3VudCh0eXBlKSB7XG4gIHZhciBldmVudHMgPSB0aGlzLl9ldmVudHM7XG5cbiAgaWYgKGV2ZW50cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGV2bGlzdGVuZXIgPSBldmVudHNbdHlwZV07XG5cbiAgICBpZiAodHlwZW9mIGV2bGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH0gZWxzZSBpZiAoZXZsaXN0ZW5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZXZsaXN0ZW5lci5sZW5ndGg7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIDA7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZXZlbnROYW1lcyA9IGZ1bmN0aW9uIGV2ZW50TmFtZXMoKSB7XG4gIHJldHVybiB0aGlzLl9ldmVudHNDb3VudCA+IDAgPyBSZWZsZWN0T3duS2V5cyh0aGlzLl9ldmVudHMpIDogW107XG59O1xuXG5mdW5jdGlvbiBhcnJheUNsb25lKGFyciwgbikge1xuICB2YXIgY29weSA9IG5ldyBBcnJheShuKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyArK2kpXG4gICAgY29weVtpXSA9IGFycltpXTtcbiAgcmV0dXJuIGNvcHk7XG59XG5cbmZ1bmN0aW9uIHNwbGljZU9uZShsaXN0LCBpbmRleCkge1xuICBmb3IgKDsgaW5kZXggKyAxIDwgbGlzdC5sZW5ndGg7IGluZGV4KyspXG4gICAgbGlzdFtpbmRleF0gPSBsaXN0W2luZGV4ICsgMV07XG4gIGxpc3QucG9wKCk7XG59XG5cbmZ1bmN0aW9uIHVud3JhcExpc3RlbmVycyhhcnIpIHtcbiAgdmFyIHJldCA9IG5ldyBBcnJheShhcnIubGVuZ3RoKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXQubGVuZ3RoOyArK2kpIHtcbiAgICByZXRbaV0gPSBhcnJbaV0ubGlzdGVuZXIgfHwgYXJyW2ldO1xuICB9XG4gIHJldHVybiByZXQ7XG59XG4iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCwgcGFyZW50KSB7XG4gIGlmIChwYXJlbnQpe1xuICAgIHJldHVybiBwYXJlbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuICB9XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0LCBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCwgcGFyZW50KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUsIHRhcmdldCk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cblx0aWYob3B0aW9ucy5hdHRycy5ub25jZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIG5vbmNlID0gZ2V0Tm9uY2UoKTtcblx0XHRpZiAobm9uY2UpIHtcblx0XHRcdG9wdGlvbnMuYXR0cnMubm9uY2UgPSBub25jZTtcblx0XHR9XG5cdH1cblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBnZXROb25jZSgpIHtcblx0aWYgKHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiBfX3dlYnBhY2tfbm9uY2VfXztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSB0eXBlb2Ygb3B0aW9ucy50cmFuc2Zvcm0gPT09ICdmdW5jdGlvbidcblx0XHQgPyBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKSBcblx0XHQgOiBvcHRpb25zLnRyYW5zZm9ybS5kZWZhdWx0KG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iLCJpbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiZXZlbnRzXCI7XG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tIFwiLi9MYXlvdXRcIjtcbmltcG9ydCB7IEZhdXN0VUlSb290IH0gZnJvbSBcIi4vRmF1c3RVSVJvb3RcIjtcbmltcG9ydCBcIi4vaW5kZXguc2Nzc1wiO1xuXG50eXBlIFRPcHRpb25zID0ge1xuICAgIHJvb3Q6IEhUTUxEaXZFbGVtZW50O1xuICAgIHVpPzogVEZhdXN0VUk7XG59XG5cbmV4cG9ydCBjbGFzcyBGYXVzdFVJIGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgICBvbjxLIGV4dGVuZHMga2V5b2YgRmF1c3RVSUV2ZW50TWFwPih0eXBlOiBLLCBsaXN0ZW5lcjogKGU6IEZhdXN0VUlFdmVudE1hcFtLXSkgPT4gdm9pZCkge1xuICAgICAgICByZXR1cm4gc3VwZXIub24odHlwZSwgbGlzdGVuZXIpO1xuICAgIH1cbiAgICBvbmNlPEsgZXh0ZW5kcyBrZXlvZiBGYXVzdFVJRXZlbnRNYXA+KHR5cGU6IEssIGxpc3RlbmVyOiAoZTogRmF1c3RVSUV2ZW50TWFwW0tdKSA9PiB2b2lkKSB7XG4gICAgICAgIHJldHVybiBzdXBlci5vbmNlKHR5cGUsIGxpc3RlbmVyKTtcbiAgICB9XG4gICAgb2ZmPEsgZXh0ZW5kcyBrZXlvZiBGYXVzdFVJRXZlbnRNYXA+KHR5cGU6IEssIGxpc3RlbmVyOiAoZTogRmF1c3RVSUV2ZW50TWFwW0tdKSA9PiB2b2lkKSB7XG4gICAgICAgIHJldHVybiBzdXBlci5vZmYodHlwZSwgbGlzdGVuZXIpO1xuICAgIH1cbiAgICByZW1vdmVBbGxMaXN0ZW5lcnM8SyBleHRlbmRzIGtleW9mIEZhdXN0VUlFdmVudE1hcD4odHlwZTogSykge1xuICAgICAgICByZXR1cm4gc3VwZXIucmVtb3ZlQWxsTGlzdGVuZXJzKHR5cGUpO1xuICAgIH1cbiAgICBlbWl0PEsgZXh0ZW5kcyBrZXlvZiBGYXVzdFVJRXZlbnRNYXA+KHR5cGU6IEssIGU/OiBGYXVzdFVJRXZlbnRNYXBbS10pIHtcbiAgICAgICAgcmV0dXJuIHN1cGVyLmVtaXQodHlwZSwgZSk7XG4gICAgfVxuICAgIHJvb3Q6IEhUTUxEaXZFbGVtZW50O1xuICAgIGZhdXN0VUlSb290OiBGYXVzdFVJUm9vdDtcbiAgICBwcml2YXRlIF91aTogVEZhdXN0VUk7XG4gICAgY29uc3RydWN0b3Iob3B0aW9uczogVE9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgY29uc3QgeyByb290LCB1aTogdWlJbiB9ID0gb3B0aW9ucztcbiAgICAgICAgdGhpcy5yb290ID0gcm9vdDtcbiAgICAgICAgaWYgKHVpSW4pIHRoaXMudWkgPSB1aUluO1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmZhdXN0VUlSb290LnNldFN0YXRlKHRoaXMuY2FsYygpKTtcbiAgICAgICAgICAgIHRoaXMuZW1pdChcImxheW91dENoYW5nZVwiKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNhbGMoKSB7XG4gICAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gdGhpcy5yb290LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBjb25zdCB7IGxheW91dCB9ID0gTGF5b3V0LmNhbGNMYXlvdXQodGhpcy51aSk7XG4gICAgICAgIHJldHVybiB7IHdpZHRoLCBoZWlnaHQsIGxheW91dCB9O1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCwgbGF5b3V0IH0gPSB0aGlzLmNhbGMoKTtcbiAgICAgICAgdGhpcy5mYXVzdFVJUm9vdCA9IG5ldyBGYXVzdFVJUm9vdCh7IHdpZHRoLCBoZWlnaHQsIGxheW91dCwgdWk6IHRoaXMudWksIGVtaXR0ZXI6IHRoaXMgfSk7XG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5mYXVzdFVJUm9vdC5yZW5kZXIoKTtcbiAgICAgICAgY2hpbGRyZW4uZm9yRWFjaChlID0+IHRoaXMucm9vdC5hcHBlbmRDaGlsZChlKSk7XG4gICAgfVxuICAgIGdldCB1aSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VpO1xuICAgIH1cbiAgICBzZXQgdWkodWlJbikge1xuICAgICAgICB0aGlzLl91aSA9IHVpSW47XG4gICAgICAgIGNvbnN0IHN0YXRlID0gdGhpcy5jYWxjKCk7XG4gICAgICAgIGlmICh0aGlzLmZhdXN0VUlSb290KSB0aGlzLmZhdXN0VUlSb290LnNldFN0YXRlKHsgLi4uc3RhdGUsIHVpOiB0aGlzLnVpIH0pO1xuICAgICAgICB0aGlzLmVtaXQoXCJ1aUNoYW5nZVwiLCB0aGlzLl91aSk7XG4gICAgfVxuICAgIGNoYW5nZVBhcmFtQnlVSShwYXRoOiBzdHJpbmcsIHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5lbWl0KFwicGFyYW1DaGFuZ2VCeVVJXCIsIHsgcGF0aCwgdmFsdWUgfSk7XG4gICAgfVxuICAgIGNoYW5nZVBhcmFtQnlEU1AocGF0aDogc3RyaW5nLCB2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuZW1pdChcInBhcmFtQ2hhbmdlQnlEU1BcIiwgeyBwYXRoLCB2YWx1ZSB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBMaXZlRGlhbCwgTGl2ZVRhYiwgTGl2ZU1ldGVyLCBMaXZlU2xpZGVyIH0gZnJvbSBcImxpdmUtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgRmF1c3RVSSB9IGZyb20gXCIuL0ZhdXN0VUlcIjtcbmltcG9ydCB7IExheW91dCB9IGZyb20gXCIuL0xheW91dFwiO1xuaW1wb3J0IHsgRmF1c3RVSUJ1dHRvbiB9IGZyb20gXCIuL2NvbXBvbmVudHMvQnV0dG9uXCI7XG5pbXBvcnQgeyBGYXVzdFVJQ2hlY2tib3ggfSBmcm9tIFwiLi9jb21wb25lbnRzL0NoZWNrYm94XCI7XG5pbXBvcnQgeyBGYXVzdFVJSXRlbVByb3BzLCBGYXVzdFVJSXRlbVN0eWxlIH0gZnJvbSBcIi4vY29tcG9uZW50cy90eXBlc1wiO1xuaW1wb3J0IHsgRmF1c3RVSU5lbnRyeSB9IGZyb20gXCIuL2NvbXBvbmVudHMvTmVudHJ5XCI7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL0NvbXBvbmVudFwiO1xuXG5leHBvcnQgY2xhc3MgRmF1c3RVSUdyb3VwIGV4dGVuZHMgQ29tcG9uZW50PHsgZW1pdHRlcjogRmF1c3RVSTsgdWk6IFRGYXVzdFVJR3JvdXA7IGdyaWQ6IG51bWJlcjsgb3V0ZXJMZWZ0OiBudW1iZXI7IG91dGVyVG9wOiBudW1iZXIgfT4ge1xuICAgIHN0YXRpYyBnZXRDb21wb25lbnQoaXRlbTogVEZhdXN0VUlJbnB1dEl0ZW0gfCBURmF1c3RVSU91dHB1dEl0ZW0sIGVtaXR0ZXI6IEZhdXN0VUksIGdyaWQ6IG51bWJlciwgaXRlbUxlZnQ6IG51bWJlciwgaXRlbVRvcDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IHR5cGUgPSBMYXlvdXQucHJlZGljdFR5cGUoaXRlbSk7XG4gICAgICAgIGNvbnN0IHRvb2x0aXBNZXRhID0gaXRlbS5tZXRhID8gaXRlbS5tZXRhLmZpbmQobWV0YSA9PiBtZXRhLnRvb2x0aXApIDogdW5kZWZpbmVkO1xuICAgICAgICBjb25zdCB0b29sdGlwID0gdG9vbHRpcE1ldGEgPyB0b29sdGlwTWV0YS50b29sdGlwIDogdW5kZWZpbmVkO1xuICAgICAgICBjb25zdCB7IGxhYmVsLCBtaW4sIG1heCwgYWRkcmVzcywgbGF5b3V0IH0gPSBpdGVtO1xuICAgICAgICBjb25zdCBwcm9wczogRmF1c3RVSUl0ZW1Qcm9wczxGYXVzdFVJSXRlbVN0eWxlPiA9IHtcbiAgICAgICAgICAgIGxhYmVsLFxuICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgIHRvb2x0aXAsXG4gICAgICAgICAgICBlbWl0dGVyLFxuICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogbGF5b3V0LndpZHRoICogZ3JpZCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGxheW91dC5oZWlnaHQgKiBncmlkLFxuICAgICAgICAgICAgICAgIGxlZnQ6IGl0ZW1MZWZ0LFxuICAgICAgICAgICAgICAgIHRvcDogaXRlbVRvcFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHR5cGU6IFwiZmxvYXRcIixcbiAgICAgICAgICAgIG1pbjogaXNGaW5pdGUoK21pbikgPyArbWluIDogTnVtYmVyLk1JTl9WQUxVRSxcbiAgICAgICAgICAgIG1heDogaXNGaW5pdGUoK21heCkgPyArbWF4IDogTnVtYmVyLk1BWF9WQUxVRSxcbiAgICAgICAgICAgIHN0ZXA6IFwic3RlcFwiIGluIGl0ZW0gPyAraXRlbS5zdGVwIDogMSxcbiAgICAgICAgICAgIHZhbHVlOiBcImluaXRcIiBpbiBpdGVtID8gK2l0ZW0uaW5pdCB8fCAwIDogMFxuICAgICAgICB9O1xuICAgICAgICBpZiAodHlwZSA9PT0gXCJidXR0b25cIikgcmV0dXJuIG5ldyBGYXVzdFVJQnV0dG9uKHsgLi4ucHJvcHMgfSk7XG4gICAgICAgIGlmICh0eXBlID09PSBcImNoZWNrYm94XCIpIHJldHVybiBuZXcgRmF1c3RVSUNoZWNrYm94KHsgLi4ucHJvcHMgfSk7XG4gICAgICAgIGlmICh0eXBlID09PSBcIm5lbnRyeVwiKSByZXR1cm4gbmV3IEZhdXN0VUlOZW50cnkoeyAuLi5wcm9wcyB9KTsgLypcbiAgICAgICAgaWYgKHR5cGUgPT09IFwia25vYlwiKSByZXR1cm4gPExpdmVEaWFsIHNob3duYW1lPXtmYWxzZX0gey4uLnByb3BzfSAvPjtcbiAgICAgICAgaWYgKHR5cGUgPT09IFwibWVudVwiKSByZXR1cm4gPExpdmVUYWIgey4uLnByb3BzfSAvPjtcbiAgICAgICAgaWYgKHR5cGUgPT09IFwicmFkaW9cIikgcmV0dXJuIDxMaXZlVGFiIHsuLi5wcm9wc30gLz47XG4gICAgICAgIGlmICh0eXBlID09PSBcImhzbGlkZXJcIikgcmV0dXJuIDxMaXZlU2xpZGVyIG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHNob3duYW1lPXtmYWxzZX0gey4uLnByb3BzfSAvPjtcbiAgICAgICAgaWYgKHR5cGUgPT09IFwidnNsaWRlclwiKSByZXR1cm4gPExpdmVTbGlkZXIgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIHNob3duYW1lPXtmYWxzZX0gey4uLnByb3BzfSAvPjtcbiAgICAgICAgaWYgKHR5cGUgPT09IFwiaGJhcmdyYXBoXCIpIHJldHVybiA8TGl2ZU1ldGVyIG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiIHsuLi5wcm9wc30gLz47XG4gICAgICAgIGlmICh0eXBlID09PSBcInZiYXJncmFwaFwiKSByZXR1cm4gPExpdmVNZXRlciBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgey4uLnByb3BzfSAvPjtcbiAgICAgICAgaWYgKHR5cGUgPT09IFwibGVkXCIpIHJldHVybiA8TGl2ZU1ldGVyIG9yaWVudGF0aW9uPVwidmVydGljYWxcIiB7Li4ucHJvcHN9IC8+OyovXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGl0ZW1zOiBURmF1c3RVSUl0ZW1bXTtcbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLnVwZGF0ZVVJKCk7XG4gICAgfVxuICAgIHVwZGF0ZVVJKCkge1xuICAgICAgICB0aGlzLmNoaWxkcmVuID0gW107XG4gICAgICAgIGNvbnN0IHsgdWksIGdyaWQgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGxldCB7IG91dGVyTGVmdCwgb3V0ZXJUb3AgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGxldCB7IGxlZnQsIHRvcCwgd2lkdGgsIGhlaWdodCB9ID0gdWkubGF5b3V0O1xuICAgICAgICBsZWZ0ID0gbGVmdCAqIGdyaWQgLSBvdXRlckxlZnQ7XG4gICAgICAgIHRvcCA9IHRvcCAqIGdyaWQgLSBvdXRlclRvcDtcbiAgICAgICAgd2lkdGggKj0gZ3JpZDtcbiAgICAgICAgaGVpZ2h0ICo9IGdyaWQ7XG4gICAgICAgIG91dGVyTGVmdCArPSBsZWZ0O1xuICAgICAgICBvdXRlclRvcCArPSB0b3A7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLmxlZnQgPSBgJHtsZWZ0fXB4YDtcbiAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUudG9wID0gYCR7dG9wfXB4YDtcbiAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUud2lkdGggPSBgJHt3aWR0aH1weGA7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLmhlaWdodCA9IGAke2hlaWdodH1weGA7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTmFtZSA9IFtcImZhdXN0LXVpLWdyb3VwXCIsIFwiZmF1c3QtdWktXCIgKyB1aS50eXBlXS5qb2luKFwiIFwiKTtcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuICAgICAgICBjb25zdCB0YWJzOiBzdHJpbmdbXSA9IFtdO1xuICAgICAgICB1aS5pdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtTGVmdCA9IGl0ZW0ubGF5b3V0LmxlZnQgKiBncmlkIC0gb3V0ZXJMZWZ0O1xuICAgICAgICAgICAgY29uc3QgaXRlbVRvcCA9IGl0ZW0ubGF5b3V0LnRvcCAqIGdyaWQgLSBvdXRlclRvcDtcbiAgICAgICAgICAgIGlmIChpdGVtLnR5cGUgPT09IFwidGdyb3VwXCIpIHtcbiAgICAgICAgICAgICAgICB0YWJzLnB1c2goaXRlbS5sYWJlbCk7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gbmV3IEZhdXN0VUlHcm91cCh7IGdyaWQsIG91dGVyTGVmdCwgb3V0ZXJUb3AsIHVpOiBpdGVtLCBlbWl0dGVyOiB0aGlzLnN0YXRlLmVtaXR0ZXIgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKGNvbXBvbmVudCk7XG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtc1t0aGlzLmNoaWxkcmVuLmxlbmd0aCAtIDFdID0gaXRlbTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXRlbS50eXBlID09PSBcInZncm91cFwiIHx8IGl0ZW0udHlwZSA9PT0gXCJoZ3JvdXBcIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IG5ldyBGYXVzdFVJR3JvdXAoeyBncmlkLCBvdXRlckxlZnQsIG91dGVyVG9wLCB1aTogaXRlbSwgZW1pdHRlcjogdGhpcy5zdGF0ZS5lbWl0dGVyIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaChjb21wb25lbnQpO1xuICAgICAgICAgICAgICAgIHRoaXMuaXRlbXNbdGhpcy5jaGlsZHJlbi5sZW5ndGggLSAxXSA9IGl0ZW07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlvSXRlbSA9IGl0ZW0gYXMgVEZhdXN0VUlJbnB1dEl0ZW0gfCBURmF1c3RVSU91dHB1dEl0ZW07XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbUNvbXBvbmVudCA9IEZhdXN0VUlHcm91cC5nZXRDb21wb25lbnQoaW9JdGVtLCB0aGlzLnN0YXRlLmVtaXR0ZXIsIGdyaWQsIGl0ZW1MZWZ0LCBpdGVtVG9wKTtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbUNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoaWxkcmVuLnB1c2goaXRlbUNvbXBvbmVudCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbXNbdGhpcy5jaGlsZHJlbi5sZW5ndGggLSAxXSA9IGlvSXRlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB1cGRhdGVMYXlvdXQoKSB7XG4gICAgICAgIGNvbnN0IHsgdWksIGdyaWQgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGxldCB7IG91dGVyTGVmdCwgb3V0ZXJUb3AgfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGxldCB7IGxlZnQsIHRvcCwgd2lkdGgsIGhlaWdodCB9ID0gdWkubGF5b3V0O1xuICAgICAgICBsZWZ0ID0gbGVmdCAqIGdyaWQgLSBvdXRlckxlZnQ7XG4gICAgICAgIHRvcCA9IHRvcCAqIGdyaWQgLSBvdXRlclRvcDtcbiAgICAgICAgd2lkdGggKj0gZ3JpZDtcbiAgICAgICAgaGVpZ2h0ICo9IGdyaWQ7XG4gICAgICAgIG91dGVyTGVmdCArPSBsZWZ0O1xuICAgICAgICBvdXRlclRvcCArPSB0b3A7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLmxlZnQgPSBgJHtsZWZ0fXB4YDtcbiAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUudG9wID0gYCR7dG9wfXB4YDtcbiAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUud2lkdGggPSBgJHt3aWR0aH1weGA7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLmhlaWdodCA9IGAke2hlaWdodH1weGA7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQsIGkpID0+IHtcbiAgICAgICAgICAgIGlmIChjaGlsZCBpbnN0YW5jZW9mIEZhdXN0VUlHcm91cCkge1xuICAgICAgICAgICAgICAgIGNoaWxkLnNldFN0YXRlKHsgb3V0ZXJMZWZ0LCBvdXRlclRvcCwgZ3JpZDogdGhpcy5zdGF0ZS5ncmlkIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5pdGVtc1tpXTtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtTGVmdCA9IGl0ZW0ubGF5b3V0LmxlZnQgKiBncmlkIC0gb3V0ZXJMZWZ0O1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1Ub3AgPSBpdGVtLmxheW91dC50b3AgKiBncmlkIC0gb3V0ZXJUb3A7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBpdGVtLmxheW91dC53aWR0aCAqIGdyaWQsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogaXRlbS5sYXlvdXQuaGVpZ2h0ICogZ3JpZCxcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogaXRlbUxlZnQsXG4gICAgICAgICAgICAgICAgICAgIHRvcDogaXRlbVRvcFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgY2hpbGQuc2V0U3RhdGUoeyBzdHlsZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLm9uKFwidWlcIiwgKCkgPT4gdGhpcy51cGRhdGVVSSgpKTtcbiAgICAgICAgdGhpcy5vbihcImdyaWRcIiwgKCkgPT4gdGhpcy51cGRhdGVMYXlvdXQoKSk7XG4gICAgICAgIHRoaXMub24oXCJvdXRlckxlZnRcIiwgKCkgPT4gdGhpcy51cGRhdGVMYXlvdXQoKSk7XG4gICAgICAgIHRoaXMub24oXCJvdXRlclRvcFwiLCAoKSA9PiB0aGlzLnVwZGF0ZUxheW91dCgpKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBGYXVzdFVJR3JvdXAgfSBmcm9tIFwiLi9GYXVzdFVJR3JvdXBcIjtcbmltcG9ydCB7IEZhdXN0VUkgfSBmcm9tIFwiLi9GYXVzdFVJXCI7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL0NvbXBvbmVudFwiO1xuXG5leHBvcnQgY2xhc3MgRmF1c3RVSVJvb3QgZXh0ZW5kcyBDb21wb25lbnQ8eyBlbWl0dGVyOiBGYXVzdFVJOyB1aTogVEZhdXN0VUk7IGxheW91dDogVExheW91dFByb3A7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyIH0+IHtcbiAgICBjb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xuICAgIHhHcmlkczogbnVtYmVyO1xuICAgIHlHcmlkczogbnVtYmVyO1xuICAgIGdyaWQ6IG51bWJlcjtcbiAgICBsZWZ0OiBudW1iZXI7XG4gICAgdG9wOiBudW1iZXI7XG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTmFtZSA9IFwiZmF1c3QtdWktcm9vdFwiO1xuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5vbihcImxheW91dFwiLCAoKSA9PiB0aGlzLnVwZGF0ZUxheW91dCgpKTtcbiAgICAgICAgdGhpcy5vbihcIndpZHRoXCIsICgpID0+IHRoaXMudXBkYXRlTGF5b3V0KCkpO1xuICAgICAgICB0aGlzLm9uKFwiaGVpZ2h0XCIsICgpID0+IHRoaXMudXBkYXRlTGF5b3V0KCkpO1xuICAgICAgICB0aGlzLm9uKFwidWlcIiwgKCkgPT4gdGhpcy51cGRhdGVDaGlsZHJlbigpKTtcbiAgICB9XG4gICAgdXBkYXRlTGF5b3V0KCkge1xuICAgICAgICB0aGlzLnhHcmlkcyA9IHRoaXMuc3RhdGUubGF5b3V0LndpZHRoO1xuICAgICAgICB0aGlzLnlHcmlkcyA9IHRoaXMuc3RhdGUubGF5b3V0LmhlaWdodDtcbiAgICAgICAgdGhpcy5ncmlkID0gTWF0aC5taW4odGhpcy5zdGF0ZS53aWR0aCAvIHRoaXMueEdyaWRzLCB0aGlzLnN0YXRlLmhlaWdodCAvIHRoaXMueUdyaWRzKTtcbiAgICAgICAgdGhpcy5sZWZ0ID0gKHRoaXMuc3RhdGUud2lkdGggLSB0aGlzLnhHcmlkcyAqIHRoaXMuZ3JpZCkgLyAyO1xuICAgICAgICB0aGlzLnRvcCA9ICh0aGlzLnN0YXRlLmhlaWdodCAtIHRoaXMueUdyaWRzICogdGhpcy5ncmlkKSAvIDI7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLnRvcCA9IGAke3RoaXMudG9wfXB4YDtcbiAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUubGVmdCA9IGAke3RoaXMubGVmdH1weGA7XG4gICAgICAgIGNvbnN0IGNoaWxkcmVuU3RhdGVVcGRhdGUgPSB7IGdyaWQ6IHRoaXMuZ3JpZCB9O1xuICAgICAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goZSA9PiBlLnNldFN0YXRlKGNoaWxkcmVuU3RhdGVVcGRhdGUpKTtcbiAgICB9XG4gICAgdXBkYXRlQ2hpbGRyZW4oKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSB0aGlzLnN0YXRlLnVpLm1hcChncm91cCA9PiBuZXcgRmF1c3RVSUdyb3VwKHsgLi4udGhpcy5zdGF0ZSwgZ3JpZDogdGhpcy5ncmlkLCB1aTogZ3JvdXAsIG91dGVyTGVmdDogMCwgb3V0ZXJUb3A6IDAgfSkpO1xuICAgIH1cbiAgICBtb3VudCgpIHtcbiAgICAgICAgdGhpcy51cGRhdGVDaGlsZHJlbigpO1xuICAgICAgICB0aGlzLnVwZGF0ZUxheW91dCgpO1xuICAgICAgICByZXR1cm4gc3VwZXIubW91bnQoKTtcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgTGF5b3V0IHtcbiAgICBzdGF0aWMgcGFkZGluZyA9IDAuMjtcbiAgICBzdGF0aWMgbGFiZWxIZWlnaHQgPSAwLjU7XG4gICAgc3RhdGljIGl0ZW1MYXlvdXRNYXA6IHsgW3R5cGU6IHN0cmluZ106IFRMYXlvdXRQcm9wIH0gPSB7XG4gICAgICAgIGhzbGlkZXI6IHtcbiAgICAgICAgICAgIHdpZHRoOiA1LFxuICAgICAgICAgICAgaGVpZ2h0OiAxLFxuICAgICAgICAgICAgc2l6aW5nOiBcImhvcml6b250YWxcIlxuICAgICAgICB9LFxuICAgICAgICB2c2xpZGVyOiB7XG4gICAgICAgICAgICB3aWR0aDogMSxcbiAgICAgICAgICAgIGhlaWdodDogNSxcbiAgICAgICAgICAgIHNpemluZzogXCJ2ZXJ0aWNhbFwiXG4gICAgICAgIH0sXG4gICAgICAgIG5lbnRyeToge1xuICAgICAgICAgICAgd2lkdGg6IDMsXG4gICAgICAgICAgICBoZWlnaHQ6IDEsXG4gICAgICAgICAgICBzaXppbmc6IFwiaG9yaXpvbnRhbFwiXG4gICAgICAgIH0sXG4gICAgICAgIGJ1dHRvbjoge1xuICAgICAgICAgICAgd2lkdGg6IDIsXG4gICAgICAgICAgICBoZWlnaHQ6IDEsXG4gICAgICAgICAgICBzaXppbmc6IFwiaG9yaXpvbnRhbFwiXG4gICAgICAgIH0sXG4gICAgICAgIGNoZWNrYm94OiB7XG4gICAgICAgICAgICB3aWR0aDogMixcbiAgICAgICAgICAgIGhlaWdodDogMSxcbiAgICAgICAgICAgIHNpemluZzogXCJob3Jpem9udGFsXCJcbiAgICAgICAgfSxcbiAgICAgICAga25vYjoge1xuICAgICAgICAgICAgd2lkdGg6IDEsXG4gICAgICAgICAgICBoZWlnaHQ6IDEsXG4gICAgICAgICAgICBzaXppbmc6IFwibm9uZVwiXG4gICAgICAgIH0sXG4gICAgICAgIG1lbnU6IHtcbiAgICAgICAgICAgIHdpZHRoOiAzLFxuICAgICAgICAgICAgaGVpZ2h0OiAxLFxuICAgICAgICAgICAgc2l6aW5nOiBcImhvcml6b250YWxcIlxuICAgICAgICB9LFxuICAgICAgICByYWRpbzoge1xuICAgICAgICAgICAgd2lkdGg6IDIsXG4gICAgICAgICAgICBoZWlnaHQ6IDIsXG4gICAgICAgICAgICBzaXppbmc6IFwiYm90aFwiXG4gICAgICAgIH0sXG4gICAgICAgIGxlZDoge1xuICAgICAgICAgICAgd2lkdGg6IDEsXG4gICAgICAgICAgICBoZWlnaHQ6IDEsXG4gICAgICAgICAgICBzaXppbmc6IFwibm9uZVwiXG4gICAgICAgIH0sXG4gICAgICAgIGhiYXJncmFwaDoge1xuICAgICAgICAgICAgd2lkdGg6IDUsXG4gICAgICAgICAgICBoZWlnaHQ6IDEsXG4gICAgICAgICAgICBzaXppbmc6IFwiaG9yaXpvbnRhbFwiXG4gICAgICAgIH0sXG4gICAgICAgIHZiYXJncmFwaDoge1xuICAgICAgICAgICAgd2lkdGg6IDEsXG4gICAgICAgICAgICBoZWlnaHQ6IDUsXG4gICAgICAgICAgICBzaXppbmc6IFwidmVydGljYWxcIlxuICAgICAgICB9LFxuICAgICAgICB0YWI6IHtcbiAgICAgICAgICAgIHdpZHRoOiAxLFxuICAgICAgICAgICAgaGVpZ2h0OiAyLFxuICAgICAgICAgICAgc2l6aW5nOiBcIm5vbmVcIlxuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBwcmVkaWN0VHlwZShpdGVtOiBURmF1c3RVSUl0ZW0pOiBUTGF5b3V0VHlwZSB7XG4gICAgICAgIGlmIChpdGVtLnR5cGUgPT09IFwidmdyb3VwXCJcbiAgICAgICAgICAgICAgICB8fCBpdGVtLnR5cGUgPT09IFwiaGdyb3VwXCJcbiAgICAgICAgICAgICAgICB8fCBpdGVtLnR5cGUgPT09IFwidGdyb3VwXCJcbiAgICAgICAgICAgICAgICB8fCBpdGVtLnR5cGUgPT09IFwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICB8fCBpdGVtLnR5cGUgPT09IFwiY2hlY2tib3hcIlxuICAgICAgICApIHJldHVybiBpdGVtLnR5cGU7XG4gICAgICAgIGlmIChpdGVtLnR5cGUgPT09IFwiaGJhcmdyYXBoXCIgfHwgaXRlbS50eXBlID09PSBcInZiYXJncmFwaFwiKSB7XG4gICAgICAgICAgICBpZiAoaXRlbS5tZXRhICYmIGl0ZW0ubWV0YS5maW5kKG1ldGEgPT4gbWV0YS5zdHlsZSAmJiBtZXRhLnN0eWxlLnN0YXJ0c1dpdGgoXCJsZWRcIikpKSByZXR1cm4gXCJsZWRcIjtcbiAgICAgICAgICAgIHJldHVybiBpdGVtLnR5cGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gXCJoc2xpZGVyXCIgfHwgaXRlbS50eXBlID09PSBcIm5lbnRyeVwiIHx8IGl0ZW0udHlwZSA9PT0gXCJ2c2xpZGVyXCIpIHtcbiAgICAgICAgICAgIGlmIChpdGVtLm1ldGEgJiYgaXRlbS5tZXRhLmZpbmQobWV0YSA9PiBtZXRhLnN0eWxlICYmIG1ldGEuc3R5bGUuc3RhcnRzV2l0aChcImtub2JcIikpKSByZXR1cm4gXCJrbm9iXCI7XG4gICAgICAgICAgICBpZiAoaXRlbS5tZXRhICYmIGl0ZW0ubWV0YS5maW5kKG1ldGEgPT4gbWV0YS5zdHlsZSAmJiBtZXRhLnN0eWxlLnN0YXJ0c1dpdGgoXCJtZW51XCIpKSkgcmV0dXJuIFwibWVudVwiO1xuICAgICAgICAgICAgaWYgKGl0ZW0ubWV0YSAmJiBpdGVtLm1ldGEuZmluZChtZXRhID0+IG1ldGEuc3R5bGUgJiYgbWV0YS5zdHlsZS5zdGFydHNXaXRoKFwicmFkaW9cIikpKSByZXR1cm4gXCJyYWRpb1wiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpdGVtLnR5cGU7XG4gICAgfVxuICAgIHN0YXRpYyBpbmplY3RMYXlvdXQodWk6IFRGYXVzdFVJSXRlbVtdKSB7XG4gICAgICAgIHVpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGlmIChcIml0ZW1zXCIgaW4gaXRlbSkgdGhpcy5pbmplY3RMYXlvdXQoaXRlbS5pdGVtcyk7XG4gICAgICAgICAgICBlbHNlIGl0ZW0ubGF5b3V0ID0geyAuLi50aGlzLml0ZW1MYXlvdXRNYXBbdGhpcy5wcmVkaWN0VHlwZShpdGVtKV0gfTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB1aTtcbiAgICB9XG4gICAgc3RhdGljIGFkanVzdExheW91dCh1aUluamVjdGVkOiBURmF1c3RVSUl0ZW1bXSwgZGlyZWN0aW9uSW4/OiBcInZlcnRpY2FsXCIgfCBcImhvcml6b250YWxcIiB8IFwic3RhY2tlZFwiKSB7XG4gICAgICAgIGNvbnN0IGdyb3VwTGF5b3V0OiBUTGF5b3V0UHJvcCA9IHsgd2lkdGg6IHRoaXMucGFkZGluZyAqIDIsIGhlaWdodDogdGhpcy5wYWRkaW5nICogMiArIHRoaXMubGFiZWxIZWlnaHQsIHNpemluZzogXCJub25lXCIgfTtcbiAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gZGlyZWN0aW9uSW4gfHwgXCJ2ZXJ0aWNhbFwiO1xuICAgICAgICBsZXQgdGFicyA9IDA7XG4gICAgICAgIHVpSW5qZWN0ZWQuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gXCJoZ3JvdXBcIikgaXRlbS5sYXlvdXQgPSB0aGlzLmFkanVzdExheW91dChpdGVtLml0ZW1zLCBcImhvcml6b250YWxcIik7XG4gICAgICAgICAgICBlbHNlIGlmIChpdGVtLnR5cGUgPT09IFwidmdyb3VwXCIpIGl0ZW0ubGF5b3V0ID0gdGhpcy5hZGp1c3RMYXlvdXQoaXRlbS5pdGVtcywgXCJ2ZXJ0aWNhbFwiKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKGl0ZW0udHlwZSA9PT0gXCJ0Z3JvdXBcIikge1xuICAgICAgICAgICAgICAgIGl0ZW0ubGF5b3V0ID0gdGhpcy5hZGp1c3RMYXlvdXQoaXRlbS5pdGVtcywgXCJzdGFja2VkXCIpO1xuICAgICAgICAgICAgICAgIHRhYnMrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICAgICAgICAgICAgZ3JvdXBMYXlvdXQud2lkdGggKz0gaXRlbS5sYXlvdXQud2lkdGg7XG4gICAgICAgICAgICAgICAgZ3JvdXBMYXlvdXQuaGVpZ2h0ID0gTWF0aC5tYXgoZ3JvdXBMYXlvdXQuaGVpZ2h0LCBpdGVtLmxheW91dC5oZWlnaHQgKyAyICogdGhpcy5wYWRkaW5nICsgdGhpcy5sYWJlbEhlaWdodCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAgICAgICAgICAgZ3JvdXBMYXlvdXQud2lkdGggPSBNYXRoLm1heChncm91cExheW91dC53aWR0aCwgaXRlbS5sYXlvdXQud2lkdGggKyAyICogdGhpcy5wYWRkaW5nKTtcbiAgICAgICAgICAgICAgICBncm91cExheW91dC5oZWlnaHQgKz0gaXRlbS5sYXlvdXQuaGVpZ2h0O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBncm91cExheW91dC53aWR0aCA9IE1hdGgubWF4KGdyb3VwTGF5b3V0LndpZHRoLCBpdGVtLmxheW91dC53aWR0aCArIDIgKiB0aGlzLnBhZGRpbmcpO1xuICAgICAgICAgICAgICAgIGdyb3VwTGF5b3V0LmhlaWdodCA9IE1hdGgubWF4KGdyb3VwTGF5b3V0LmhlaWdodCwgaXRlbS5sYXlvdXQuaGVpZ2h0ICsgMiAqIHRoaXMucGFkZGluZyArIHRoaXMubGFiZWxIZWlnaHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHRhYnMpIHtcbiAgICAgICAgICAgIGdyb3VwTGF5b3V0LmhlaWdodCArPSB0aGlzLml0ZW1MYXlvdXRNYXAudGFiLmhlaWdodDtcbiAgICAgICAgICAgIGdyb3VwTGF5b3V0LndpZHRoID0gTWF0aC5tYXgoZ3JvdXBMYXlvdXQud2lkdGgsIHRhYnMgKiB0aGlzLml0ZW1MYXlvdXRNYXAudGFiLndpZHRoICsgMiAqIHRoaXMucGFkZGluZyk7XG4gICAgICAgIH1cbiAgICAgICAgdWlJbmplY3RlZC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uSW4gIT09IFwiaG9yaXpvbnRhbFwiICYmIChpdGVtLmxheW91dC5zaXppbmcgPT09IFwiYm90aFwiIHx8IGl0ZW0ubGF5b3V0LnNpemluZyA9PT0gXCJob3Jpem9udGFsXCIpKSBpdGVtLmxheW91dC53aWR0aCA9IGdyb3VwTGF5b3V0LndpZHRoIC0gMiAqIHRoaXMucGFkZGluZztcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb25JbiAhPT0gXCJ2ZXJ0aWNhbFwiICYmIChpdGVtLmxheW91dC5zaXppbmcgPT09IFwiYm90aFwiIHx8IGl0ZW0ubGF5b3V0LnNpemluZyA9PT0gXCJ2ZXJ0aWNhbFwiKSkgaXRlbS5sYXlvdXQuaGVpZ2h0ID0gZ3JvdXBMYXlvdXQuaGVpZ2h0IC0gMiAqIHRoaXMucGFkZGluZyAtIHRoaXMubGFiZWxIZWlnaHQ7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZ3JvdXBMYXlvdXQ7XG4gICAgfVxuICAgIHN0YXRpYyBvZmZzZXRMYXlvdXQodWlBZGp1c3RlZDogVEZhdXN0VUlJdGVtW10sIGRpcmVjdGlvbkluOiBcInZlcnRpY2FsXCIgfCBcImhvcml6b250YWxcIiB8IFwic3RhY2tlZFwiLCBsYXlvdXRJbjogVExheW91dFByb3ApIHtcbiAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gZGlyZWN0aW9uSW4gfHwgXCJ2ZXJ0aWNhbFwiO1xuICAgICAgICBsZXQgJGxlZnQgPSAobGF5b3V0SW4ubGVmdCB8fCAwKSArIHRoaXMucGFkZGluZztcbiAgICAgICAgbGV0ICR0b3AgPSAobGF5b3V0SW4udG9wIHx8IDApICsgdGhpcy5wYWRkaW5nICsgdGhpcy5sYWJlbEhlaWdodDtcbiAgICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBsYXlvdXRJbjtcbiAgICAgICAgdWlBZGp1c3RlZC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBpdGVtLmxheW91dC5sZWZ0ID0gJGxlZnQ7XG4gICAgICAgICAgICBpdGVtLmxheW91dC50b3AgPSAkdG9wO1xuICAgICAgICAgICAgLy8gY2VudGVyIHRoZSBpdGVtXG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09PSBcImhvcml6b250YWxcIiB8fCBkaXJlY3Rpb24gPT09IFwic3RhY2tlZFwiKSBpdGVtLmxheW91dC50b3AgKz0gKGhlaWdodCAtIHRoaXMubGFiZWxIZWlnaHQgLSBpdGVtLmxheW91dC5oZWlnaHQpIC8gMiAtIHRoaXMucGFkZGluZztcbiAgICAgICAgICAgIGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiIHx8IGRpcmVjdGlvbiA9PT0gXCJzdGFja2VkXCIpIGl0ZW0ubGF5b3V0LmxlZnQgKz0gKHdpZHRoIC0gaXRlbS5sYXlvdXQud2lkdGgpIC8gMiAtIHRoaXMucGFkZGluZztcbiAgICAgICAgICAgIGlmIChpdGVtLnR5cGUgPT09IFwiaGdyb3VwXCIpIHRoaXMub2Zmc2V0TGF5b3V0KGl0ZW0uaXRlbXMsIFwiaG9yaXpvbnRhbFwiLCBpdGVtLmxheW91dCk7XG4gICAgICAgICAgICBlbHNlIGlmIChpdGVtLnR5cGUgPT09IFwidmdyb3VwXCIpIHRoaXMub2Zmc2V0TGF5b3V0KGl0ZW0uaXRlbXMsIFwidmVydGljYWxcIiwgaXRlbS5sYXlvdXQpO1xuICAgICAgICAgICAgZWxzZSBpZiAoaXRlbS50eXBlID09PSBcInRncm91cFwiKSB0aGlzLm9mZnNldExheW91dChpdGVtLml0ZW1zLCBcInN0YWNrZWRcIiwgaXRlbS5sYXlvdXQpO1xuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpICRsZWZ0ICs9IGl0ZW0ubGF5b3V0LndpZHRoO1xuICAgICAgICAgICAgZWxzZSBpZiAoZGlyZWN0aW9uID09PSBcInZlcnRpY2FsXCIpICR0b3AgKz0gaXRlbS5sYXlvdXQuaGVpZ2h0O1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHVpQWRqdXN0ZWQ7XG4gICAgfVxuICAgIHN0YXRpYyBjYWxjTGF5b3V0KHVpOiBURmF1c3RVSSkge1xuICAgICAgICB0aGlzLmluamVjdExheW91dCh1aSk7XG4gICAgICAgIGNvbnN0IGxheW91dCA9IHRoaXMuYWRqdXN0TGF5b3V0KHVpKTtcbiAgICAgICAgdGhpcy5vZmZzZXRMYXlvdXQodWksIFwidmVydGljYWxcIiwgbGF5b3V0KTtcbiAgICAgICAgbGF5b3V0LmxlZnQgPSAwO1xuICAgICAgICBsYXlvdXQudG9wID0gMDtcbiAgICAgICAgcmV0dXJuIHsgdWksIGxheW91dCB9O1xuICAgIH1cbn1cbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL0Jhc2Uuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9CYXNlLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL0Jhc2Uuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFycyAqL1xuaW1wb3J0IHsgdG9NSURJIH0gZnJvbSBcIi4vdXRpbHNcIjtcbmltcG9ydCB7IEZhdXN0VUlJdGVtU3R5bGUsIEZhdXN0VUlJdGVtUHJvcHMgfSBmcm9tIFwiLi90eXBlc1wiO1xuaW1wb3J0IFwiLi9CYXNlLnNjc3NcIjtcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCIuL0NvbXBvbmVudFwiO1xuXG5leHBvcnQgY2xhc3MgRmF1c3RVSUl0ZW08VCBleHRlbmRzIEZhdXN0VUlJdGVtU3R5bGU+IGV4dGVuZHMgQ29tcG9uZW50PEZhdXN0VUlJdGVtUHJvcHM8VD4+IHtcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzOiBGYXVzdFVJSXRlbVByb3BzPEZhdXN0VUlJdGVtU3R5bGU+ID0ge1xuICAgICAgICB2YWx1ZTogMCxcbiAgICAgICAgYWN0aXZlOiB0cnVlLFxuICAgICAgICBmb2N1czogZmFsc2UsXG4gICAgICAgIGxhYmVsOiBcIlwiLFxuICAgICAgICBhZGRyZXNzOiBcIlwiLFxuICAgICAgICBtaW46IDAsXG4gICAgICAgIG1heDogMSxcbiAgICAgICAgZW51bXM6IHt9LFxuICAgICAgICB0eXBlOiBcImZsb2F0XCIsXG4gICAgICAgIHVuaXRzdHlsZTogXCJuYXRpdmVcIixcbiAgICAgICAgdW5pdHM6IFwiXCIsXG4gICAgICAgIGV4cG9uZW50OiAxLFxuICAgICAgICBzdGVwOiAwLjAxLFxuICAgICAgICBzdHlsZTogeyB3aWR0aDogNDUsIGhlaWdodDogMTUsIGxlZnQ6IDAsIHRvcDogMCB9XG4gICAgfVxuICAgIGNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XG4gICAgY2xhc3NOYW1lOiBzdHJpbmc7XG4gICAgaGFuZGxlS2V5RG93biA9IChlOiBLZXlib2FyZEV2ZW50KSA9PiB7fTtcbiAgICBoYW5kbGVLZXlVcCA9IChlOiBLZXlib2FyZEV2ZW50KSA9PiB7fTtcbiAgICBoYW5kbGVUb3VjaFN0YXJ0ID0gKGU6IFRvdWNoRXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgcmVjdCA9IChlLmN1cnJlbnRUYXJnZXQgYXMgSFRNTEVsZW1lbnQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBsZXQgcHJldlggPSBlLnRvdWNoZXNbMF0ucGFnZVg7XG4gICAgICAgIGxldCBwcmV2WSA9IGUudG91Y2hlc1swXS5wYWdlWTtcbiAgICAgICAgY29uc3QgZnJvbVggPSBwcmV2WCAtIHJlY3QubGVmdDtcbiAgICAgICAgY29uc3QgZnJvbVkgPSBwcmV2WSAtIHJlY3QudG9wO1xuICAgICAgICBjb25zdCBwcmV2VmFsdWUgPSB0aGlzLnN0YXRlLnZhbHVlO1xuICAgICAgICB0aGlzLmhhbmRsZVBvaW50ZXJEb3duKHsgeDogZnJvbVgsIHk6IGZyb21ZLCBvcmlnaW5hbEV2ZW50OiBlIH0pO1xuICAgICAgICBjb25zdCBoYW5kbGVUb3VjaE1vdmUgPSAoZTogVG91Y2hFdmVudCkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgcGFnZVggPSBlLmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYO1xuICAgICAgICAgICAgY29uc3QgcGFnZVkgPSBlLmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZO1xuICAgICAgICAgICAgY29uc3QgbW92ZW1lbnRYID0gcGFnZVggLSBwcmV2WDtcbiAgICAgICAgICAgIGNvbnN0IG1vdmVtZW50WSA9IHBhZ2VZIC0gcHJldlk7XG4gICAgICAgICAgICBwcmV2WCA9IHBhZ2VYO1xuICAgICAgICAgICAgcHJldlkgPSBwYWdlWTtcbiAgICAgICAgICAgIGNvbnN0IHggPSBwYWdlWCAtIHJlY3QubGVmdDtcbiAgICAgICAgICAgIGNvbnN0IHkgPSBwYWdlWSAtIHJlY3QudG9wO1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVQb2ludGVyRHJhZyh7IHByZXZWYWx1ZSwgeCwgeSwgZnJvbVgsIGZyb21ZLCBtb3ZlbWVudFgsIG1vdmVtZW50WSwgb3JpZ2luYWxFdmVudDogZSB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgaGFuZGxlVG91Y2hFbmQgPSAoZTogVG91Y2hFdmVudCkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgeCA9IGUuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVggLSByZWN0LmxlZnQ7XG4gICAgICAgICAgICBjb25zdCB5ID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWSAtIHJlY3QudG9wO1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVQb2ludGVyVXAoeyB4LCB5LCBvcmlnaW5hbEV2ZW50OiBlIH0pO1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCBoYW5kbGVUb3VjaE1vdmUpO1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIGhhbmRsZVRvdWNoRW5kKTtcbiAgICAgICAgfTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCBoYW5kbGVUb3VjaE1vdmUsIHsgcGFzc2l2ZTogZmFsc2UgfSk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCBoYW5kbGVUb3VjaEVuZCwgeyBwYXNzaXZlOiBmYWxzZSB9KTtcbiAgICB9O1xuICAgIGhhbmRsZVdoZWVsID0gKGU6IFdoZWVsRXZlbnQpID0+IHt9O1xuICAgIGhhbmRsZUNsaWNrID0gKGU6IE1vdXNlRXZlbnQpID0+IHt9O1xuICAgIGhhbmRsZU1vdXNlRG93biA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgKGUuY3VycmVudFRhcmdldCBhcyBIVE1MRWxlbWVudCkuZm9jdXMoKTtcbiAgICAgICAgY29uc3QgcmVjdCA9IChlLmN1cnJlbnRUYXJnZXQgYXMgSFRNTEVsZW1lbnQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBjb25zdCBmcm9tWCA9IGUucGFnZVggLSByZWN0LmxlZnQ7XG4gICAgICAgIGNvbnN0IGZyb21ZID0gZS5wYWdlWSAtIHJlY3QudG9wO1xuICAgICAgICBjb25zdCBwcmV2VmFsdWUgPSB0aGlzLnN0YXRlLnZhbHVlO1xuICAgICAgICB0aGlzLmhhbmRsZVBvaW50ZXJEb3duKHsgeDogZnJvbVgsIHk6IGZyb21ZLCBvcmlnaW5hbEV2ZW50OiBlIH0pO1xuICAgICAgICBjb25zdCBoYW5kbGVNb3VzZU1vdmUgPSAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgeCA9IGUucGFnZVggLSByZWN0LmxlZnQ7XG4gICAgICAgICAgICBjb25zdCB5ID0gZS5wYWdlWSAtIHJlY3QudG9wO1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVQb2ludGVyRHJhZyh7IHByZXZWYWx1ZSwgeCwgeSwgZnJvbVgsIGZyb21ZLCBtb3ZlbWVudFg6IGUubW92ZW1lbnRYLCBtb3ZlbWVudFk6IGUubW92ZW1lbnRZLCBvcmlnaW5hbEV2ZW50OiBlIH0pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBoYW5kbGVNb3VzZVVwID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0IHggPSBlLnBhZ2VYIC0gcmVjdC5sZWZ0O1xuICAgICAgICAgICAgY29uc3QgeSA9IGUucGFnZVkgLSByZWN0LnRvcDtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlUG9pbnRlclVwKHsgeCwgeSwgb3JpZ2luYWxFdmVudDogZSB9KTtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgaGFuZGxlTW91c2VNb3ZlKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIGhhbmRsZU1vdXNlVXApO1xuICAgICAgICB9O1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGhhbmRsZU1vdXNlTW92ZSk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIGhhbmRsZU1vdXNlVXApO1xuICAgIH07XG4gICAgaGFuZGxlTW91c2VPdmVyID0gKGU6IE1vdXNlRXZlbnQpID0+IHt9O1xuICAgIGhhbmRsZU1vdXNlT3V0ID0gKGU6IE1vdXNlRXZlbnQpID0+IHt9O1xuICAgIGhhbmRsZUNvbnRleHRNZW51ID0gKGU6IE1vdXNlRXZlbnQpID0+IHt9O1xuICAgIGhhbmRsZVBvaW50ZXJEb3duID0gKGU6IFBvaW50ZXJEb3duRXZlbnQpID0+IHt9O1xuICAgIGhhbmRsZVBvaW50ZXJEcmFnID0gKGU6IFBvaW50ZXJEcmFnRXZlbnQpID0+IHt9O1xuICAgIGhhbmRsZVBvaW50ZXJVcCA9IChlOiBQb2ludGVyVXBFdmVudCkgPT4ge307XG4gICAgaGFuZGxlRm9jdXNJbiA9IChlOiBGb2N1c0V2ZW50KSA9PiB0aGlzLnNldFN0YXRlKHsgZm9jdXM6IHRydWUgfSk7XG4gICAgaGFuZGxlRm9jdXNPdXQgPSAoZTogRm9jdXNFdmVudCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGZvY3VzOiBmYWxzZSB9KTtcbiAgICBnZXQgZGlzcGxheVZhbHVlKCkge1xuICAgICAgICBjb25zdCB7IHZhbHVlLCB0eXBlLCB1bml0c3R5bGUsIHVuaXRzIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBpZiAodHlwZSA9PT0gXCJlbnVtXCIpIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLnN0YXRlLmVudW1zKS5maW5kKGtleSA9PiB0aGlzLnN0YXRlLmVudW1zW2tleV0gPT09IHZhbHVlKSB8fCBcIlwiO1xuICAgICAgICBpZiAodHlwZSA9PT0gXCJpbnRcIikgcmV0dXJuIHZhbHVlLnRvRml4ZWQoMCk7XG4gICAgICAgIGlmICh0eXBlID09PSBcImZsb2F0XCIpIHJldHVybiB2YWx1ZS50b0ZpeGVkKDIpO1xuICAgICAgICBpZiAodW5pdHN0eWxlID09PSBcInRpbWVcIikgcmV0dXJuIHZhbHVlLnRvRml4ZWQodHlwZSA9PT0gXCJpbnRcIiA/IDAgOiAyKSArIFwiIG1zXCI7XG4gICAgICAgIGlmICh1bml0c3R5bGUgPT09IFwiaGVydHpcIikgcmV0dXJuIHZhbHVlLnRvRml4ZWQodHlwZSA9PT0gXCJpbnRcIiA/IDAgOiAyKSArIFwiIEh6XCI7XG4gICAgICAgIGlmICh1bml0c3R5bGUgPT09IFwiZGVjaWJlbFwiKSByZXR1cm4gdmFsdWUudG9GaXhlZCh0eXBlID09PSBcImludFwiID8gMCA6IDIpICsgXCIgZEJcIjtcbiAgICAgICAgaWYgKHVuaXRzdHlsZSA9PT0gXCIlXCIpIHJldHVybiB2YWx1ZS50b0ZpeGVkKHR5cGUgPT09IFwiaW50XCIgPyAwIDogMikgKyBcIiAlXCI7XG4gICAgICAgIGlmICh1bml0c3R5bGUgPT09IFwicGFuXCIpIHJldHVybiB2YWx1ZSA9PT0gMCA/IFwiQ1wiIDogKHR5cGUgPT09IFwiaW50XCIgPyBNYXRoLmFicyh2YWx1ZSkgOiBNYXRoLmFicyh2YWx1ZSkudG9GaXhlZCgyKSkgKyAodmFsdWUgPCAwID8gXCIgTFwiIDogXCIgUlwiKTtcbiAgICAgICAgaWYgKHVuaXRzdHlsZSA9PT0gXCJzZW1pdG9uZXNcIikgcmV0dXJuIHZhbHVlLnRvRml4ZWQodHlwZSA9PT0gXCJpbnRcIiA/IDAgOiAyKSArIFwiIHN0XCI7XG4gICAgICAgIGlmICh1bml0c3R5bGUgPT09IFwibWlkaVwiKSByZXR1cm4gdG9NSURJKHZhbHVlKTtcbiAgICAgICAgaWYgKHVuaXRzdHlsZSA9PT0gXCJjdXN0b21cIikgcmV0dXJuIHZhbHVlLnRvRml4ZWQodHlwZSA9PT0gXCJpbnRcIiA/IDAgOiAyKSArIFwiIFwiICsgdW5pdHM7XG4gICAgICAgIGlmICh1bml0c3R5bGUgPT09IFwibmF0aXZlXCIpIHJldHVybiB2YWx1ZS50b0ZpeGVkKHR5cGUgPT09IFwiaW50XCIgPyAwIDogMik7XG4gICAgICAgIHJldHVybiBcIk4vQVwiO1xuICAgIH1cbiAgICBzZXRWYWx1ZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZSB9KTtcbiAgICAgICAgdGhpcy5jaGFuZ2UodmFsdWUpO1xuICAgIH1cbiAgICBjaGFuZ2UodmFsdWVJbj86IG51bWJlcikge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5lbWl0dGVyKSB0aGlzLnN0YXRlLmVtaXR0ZXIuZW1pdChcInBhcmFtQ2hhbmdlQnlVSVwiLCB7IHZhbHVlOiB0eXBlb2YgdmFsdWVJbiA9PT0gXCJudW1iZXJcIiA/IHZhbHVlSW4gOiB0aGlzLnN0YXRlLnZhbHVlLCBwYXRoOiB0aGlzLnN0YXRlLmFkZHJlc3MgfSk7XG4gICAgfVxuICAgIHNldFN0YXRlKG5ld1N0YXRlOiB7IFtrZXkgaW4ga2V5b2YgRmF1c3RVSUl0ZW1Qcm9wczxUPl0/OiBGYXVzdFVJSXRlbVByb3BzPFQ+W2tleV0gfSkge1xuICAgICAgICBsZXQgc2hvdWxkVXBkYXRlID0gZmFsc2U7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIG5ld1N0YXRlKSB7XG4gICAgICAgICAgICBjb25zdCBzdGF0ZUtleSA9IGtleSBhcyBrZXlvZiBGYXVzdFVJSXRlbVByb3BzPFQ+O1xuICAgICAgICAgICAgY29uc3Qgc3RhdGVWYWx1ZSA9IG5ld1N0YXRlW3N0YXRlS2V5XTtcbiAgICAgICAgICAgIGlmIChzdGF0ZUtleSA9PT0gXCJzdHlsZVwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuc3R5bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBzdHlsZUtleSBpbiBuZXdTdGF0ZS5zdHlsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0eWxlS2V5IGluIHRoaXMuc3RhdGUuc3R5bGUgJiYgdGhpcy5zdGF0ZS5zdHlsZVtzdHlsZUtleV0gIT09IG5ld1N0YXRlLnN0eWxlW3N0eWxlS2V5XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc3R5bGVbc3R5bGVLZXldID0gbmV3U3RhdGUuc3R5bGVbc3R5bGVLZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3VsZFVwZGF0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnN0eWxlID0gbmV3U3RhdGUuc3R5bGU7XG4gICAgICAgICAgICAgICAgICAgIHNob3VsZFVwZGF0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChzdGF0ZUtleSBpbiB0aGlzLnN0YXRlICYmIHRoaXMuc3RhdGVbc3RhdGVLZXldICE9PSBzdGF0ZVZhbHVlKSB7XG4gICAgICAgICAgICAgICAgKHRoaXMuc3RhdGUgYXMgYW55KVtzdGF0ZUtleV0gPSBzdGF0ZVZhbHVlO1xuICAgICAgICAgICAgICAgIHNob3VsZFVwZGF0ZSA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2UgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKHNob3VsZFVwZGF0ZSkgdGhpcy5lbWl0KHN0YXRlS2V5LCB0aGlzLnN0YXRlW3N0YXRlS2V5XSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTmFtZSA9IFtcImZhdXN0LXVpLWNvbXBvbmVudFwiLCBcImZhdXN0LXVpLWNvbXBvbmVudC1cIiArIHRoaXMuY2xhc3NOYW1lXS5qb2luKFwiIFwiKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIudGFiSW5kZXggPSAxO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci50aXRsZSA9IHRoaXMuc3RhdGUudG9vbHRpcDtcbiAgICB9XG4gICAgcmVzaXplKCkge1xuICAgICAgICBjb25zdCBzdHlsZSA9IHRoaXMuc3RhdGUgPyB7IC4uLnRoaXMuZGVmYXVsdFByb3BzLnN0eWxlLCAuLi50aGlzLnN0YXRlLnN0eWxlIH0gOiB0aGlzLmRlZmF1bHRQcm9wcy5zdHlsZTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUud2lkdGggPSBgJHtzdHlsZS53aWR0aH1weGA7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLmhlaWdodCA9IGAke3N0eWxlLmhlaWdodH1weGA7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLmxlZnQgPSBgJHtzdHlsZS5sZWZ0fXB4YDtcbiAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUudG9wID0gYCR7c3R5bGUudG9wfXB4YDtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMucGFpbnQoKTtcbiAgICAgICAgdGhpcy5zdGF0ZS5lbWl0dGVyLm9uKFwicGFyYW1DaGFuZ2VCeURTUFwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUucGF0aCA9PT0gdGhpcy5zdGF0ZS5hZGRyZXNzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiBlLnZhbHVlIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMucGFpbnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc3RhdGUuZW1pdHRlci5vbihcImxheW91dENoYW5nZVwiLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdHlsZSA9IHRoaXMuc3RhdGUuc3R5bGU7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc3R5bGUgfSk7XG4gICAgICAgICAgICB0aGlzLnBhaW50KCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnN0YXRlLmVtaXR0ZXIub24oXCJ1aUNoYW5nZVwiLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHRoaXMuc3RhdGUpO1xuICAgICAgICAgICAgdGhpcy5wYWludCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5vbihcInN0eWxlXCIsICgpID0+IHRoaXMucmVzaXplKCkpO1xuICAgIH1cbiAgICBwYWludCgpIHt9XG4gICAgbW91bnQoKSB7XG4gICAgICAgIHRoaXMucmVzaXplKCk7XG4gICAgICAgIHJldHVybiBzdXBlci5tb3VudCgpO1xuICAgIH1cbn1cbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL0J1dHRvbi5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL0J1dHRvbi5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9CdXR0b24uc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCB7IEZhdXN0VUlJdGVtIH0gZnJvbSBcIi4vQmFzZVwiO1xuaW1wb3J0IHsgRmF1c3RVSUl0ZW1TdHlsZSwgRmF1c3RVSUl0ZW1Qcm9wcyB9IGZyb20gXCIuL3R5cGVzXCI7XG5pbXBvcnQgXCIuL0J1dHRvbi5zY3NzXCI7XG5cbmludGVyZmFjZSBGYXVzdFVJQnV0dG9uU3R5bGUgZXh0ZW5kcyBGYXVzdFVJSXRlbVN0eWxlIHtcbiAgICBmb250bmFtZT86IHN0cmluZztcbiAgICBmb250c2l6ZT86IG51bWJlcjtcbiAgICBmb250ZmFjZT86IFwibm9ybWFsXCIgfCBcImJvbGRcIiB8IFwiaXRhbGljXCIgfCBcImJvbGQgaXRhbGljXCI7XG4gICAgYmdjb2xvcj86IHN0cmluZztcbiAgICBiZ29uY29sb3I/OiBzdHJpbmc7XG4gICAgYm9yZGVyY29sb3I/OiBzdHJpbmc7XG4gICAgYm9yZGVyb25jb2xvcj86IHN0cmluZztcbiAgICB0ZXh0Y29sb3I/OiBzdHJpbmc7XG4gICAgdGV4dG9uY29sb3I/OiBzdHJpbmc7XG59XG5leHBvcnQgY2xhc3MgRmF1c3RVSUJ1dHRvbiBleHRlbmRzIEZhdXN0VUlJdGVtPEZhdXN0VUlCdXR0b25TdHlsZT4ge1xuICAgIHN0YXRpYyBnZXQgZGVmYXVsdFByb3BzKCk6IEZhdXN0VUlJdGVtUHJvcHM8RmF1c3RVSUJ1dHRvblN0eWxlPiB7XG4gICAgICAgIGNvbnN0IGluaGVyaXRlZCA9IHN1cGVyLmRlZmF1bHRQcm9wcztcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLmluaGVyaXRlZCxcbiAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgLi4uaW5oZXJpdGVkLnN0eWxlLFxuICAgICAgICAgICAgICAgIGZvbnRuYW1lOiBcIkFyaWFsXCIsXG4gICAgICAgICAgICAgICAgZm9udHNpemU6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICBmb250ZmFjZTogXCJub3JtYWxcIixcbiAgICAgICAgICAgICAgICBiZ2NvbG9yOiBcInJnYmEoNDAsIDQwLCA0MCwgMSlcIixcbiAgICAgICAgICAgICAgICBiZ29uY29sb3I6IFwicmdiYSgxOCwgMTgsIDE4LCAxKVwiLFxuICAgICAgICAgICAgICAgIGJvcmRlcmNvbG9yOiBcInJnYmEoODAsIDgwLCA4MCwgMSlcIixcbiAgICAgICAgICAgICAgICBib3JkZXJvbmNvbG9yOiBcInJnYmEoMjU1LCAxNjUsIDAsIDEpXCIsXG4gICAgICAgICAgICAgICAgdGV4dGNvbG9yOiBcInJnYmEoMjI2LCAyMjIsIDI1NSwgMC41KVwiLFxuICAgICAgICAgICAgICAgIHRleHRvbmNvbG9yOiBcInJnYmEoMjU1LCAxNjUsIDAsIDEpXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG4gICAgY2xhc3NOYW1lID0gXCJidXR0b25cIjtcblxuICAgIGJ0bjogSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gICAgc3BhbjogSFRNTFNwYW5FbGVtZW50O1xuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgc3VwZXIuY29tcG9uZW50V2lsbE1vdW50KCk7XG4gICAgICAgIHRoaXMuYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgdGhpcy5zcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIHRoaXMuc3Bhbi5pbm5lclRleHQgPSB0aGlzLnN0YXRlLmxhYmVsO1xuICAgICAgICB0aGlzLnNldFN0eWxlKCk7XG4gICAgfVxuICAgIHNldFN0eWxlKCkge1xuICAgICAgICBjb25zdCB7IHZhbHVlIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBjb25zdCBzdHlsZSA9IHsgLi4udGhpcy5kZWZhdWx0UHJvcHMuc3R5bGUsIC4uLnRoaXMuc3RhdGUuc3R5bGUgfTtcbiAgICAgICAgdGhpcy5idG4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gdmFsdWUgPyBzdHlsZS5iZ29uY29sb3IgOiBzdHlsZS5iZ2NvbG9yO1xuICAgICAgICB0aGlzLmJ0bi5zdHlsZS5ib3JkZXJDb2xvciA9IHZhbHVlID8gc3R5bGUuYm9yZGVyb25jb2xvciA6IHN0eWxlLmJvcmRlcmNvbG9yO1xuICAgICAgICB0aGlzLmJ0bi5zdHlsZS5jb2xvciA9IHZhbHVlID8gc3R5bGUudGV4dG9uY29sb3IgOiBzdHlsZS50ZXh0Y29sb3I7XG4gICAgICAgIHRoaXMuYnRuLnN0eWxlLmZvbnRTaXplID0gYCR7c3R5bGUuZm9udHNpemUgfHwgc3R5bGUuaGVpZ2h0IC8gNH1weGA7XG4gICAgICAgIHRoaXMuYnRuLnN0eWxlLmZvbnRGYW1pbHkgPSBgJHtzdHlsZS5mb250bmFtZX0sIHNhbnMtc2VyaWZgO1xuICAgICAgICB0aGlzLmJ0bi5zdHlsZS5mb250U3R5bGUgPSBzdHlsZS5mb250ZmFjZTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHN1cGVyLmNvbXBvbmVudERpZE1vdW50KCk7XG4gICAgICAgIHRoaXMuYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgdGhpcy5oYW5kbGVQb2ludGVyRG93bik7XG4gICAgICAgIHRoaXMuYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHRoaXMuaGFuZGxlUG9pbnRlclVwKTtcbiAgICAgICAgdGhpcy5idG4uYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgdGhpcy5oYW5kbGVQb2ludGVyRG93bik7XG4gICAgICAgIHRoaXMuYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCB0aGlzLmhhbmRsZVBvaW50ZXJVcCk7XG4gICAgICAgIHRoaXMub24oXCJzdHlsZVwiLCAoKSA9PiB0aGlzLnNldFN0eWxlKCkpO1xuICAgICAgICB0aGlzLm9uKFwibGFiZWxcIiwgKCkgPT4gdGhpcy5zcGFuLmlubmVyVGV4dCA9IHRoaXMuc3RhdGUubGFiZWwpO1xuICAgIH1cbiAgICBtb3VudCgpIHtcbiAgICAgICAgdGhpcy5idG4uYXBwZW5kQ2hpbGQodGhpcy5zcGFuKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5idG4pO1xuICAgICAgICByZXR1cm4gc3VwZXIubW91bnQoKTtcbiAgICB9XG4gICAgaGFuZGxlUG9pbnRlckRvd24gPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0VmFsdWUoMSk7XG4gICAgfVxuICAgIGhhbmRsZVBvaW50ZXJVcCA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZSgwKTtcbiAgICB9XG59XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9DaGVja2JveC5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL0NoZWNrYm94LnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL0NoZWNrYm94LnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgeyBGYXVzdFVJQnV0dG9uIH0gZnJvbSBcIi4vQnV0dG9uXCI7XG5pbXBvcnQgXCIuL0NoZWNrYm94LnNjc3NcIjtcblxuZXhwb3J0IGNsYXNzIEZhdXN0VUlDaGVja2JveCBleHRlbmRzIEZhdXN0VUlCdXR0b24ge1xuICAgIGNsYXNzTmFtZSA9IFwiY2hlY2tib3hcIjtcblxuICAgIGhhbmRsZVBvaW50ZXJEb3duID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFZhbHVlKDEgLSB0aGlzLnN0YXRlLnZhbHVlKTtcbiAgICB9XG4gICAgaGFuZGxlUG9pbnRlclVwID0gKCkgPT4ge1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gXCJldmVudHNcIjtcblxuZXhwb3J0IGNsYXNzIENvbXBvbmVudDxUIGV4dGVuZHMge30+IGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgICBvbjxLIGV4dGVuZHMga2V5b2YgVD4odHlwZTogSywgbGlzdGVuZXI6IChlOiBUW0tdKSA9PiB2b2lkKSB7XG4gICAgICAgIHJldHVybiBzdXBlci5vbih0eXBlLCBsaXN0ZW5lcik7XG4gICAgfVxuICAgIG9uY2U8SyBleHRlbmRzIGtleW9mIFQ+KHR5cGU6IEssIGxpc3RlbmVyOiAoZTogVFtLXSkgPT4gdm9pZCkge1xuICAgICAgICByZXR1cm4gc3VwZXIub25jZSh0eXBlLCBsaXN0ZW5lcik7XG4gICAgfVxuICAgIG9mZjxLIGV4dGVuZHMga2V5b2YgVD4odHlwZTogSywgbGlzdGVuZXI6IChlOiBUW0tdKSA9PiB2b2lkKSB7XG4gICAgICAgIHJldHVybiBzdXBlci5vZmYodHlwZSwgbGlzdGVuZXIpO1xuICAgIH1cbiAgICByZW1vdmVBbGxMaXN0ZW5lcnM8SyBleHRlbmRzIGtleW9mIFQ+KHR5cGU6IEspIHtcbiAgICAgICAgcmV0dXJuIHN1cGVyLnJlbW92ZUFsbExpc3RlbmVycyh0eXBlKTtcbiAgICB9XG4gICAgZW1pdDxLIGV4dGVuZHMga2V5b2YgVD4odHlwZTogSywgZT86IFRbS10pIHtcbiAgICAgICAgcmV0dXJuIHN1cGVyLmVtaXQodHlwZSwgZSk7XG4gICAgfVxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7fTtcbiAgICBnZXQgZGVmYXVsdFByb3BzKCkge1xuICAgICAgICByZXR1cm4gKHRoaXMuY29uc3RydWN0b3IgYXMgdHlwZW9mIENvbXBvbmVudCkuZGVmYXVsdFByb3BzIGFzIFQ7XG4gICAgfVxuICAgIGNoaWxkcmVuOiBDb21wb25lbnQ8YW55PltdO1xuICAgIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XG4gICAgc3RhdGU6IFQ7XG4gICAgY29uc3RydWN0b3IocHJvcHM/OiBUKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIGNvbnN0IHN0YXRlID0geyAuLi50aGlzLmRlZmF1bHRQcm9wcywgLi4ucHJvcHMgfTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICB0aGlzLmNvbXBvbmVudFdpbGxNb3VudCgpO1xuICAgICAgICBjb25zdCByZW5kZXJlZCA9IHRoaXMubW91bnQoKTtcbiAgICAgICAgdGhpcy5jb21wb25lbnREaWRNb3VudCgpO1xuICAgICAgICByZXR1cm4gcmVuZGVyZWQ7XG4gICAgfVxuICAgIHNldFN0YXRlKG5ld1N0YXRlOiB7IFtrZXkgaW4ga2V5b2YgVF0/OiBUW2tleV0gfSkge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBuZXdTdGF0ZSkge1xuICAgICAgICAgICAgY29uc3Qgc3RhdGVLZXkgPSBrZXkgYXMga2V5b2YgVDtcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlVmFsdWUgPSBuZXdTdGF0ZVtzdGF0ZUtleV07XG4gICAgICAgICAgICBpZiAoc3RhdGVLZXkgaW4gdGhpcy5zdGF0ZSAmJiB0aGlzLnN0YXRlW3N0YXRlS2V5XSAhPT0gc3RhdGVWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVbc3RhdGVLZXldID0gc3RhdGVWYWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoc3RhdGVLZXksIHN0YXRlVmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHt9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7fVxuICAgIG1vdW50KCk6IEhUTUxFbGVtZW50W10ge1xuICAgICAgICBpZiAodGhpcy5jb250YWluZXIgJiYgdGhpcy5jaGlsZHJlbikgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IGNoaWxkLnJlbmRlcigpLmZvckVhY2goZSA9PiB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChlKSkpO1xuICAgICAgICByZXR1cm4gW3RoaXMuY29udGFpbmVyXTtcbiAgICB9XG59XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9OZW50cnkuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9OZW50cnkuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vTmVudHJ5LnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgeyBGYXVzdFVJSXRlbSB9IGZyb20gXCIuL0Jhc2VcIjtcbmltcG9ydCB7IEZhdXN0VUlJdGVtU3R5bGUsIEZhdXN0VUlJdGVtUHJvcHMgfSBmcm9tIFwiLi90eXBlc1wiO1xuaW1wb3J0IFwiLi9OZW50cnkuc2Nzc1wiO1xuXG5pbnRlcmZhY2UgRmF1c3RVSU5lbnRyeVN0eWxlIGV4dGVuZHMgRmF1c3RVSUl0ZW1TdHlsZSB7XG4gICAgZm9udG5hbWU/OiBzdHJpbmc7XG4gICAgZm9udHNpemU/OiBudW1iZXI7XG4gICAgZm9udGZhY2U/OiBcInJlZ3VsYXJcIiB8IFwiYm9sZFwiIHwgXCJpdGFsaWNcIiB8IFwiYm9sZCBpdGFsaWNcIjtcbiAgICBiZ2NvbG9yPzogc3RyaW5nO1xuICAgIGJvcmRlcmNvbG9yPzogc3RyaW5nO1xuICAgIGxhYmVsY29sb3I/OiBzdHJpbmc7XG4gICAgdGV4dGNvbG9yPzogc3RyaW5nO1xufVxuZXhwb3J0IGNsYXNzIEZhdXN0VUlOZW50cnkgZXh0ZW5kcyBGYXVzdFVJSXRlbTxGYXVzdFVJTmVudHJ5U3R5bGU+IHtcbiAgICBzdGF0aWMgZ2V0IGRlZmF1bHRQcm9wcygpOiBGYXVzdFVJSXRlbVByb3BzPEZhdXN0VUlOZW50cnlTdHlsZT4ge1xuICAgICAgICBjb25zdCBpbmhlcml0ZWQgPSBzdXBlci5kZWZhdWx0UHJvcHM7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5pbmhlcml0ZWQsXG4gICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgIC4uLmluaGVyaXRlZC5zdHlsZSxcbiAgICAgICAgICAgICAgICBmb250bmFtZTogXCJBcmlhbFwiLFxuICAgICAgICAgICAgICAgIGZvbnRzaXplOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgZm9udGZhY2U6IFwicmVndWxhclwiLFxuICAgICAgICAgICAgICAgIGJnY29sb3I6IFwicmdiYSgxOCwgMTgsIDE4LCAxKVwiLFxuICAgICAgICAgICAgICAgIGJvcmRlcmNvbG9yOiBcInJnYmEoODAsIDgwLCA4MCwgMSlcIixcbiAgICAgICAgICAgICAgICBsYWJlbGNvbG9yOiBcInJnYmEoMjI2LCAyMjIsIDI1NSwgMC41KVwiLFxuICAgICAgICAgICAgICAgIHRleHRjb2xvcjogXCJyZ2JhKDIyNiwgMjIyLCAyNTUsIDAuNSlcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbiAgICBjbGFzc05hbWUgPSBcIm5lbnRyeVwiO1xuXG4gICAgbGFiZWw6IEhUTUxEaXZFbGVtZW50O1xuICAgIGlucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgICAgc3VwZXIuY29tcG9uZW50V2lsbE1vdW50KCk7XG4gICAgICAgIHRoaXMubGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0aGlzLmxhYmVsLmNsYXNzTmFtZSA9IFwiZmF1c3QtdWktY29tcG9uZW50LWxhYmVsXCI7XG4gICAgICAgIHRoaXMubGFiZWwuaW5uZXJUZXh0ID0gdGhpcy5zdGF0ZS5sYWJlbDtcbiAgICAgICAgdGhpcy5pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgdGhpcy5pbnB1dC50eXBlID0gXCJudW1iZXJcIjtcbiAgICAgICAgdGhpcy5pbnB1dC52YWx1ZSA9IHRoaXMuc3RhdGUudmFsdWUudG9TdHJpbmcoKTtcbiAgICAgICAgdGhpcy5pbnB1dC5tYXggPSB0aGlzLnN0YXRlLm1heC50b1N0cmluZygpO1xuICAgICAgICB0aGlzLmlucHV0Lm1pbiA9IHRoaXMuc3RhdGUubWluLnRvU3RyaW5nKCk7XG4gICAgICAgIHRoaXMuaW5wdXQuc3RlcCA9IHRoaXMuc3RhdGUuc3RlcC50b1N0cmluZygpO1xuICAgICAgICB0aGlzLnNldFN0eWxlKCk7XG4gICAgfVxuICAgIGhhbmRsZUNoYW5nZSA9IChlOiBFdmVudCkgPT4ge1xuICAgICAgICB0aGlzLnNldFZhbHVlKCsoZS5jdXJyZW50VGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlKTtcbiAgICB9XG4gICAgc2V0U3R5bGUoKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlID0geyAuLi50aGlzLmRlZmF1bHRQcm9wcy5zdHlsZSwgLi4udGhpcy5zdGF0ZS5zdHlsZSB9O1xuICAgICAgICB0aGlzLmlucHV0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHN0eWxlLmJnY29sb3I7XG4gICAgICAgIHRoaXMuaW5wdXQuc3R5bGUuYm9yZGVyQ29sb3IgPSBzdHlsZS5ib3JkZXJjb2xvcjtcbiAgICAgICAgdGhpcy5pbnB1dC5zdHlsZS5jb2xvciA9IHN0eWxlLnRleHRjb2xvcjtcbiAgICAgICAgdGhpcy5pbnB1dC5zdHlsZS5mb250U2l6ZSA9IGAke3N0eWxlLmZvbnRzaXplIHx8IHN0eWxlLmhlaWdodCAvIDR9cHhgO1xuICAgICAgICB0aGlzLmxhYmVsLnN0eWxlLmZvbnRTaXplID0gYCR7c3R5bGUuaGVpZ2h0IC8gNH1weGA7XG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBzdXBlci5jb21wb25lbnREaWRNb3VudCgpO1xuICAgICAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgdGhpcy5oYW5kbGVDaGFuZ2UpO1xuICAgICAgICB0aGlzLm9uKFwic3R5bGVcIiwgKCkgPT4gdGhpcy5zZXRTdHlsZSgpKTtcbiAgICAgICAgdGhpcy5vbihcImxhYmVsXCIsICgpID0+IHRoaXMubGFiZWwuaW5uZXJUZXh0ID0gdGhpcy5zdGF0ZS5sYWJlbCk7XG4gICAgICAgIHRoaXMub24oXCJ2YWx1ZVwiLCAoKSA9PiB0aGlzLmlucHV0LnZhbHVlID0gdGhpcy5zdGF0ZS52YWx1ZS50b1N0cmluZygpKTtcbiAgICAgICAgdGhpcy5vbihcIm1heFwiLCAoKSA9PiB0aGlzLmlucHV0Lm1heCA9IHRoaXMuc3RhdGUubWF4LnRvU3RyaW5nKCkpO1xuICAgICAgICB0aGlzLm9uKFwibWluXCIsICgpID0+IHRoaXMuaW5wdXQubWluID0gdGhpcy5zdGF0ZS5taW4udG9TdHJpbmcoKSk7XG4gICAgICAgIHRoaXMub24oXCJzdGVwXCIsICgpID0+IHRoaXMuaW5wdXQuc3RlcCA9IHRoaXMuc3RhdGUuc3RlcC50b1N0cmluZygpKTtcbiAgICB9XG4gICAgbW91bnQoKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubGFiZWwpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KTtcbiAgICAgICAgcmV0dXJuIHN1cGVyLm1vdW50KCk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IHRvTUlESSA9IChmOiBudW1iZXIpID0+IFtcIkNcIiwgXCJDI1wiLCBcIkRcIiwgXCJEI1wiLCBcIkVcIiwgXCJGXCIsIFwiRiNcIiwgXCJHXCIsIFwiRyNcIiwgXCJBXCIsIFwiQSNcIiwgXCJCXCJdWyhmICUgMTIgKyAxMikgJSAxMl0gKyBNYXRoLnJvdW5kKGYgLyAxMiAtIDIpO1xuZXhwb3J0IGNvbnN0IHRvUmFkID0gKGRlZ3JlZXM6IG51bWJlcikgPT4gZGVncmVlcyAqIE1hdGguUEkgLyAxODA7XG5leHBvcnQgY29uc3QgYXRvZGIgPSAoYTogbnVtYmVyKSA9PiAyMCAqIE1hdGgubG9nMTAoYSk7XG5leHBvcnQgY29uc3QgZGJ0b2EgPSAoZGI6IG51bWJlcikgPT4gMTAgKiogKGRiIC8gMjApO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vaW5kZXguc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9pbmRleC5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9pbmRleC5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiZXhwb3J0IHsgRmF1c3RVSSB9IGZyb20gXCIuL0ZhdXN0VUlcIjtcbiJdLCJzb3VyY2VSb290IjoiIn0=