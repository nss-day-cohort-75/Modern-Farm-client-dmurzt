import { createPlan } from "./plan.js"
import { addPlant, usePlants } from "./field.js"
import { catalog } from "./catalog.js"
import { plantSeeds } from "./tractor.js"


console.log("Welcome to the main module")

const plan = createPlan()

const tractor = plantSeeds(plan)
const field = addPlant(tractor)
const useablePlants = usePlants(field)

 const placeHTML = document.querySelector(".container")
 const listHTML = catalog(useablePlants)
placeHTML.innerHTML = listHTML
