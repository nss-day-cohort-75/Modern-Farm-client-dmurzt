export const createWheat = (typeId, heightId, outputId) => {
    const wheatObject = {
        type:typeId,
        height:heightId,
        output: outputId
    }
    return wheatObject
}
