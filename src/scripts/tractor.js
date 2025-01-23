import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soyBean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"

const seedsCompareList = ["Asparagus", "Corn", "Potato", "Soybean", "Sunflower", "Wheat"]
const seedsFuncList = [createAsparagus(), createCorn(), createPotato(), createSoybean(), createSunflower(), createWheat()]

const seedArray = []

export const plantSeeds = (seedsPlan) => {
    seedsPlan.filter(row => {
        row.filter(seed => {
            for (let i = 0; i < seedsCompareList.length; i++) {
                if (seed === seedsCompareList[i]) {
                    const plant = seedsFuncList[i]
                    seedArray.push(plant)
                }
            }
        })
    })
    return seedArray
}