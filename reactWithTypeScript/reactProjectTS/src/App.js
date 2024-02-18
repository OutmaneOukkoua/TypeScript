"use strict";
import MyComponent from '../src/components/MyComponent.tsx';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_svg_1 = __importDefault(require("./assets/react.svg"));
const vite_svg_1 = __importDefault(require("/vite.svg"));
require("./App.css");
function App() {
    const [count, setCount] = (0, react_1.useState)(0);

    const [person, setPerson] = react_1.useState<{ name: string, age: number }>({});

    return (<>

        <MyComponent name='Outmane' age={25}/>

        <p>{person.name}, {person.age}</p>

    </>);
}
exports.default = App;
