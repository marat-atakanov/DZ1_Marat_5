const initialState = {
    title: 'Submit the input to change this text',
    count: 0
}

export default function reducer(state = initialState, action) {

    if (action.type === "INPUT_SUBMIT") {
        return {
            ...state,
            title: action.payload
        }
    } else if (action.type === "INCREMENT") {
        return {
            ...state,
            count: state.count + 1
        }
    } else if (action.type === "DECREMENT") {
        return {
            ...state,
            count: state.count - 1
        }
    } else if (action.type === "RESET") {
        return {
            ...state,
            count: 0
        }
    }
    return state;
}