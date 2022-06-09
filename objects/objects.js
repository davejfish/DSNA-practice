export function addTwoNumbers(x, y) {
    return x + y;
}

export function makePet(name, type, age, food, toys) {
    let pet = {};
    pet.name = name;
    pet.type = type;
    pet.age = age;
    pet.food = food;
    pet.toys = toys;

    return pet;
}

export function formatWork(book) {
    let result = {};
    result.work = book.book.title;
    result.writer = `${book.author.first} ${book.author.last}`;
    return result;
}