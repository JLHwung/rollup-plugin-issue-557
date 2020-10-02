import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";

export default {
    input: 'index.js',
    output: {
        file: 'bundle.js',
        format: 'cjs'
    },
    plugins: [
        nodeResolve(),
        babel.default({
            babelHelpers: 'bundled'
        }),
        commonjs({
            include: [/node_modules/]
        })
    ]
}