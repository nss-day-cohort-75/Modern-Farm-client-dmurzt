export const createPotato = (typeId, heightId, outputId) => {
    const potatoObject = {
        type:typeId,
        height:heightId,
        output: outputId
    }
    return potatoObject
}
