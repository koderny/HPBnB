// Imports
import { csrfFetch } from "./csrf";



// ACTION TYPES
const GET_ALL_SPOTS = 'spots/getAllSpots';
const GET_A_SPOT = 'spots/getASpot';
const CREATE_A_SPOT = 'spots/createASpot'

// ACTION CREATIONS
const getAllSpotsAction = (data) => ({
    type: GET_ALL_SPOTS,
    payload: data
});

const getASpot = (data) => ({

    type: GET_A_SPOT,
    payload: data
});

const createASpot = (data) => ({
    type: CREATE_A_SPOT,
    payload: data
})



// THUNK

//GET ALL SPOTS
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
        console.log(error);
    }
};

//GET A SPOT
export const getASpotThunk = (spotId) => async (dispatch) => {
    console.log(spotId)
    try {
        const res = await csrfFetch(`/api/spots/${spotId}`);

        if (res.ok) {
            const data = await res.json();
            // console.log(data, "--------> HERE")
            dispatch(getASpot(data));
        }
    } catch (error) {
        console.log(error)
    }
}

//CREATE A SPOT
export const createASpotThunk = (spot) => async (dispatch) => {

    try {
        const res = await csrfFetch('/api/spots/', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(spot),
        });

        if (res.ok) {
            const data = await res.json();
            dispatch(createASpot(data));
            return data;
        }
        
        throw res;
    } catch (error) {
        return error; 
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

            newState = { ...state };
            newState.allSpots = spotsArr;

            let newByIdSpots = {};
            for (let spot of spotsArr) {
                newByIdSpots[spot.id] = spot;
            }

            newState.byId = newByIdSpots;

            return newState;



        case GET_A_SPOT:

            const singleSpot = action.payload;
            newState = { ...state };
            newState.allSpots = [...state.allSpots];

            let newByIdSingleSpot = {};
            for (let spot of [singleSpot]) {
                newByIdSingleSpot[spot.id] = spot
            }
            newState.byId = newByIdSingleSpot;
            return newState;

        case CREATE_A_SPOT:
            const newSpot = action.payload;
            newState = { ...state };
            newState.allSpots = [...state.allSpots, newSpot]
            newState.byId = { ...newState.byId, [newSpot.id]: newSpot };


        default:
            return state;
    }

}

export default spotsReducer;