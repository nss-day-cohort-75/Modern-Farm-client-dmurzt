import { createPlan } from "./plan.js"
import { addPlant, usePlants } from "./field.js"
import { catalog } from "./catalog.js"
import { plantSeeds } from "./tractor.js"
import { harvestPlants } from "./harvester.js"
import { barn, storageBarn } from "./storageBarn.js"
import { processor, conveyorBelt } from "./processingFacility.js"


console.log("Welcome to the main module")

const plan = createPlan()

const tractor = plantSeeds(plan)
addPlant(tractor)
const useablePlants = usePlants()
const harvestedPlants = harvestPlants(useablePlants)
const barnFunction = barn()
const processorFunc = processor()
let farmStore = []
const barnLength = storageBarn.length

console.log(barnLength)

for (let i = barnLength; i > 0; i--) {
    if (storageBarn.length % 3 === 0) {
        console.log(barnFunction.peek(storageBarn[i - 1]))
    }

    processorFunc.enqueue(storageBarn[i - 1])
    barnFunction.pop()

    if (conveyorBelt.length >= 3) {
        farmStore.push(conveyorBelt[0])
        processorFunc.Dequeue()
        farmStore.push(conveyorBelt[0])
        processorFunc.Dequeue()
    }
}
farmStore.push(conveyorBelt[0])
processorFunc.Dequeue()

if (barnFunction.isEmpty()) {
    console.log("Storage Barn is ready for new crops")
}

console.log(processorFunc.isEmpty())




const placeHTML = document.querySelector(".container")
const listHTML = catalog(farmStore)
placeHTML.innerHTML = listHTML
