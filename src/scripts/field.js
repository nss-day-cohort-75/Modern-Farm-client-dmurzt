let plantStorage = []

export const addPlant = (seeds) => {
if (Array.isArray(seeds) === true) {
    seeds.map(seed => {
        plantStorage.push(seed)
    })
} else {
    plantStorage.push(seeds)
}
return plantStorage
}

export const usePlants = (plants) => {
    let copiedPlants = plants.map((plant) => plant)
    return copiedPlants
}
