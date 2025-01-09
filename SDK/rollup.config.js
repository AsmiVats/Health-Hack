import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";

export default {
    input: "src/chatbot.js",
    output: {
        file: "dist/chatbot.min.js",
        format: "iife",
        name: "HealthcareBot",
    },
    plugins: [resolve(), commonjs(), terser()],
};
