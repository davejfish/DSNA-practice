import {
    arrLength,
    firstKeyLastValue,
    inventoryChecker,
    thirdIndex,
} from './tdd-review.js';

const test = QUnit.test;

QUnit.module('tdd-review');

test('returns legnth of array', (expect) => {
    const arr = [];
    const expected = 0;

    const actual = arrLength(arr);

    expect.equal(actual, expected);
});

test('return third index of arr', (expect) => {
    const arr = [20, 30, 40, 80];
    let expected = 40;

    let actual = thirdIndex(arr);

    expect.equal(actual, expected);

    const smallArr = [1, 2];
    actual = thirdIndex(smallArr);
    expected = 'arr less than three'; 
    
    expect.equal(actual, expected);
});

test('return the first key and last value', (expect) => {
    const dog = {
        color: 'black',
        size: 'medium',
        name: 'wanchan',
    };

    const expected = {
        firstKey: 'color',
        lastValue: 'wanchan',
    };

    const actual = firstKeyLastValue(dog);

    expect.deepEqual(actual, expected);
}) ;

test('inventory checker test', (expect) => {
    const inventory = {
        eggs: 20,
        bananas: 10,
        waffles: 2.
    };

    let item = {
        itemName: 'waffles'
    };

    let actual = inventoryChecker(inventory, item);
    let expected = 'running low on waffles';

    expect.equal(actual, expected);

    item = { itemName: 'bananas' };
    actual = inventoryChecker(inventory, item);
    expected = 'all good';
    expect.equal(actual, expected);
});