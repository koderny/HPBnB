// Imports
import { csrfFetch } from "./csrf";



// Action Types
const GET_ALL_SPOTS = 'spots/getAll';


// Action Creations
const getAllSpots = (spots) => {
    return {
        type: GET_ALL_SPOTS,
        payload: spots
    }
}

// const spotDetails = (spot) => {
//     return {
//         type: SPOT_DETAILS,
//         paylod: spot
//     }
// }


// THUNK

export const getAllSpotsThunk = () => async (dispatch) => {
    try {
        const res = await csrfFetch('api/spots');

        if (res.ok) {
            const data = await res.json();
            dispatch(getAllSpots(data))
        } else {
            throw res;
        }
    } catch (error) {
        console.log(error)
    }
};

// export const spotDetailsThunk = () => async (dispatch) => {
//     try {
//         const res = await csrfFetch('api/spots');

//         if (res.ok) {
//             const data = await res.json();
//         } else {
//             throw res;
//         }
//     } catch (error) {
//         console.log(error)
//     }
// }


// Reducers

let initialState = { 
    byId: {},
    allSpots: []
};

function spotsReducer(state = initialState, action) {
    let newState;

    switch (action.type) {
        case "GET_ALL_SPOTS":
            newState = { ...state };
            let spots = action.payload;

            newState.allSpots = spots;

            const newById = {...newState.byId}

            for (let spot of spots) {
                newById[spot.id] = spot;
            }

            newState.byId = newById;
            
            return newState;
        default:
            return state;
    }

}

export default spotsReducer;