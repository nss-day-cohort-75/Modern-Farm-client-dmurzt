import { createPlan } from "./plan.js"
import { addPlant, usePlants } from "./field.js"
import { catalog } from "./catalog.js"
import { plantSeeds } from "./tractor.js"
import { harvestPlants } from "./harvester.js"
import { barn, storageBarn } from "./storageBarn.js"


console.log("Welcome to the main module")

const plan = createPlan()

const tractor = plantSeeds(plan)
addPlant(tractor)
const useablePlants = usePlants()
const harvestedPlants = harvestPlants(useablePlants)
const barnFunction = barn()

const barnLength = storageBarn.length
console.log(barnLength)
for (let i = barnLength; i > 0; i--) {
    if (storageBarn.length % 3 === 0) {
        console.log(barnFunction.peek(storageBarn[i - 1]))
    }
    barnFunction.pop()
}
console.log(barnFunction.isEmpty(storageBarn))


const placeHTML = document.querySelector(".container")
const listHTML = catalog(harvestedPlants)
placeHTML.innerHTML = listHTML
