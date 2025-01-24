const outputArray = []

export const harvestPlants = (plantArray) => {
    let harvestAmount = 0
    for (const plant of plantArray) {
        if (plant.type === "Corn") {
            harvestAmount += plant.output / 2
        }
    
    for (let i = 0; i < harvestAmount; i++) {
        outputArray.push(plant)
    }
    }
    return outputArray
}



