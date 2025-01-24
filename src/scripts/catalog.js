export const catalog = (HarvestedFoods) => {
    const foodList = [
        {
            type: "Asparagus",
            output: 0,
            img: '🥦'

        },
        {
            type: "Corn",
            output: 0,
            img: '🌽'

        },
        {
            type: "Potato",
            output: 0,
            img: '🥔'

        },
        {
            type: "Soybean",
            output: 0,
            img: '🫘'

        },
        {
            type: "Sunflower",
            output: 0,
            img: '🌻'

        },
        {
            type: "Wheat",
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
        foodHTML += `<section class="plant">${food.type} ${food.output}<i>${food.img}</i></section>`
    })
    return foodHTML
}