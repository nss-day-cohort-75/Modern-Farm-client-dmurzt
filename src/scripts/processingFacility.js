export const conveyorBelt = []

export const processor = () => {
    return {
        enqueue: (crop) => {
            conveyorBelt.push(crop)
        },
        Dequeue: () => {
            conveyorBelt.shift()
        },
        next: (crop) => {
            return crop.type
        },
        last: () => {
            return conveyorBelt.at(-1)
        },
        size: () => {
            return conveyorBelt.length
        },
        isEmpty: () => {
            if (conveyorBelt.length === 0) {
                return true
            } else {
                return false
            }
        }
    }
}


