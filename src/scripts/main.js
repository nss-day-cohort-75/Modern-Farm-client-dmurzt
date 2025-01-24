import { createPlan } from "./plan.js"
import { addPlant, usePlants } from "./field.js"
import { catalog } from "./catalog.js"
import { plantSeeds } from "./tractor.js"
import { harvestPlants } from "./harvester.js"


console.log("Welcome to the main module")

const plan = createPlan()

const tractor = plantSeeds(plan)
addPlant(tractor)
const useablePlants = usePlants()
const harvestedPlants = harvestPlants(useablePlants)

const placeHTML = document.querySelector(".container")
const listHTML = catalog(harvestedPlants)
placeHTML.innerHTML = listHTML
