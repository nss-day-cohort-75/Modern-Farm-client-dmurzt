let plantStorage = []

// export 
const addPlant = (seed) => {
if (Array.isArray(seed) === true) {
    plant.map(seed => {
        plantStorage.push(seed)
    })
} else {
    plantStorage.push(seed)
}
return plantStorage
}

let corn = ["hello", "world", "!"]
let world = [
    {
        id: "w",
        char: 7,
    },
    {
        id: 2,
        char: 4,
    },
    {
        id: 1,
        char: "d",
    }]
let being = ["hello", "world", "!"]

console.table(addPlant(corn))
console.table(addPlant(world))
console.table(addPlant(being))

console.log(Array.isArray(world))