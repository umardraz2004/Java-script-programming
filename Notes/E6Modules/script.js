import {PI, getArea,getCircumference} from './mathUtil.js';

console.log(PI);

const Circumference = getCircumference(2);
const Area = getArea(2);
console.log(`Circumference: ${Circumference.toFixed(2)}cm and Area: ${Area.toFixed(2)}cm^2`);