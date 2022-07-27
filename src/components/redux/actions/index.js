export const addItem = (product) => {
    return {
        type: "ADD_ITEM",
        payload : product,
    }
}

export const delItem = (product) => {
    return {
        type: "DEL_ITEM",
        payload : product,
    }
}