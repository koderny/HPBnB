// Imports
import { csrfFetch } from "./csrf";



// ACTION TYPES
const GET_ALL_SPOTS = 'spots/getAllSpots';


// ACTION CREATIONS
const getAllSpotsAction = (data) => ({
        type: GET_ALL_SPOTS,
        payload: data
})



// THUNK

export const getAllSpotsThunk = () => async (dispatch) => {
    
    try {
        const res = await csrfFetch('/api/spots/');

        if (res.ok) {
            const data = await res.json();
            dispatch(getAllSpotsAction(data))
        } else {
            throw res;
        }
    } catch (error) {
        console.log(error)
    }
};


// REDUCERS

const initialState = { 
    allSpots: [],
    byId: {}
};

function spotsReducer(state = initialState, action) {
    let newState;

    switch (action.type) {
        case GET_ALL_SPOTS:
            const spotsArr = action.payload.Spots;
    
            newState = { ...state};
            newState.allSpots = spotsArr;

            let newByIdSpots = {} ;
            for (let spot of spotsArr) {
                newByIdSpots[spot.id] = spot;
            }

            newState.byId = newByIdSpots;
            
            return newState;
        default:
            return state;
    }

}

export default spotsReducer;