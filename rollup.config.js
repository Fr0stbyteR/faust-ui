import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import scss from "rollup-plugin-scss";

const common = {
    input: "./src/index.ts",
    output: [
        {
            sourcemap: true,
            chunkFileNames: "[name].js",
            dir: "./dist/esm",
            format: "es"
        }
    ],

    plugins: [
        babel({
            exclude: /node_modules/,
            extensions: [".js", ".jsx", ".ts", ".tsx"],
            babelHelpers: "bundled"
        }),
        resolve({
            preferBuiltins: false,
            browser: true,
            extensions: [".js", ".jsx", ".ts", ".tsx"]
        }),
        commonjs({
            include: /node_modules/
        }),
        scss({
            output: "./dist/esm/index.css"
        })
    ]
};
export default common;
