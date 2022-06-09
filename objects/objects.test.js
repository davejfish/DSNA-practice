import {
    addTwoNumbers,
    makePet,
} from './objects.js';

const test = QUnit.test;

QUnit.module('objects');

test('test works', (expect) => {
    expect.equal(addTwoNumbers(2, 2), 4);
});

test('test makePet', (expect) => {
    expect.deepEqual(makePet('doug', 'cat', 5, 'tuna', ['ball', 'feather', 'catnip']), { name: 'doug', type: 'cat', age: 5, food: 'tuna', toys: ['ball', 'feather', 'catnip'] });
});