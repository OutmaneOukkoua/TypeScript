"use strict";
// let age = 20;
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const userInfo = {
    emeil: 'gh',
    password: 'abcd',
    // name : 'outmane' //ERROR! because we are trying to assign value for a property that does not exist in the type
};
const userNP = {
    name: 'oumane',
    password: 'abcdef'
};
const userOp = {
    name: 'jjjjjj',
    age: 20
    // can use all property of the interface but not necessary to fill them all
};
const robotRq = {
    nameRobot: 'alexa',
    reference: "ref305547bf32" //  this field is required so we must put it in our object
};
const PC = {
    name: 'outmane oukkoua',
    age: 20,
    emeil: "azerty@gg.com",
    password: '123456',
    nameCar: 'mustang',
    color: 'red'
};
// ---------------------------- || asynchronous function || --------------------------------
const myFunction = () => __awaiter(void 0, void 0, void 0, function* () {
    return "hello world!";
});
const myFunction2 = () => {
    return new Promise((resolve, reject) => {
        resolve('hello world!');
    });
};
// const x = await myFunction();
