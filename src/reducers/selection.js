const reducer = (state = [], action) => {
    switch (action.type) {
        case 'UPDATE_SELECTION':
            return [...state, action.payload]

        default:
            return state
    }
}

export default reducer