export const UPDATE_SELECTION = 'UPDATE_SELECTION'

export function updateSelection(event, data) {
    return {
        type: UPDATE_SELECTION,
        payload: {
            model: data[event.target.value],
            data: event.target.value,
        },
    }
}