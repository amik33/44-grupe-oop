import { Shop } from "./js/Shop.js";

console.clear();

const pupa = new Shop('Pupa', 'Eur');

console.log(pupa.intro());
// console.log(pupa.summary);

const [err0, msg0] = pupa.addProduct('kiwi', 1, 1.5, 15);
console.log(err0, msg0);
const [err1, msg1] = pupa.addProduct('Mandarinas', 2, 2.5, 10);
console.log(err1, msg1);
const [err2, msg2] = pupa.addProduct('Apelsinas', 3, 3.5, 25);
console.log(err2, msg2);

const [err3, msg3] = pupa.sellProduct(999, 5);
console.log(err3, msg3);
const [err4, msg4] = pupa.sellProduct(2, 25);
console.log(err4, msg4);
const [err5, msg5] = pupa.sellProduct(2, 0);
console.log(err5, msg5);
const [err6, msg6] = pupa.dropProduct(1);
console.log(err6, msg6);
const [err7, msg7] = pupa.fillInventor(1, 15);
console.log(err7, msg7);

console.log(pupa.inventor);
console.log(pupa.summary());




