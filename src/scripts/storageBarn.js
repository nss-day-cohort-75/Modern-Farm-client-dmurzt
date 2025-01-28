export const storageBarn = []

export const barn = () => {
    return {
        push: (crop) => {
            storageBarn.push(crop)
        },
        pop: () => {
            storageBarn.pop()
        },
        peek: (crop) => {
            return crop.type
        },
        isEmpty: () => {
            if (storageBarn.length === 0) {
                return true
            } else {
                return false
            }
        }
    }
}




