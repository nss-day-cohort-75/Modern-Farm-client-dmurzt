export const catalog = (HarvestedFoods) => {
    const foodList = [
        {
            type: "Asparagus",
            processed: "Pickled asparagus",
            output: 0,
            img: '🥦'

        },
        {
            type: "Corn",
            processed: "Corn meal",
            output: 0,
            img: '🌽'

        },
        {
            type: "Potato",
            processed: "Potato chips",
            output: 0,
            img: '🥔'

        },
        {
            type: "Soybean",
            processed: "Bean paste",
            output: 0,
            img: '🫘'

        },
        {
            type: "Sunflower",
            processed: "Sunflower Oil",
            output: 0,
            img: '🌻'

        },
        {
            type: "Wheat",
            processed: "Flour",
            output: 0,
            img: '🌾'

        },
    ]


    HarvestedFoods.filter(food =>{
        foodList.filter(foodCompare => {
            if (food.type === foodCompare.type) {
                foodCompare.output++ 
            }
        })
    })

    let foodHTML = ``
    foodList.map(food => {
        foodHTML += `<section class="plant">${food.processed} ${food.output}<i>${food.img}</i></section>`
    })
    return foodHTML
}