const outputArray = []

export const harvestPlants = (plantArray) => {
    for (const plant of plantArray) {
        for (let i = 0; i < plant.output; i++) {
            outputArray.push(plant)
        }
    }
    return outputArray
}



