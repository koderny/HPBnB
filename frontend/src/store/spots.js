// Imports
import { csrfFetch } from "./csrf";



// Action Types
const GET_ALL_SPOTS = 'spots/getAll';


// Action Types
const getAllSpots = (spots) => {
    return {
        type: GET_ALL_SPOTS,
        payload: spots
    }
}

const stopDetails = (spot) => {
    return {
        type: SPOT_DETAILS,
        paylod: spot
    }
}


// Thunks

export const getAllSpotsThunk = () => async (dispatch) => {
    try {
        const res = await csrfFetch('api/spots');

        if (res.ok) {
            const data = await res.json();
        } else {
            throw res;
        }
    } catch (error) {
        console.log(error)
    }
};

export const spotDetailsThunk = () => async (dispatch) => {
    try {
        const res = await csrfFetch('api/spots');

        if (res.ok) {
            const data = await res.json();
        } else {
            throw res;
        }
    } catch (error) {
        console.log(error)
    }
}

// Reducers
let initialState = { spots: [] };

function spotsReducer(state = initialState, action) {
    let newState = {};
    switch (action.type) {

        case "GET_ALL_SPOTS":
            return { ...state, user: action.payload };
        default:
            return newState;
    }

};

export default spotsReducer;