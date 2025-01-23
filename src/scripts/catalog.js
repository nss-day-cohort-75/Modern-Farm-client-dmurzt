export const catalog = (HarvestedFoods) => {
    let foodHTML = ``
    HarvestedFoods.map(food => {
        foodHTML += `<section class="plant">${food.type}</section>`
    })
    return foodHTML
}