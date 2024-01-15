console.log("Hello World!")

function myFunction(value: number): number {
    return value + value
}

const otherFunction = (value: number): number => {
    return value + value
}

console.log(myFunction(5))

console.log(otherFunction(6))




let list: number[] = [1, 2, 3, 4, 5]

console.log(list)

console.log(list.length)

list.forEach((value) => {
    console.log(value)
})

const newList = list.map(value => value * 2)
    .filter(value => value > 6)

console.log(newList)

list[10] = 10

console.log(list)
