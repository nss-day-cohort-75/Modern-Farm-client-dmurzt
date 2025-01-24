const outputArray = []

export const harvestPlants = (plantArray) => {
    let harvestAmount = 0
    let id = 1
    for (const plant of plantArray) {
        if (plant.type === "Corn") {
            harvestAmount = plant.output / 2
        }
        else {
            harvestAmount = plant.output
        }
    
    for (let i = 0; i < harvestAmount; i++) {
        outputArray.push({
            type: plant.type,
            height: plant.height,
            output: plant.output
        })
    }
    }
    for (let i = 0; i < outputArray.length; i++) {
        outputArray[i].id = id++
    }

    return outputArray.sort(function(a, b) { 
        return a.type.localeCompare(b.type)
    })
}



