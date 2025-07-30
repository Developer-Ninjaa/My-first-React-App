const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

const toUpperCase = str => str.toUpperCase();
const exclaim = str => `${str}!`;
const shout = compose(exclaim, toUpperCase);

shout('hello'); // "HELLO!"
