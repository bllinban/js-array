// З масива людей(people) Вам потрібно знайти людину за іменем(name)
function findByName(people, name) {
    console.log(name)
    for (let i = 0; i < people.length; i++) {
        console.log(people[i])
        if (people[i].name === name) { //=== порівняння
            return people[i]; // Повертаємо знайдену людину
        }
    }
    return undefined; // Повертаємо undefined, якщо не знайдено
}

// const people = [
//     { name: "Alice" },
//     { name: "Bob" },
//     { name: "Charlie" },
// ];
// findByName(Student, "Bob")

module.exports = findByName;