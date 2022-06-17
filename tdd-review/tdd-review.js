export function arrLength(arr) {
    return arr.length;
}

export function thirdIndex(arr) {
    if (arr.length < 3) return 'arr less than three';
    return arr[2];

    // return (arr.length < 3) ? arr[2] || 'arr less than three'
}

export function firstKeyLastValue(object) {
    const keys = Object.keys(object);

    const firstKey = keys[0];
    
    const lastValue = object[keys[keys.length - 1]];

    return {
        firstKey,
        lastValue,
    };
}

export function inventoryChecker(object, item) {

    const itemValue = Object.values(item);
    const value = itemValue[0];

    for (let i in object) {
        if (i === value) {
            return (object[i] < 5 ? `running low on ${i}` : 'all good');
        }
    }
}