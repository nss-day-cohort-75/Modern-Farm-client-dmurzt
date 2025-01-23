let plantStorage = []

export const addPlant = (seeds) => {
    seeds.map(miniArr => {
        if (Array.isArray(miniArr) === true) {
            miniArr.map(seed => {
                plantStorage.push(seed)
            })
        } else {
            plantStorage.push(miniArr)
        }
    })
return plantStorage
}

export const usePlants = (plants) => {
    let copiedPlants = plants.map((plant) => plant)
    return copiedPlants
}