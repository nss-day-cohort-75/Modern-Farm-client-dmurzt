export const createSoybean = (typeId, heightId, outputId) => {
    const soybeanObject = {
        type:typeId,
        height:heightId,
        output: outputId
    }
    return soybeanObject
}
