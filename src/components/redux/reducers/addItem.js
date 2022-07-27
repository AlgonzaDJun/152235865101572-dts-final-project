const addItem = []

const addItems = (state = addItem, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [...state, action.payload]
        case 'DEL_ITEM':
            return state.filter(item => item.id !== action.payload.id)
        default:
            return state
    }
}

export default addItem;