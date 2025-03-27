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

    try {
        const res = await csrfFetch(`/api/spots/${spotId}`);

        if (res.ok) {
            const data = await res.json();
            console.log(data, "--------> HERE")
            dispatch(getASpot(data));
        }
    } catch (error) {
        console.log(error)
    }
}

//CREATE A SPOT
export const createASpotThunk = (user) => async (dispatch) => {
    const { address, city, state, country, lat, lng, name, description, price } = user;
    const response = await csrfFetch("/api/spots/", {
      method: "POST",
      body: JSON.stringify({
        address,
        city,
        state,
        country,
        lat,
        lng,
        name,
        description,
        price
      })
    });
    const data = await response.json();
    dispatch(setSpot(data.spot));
    return response;
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
            return { ...state, user: action.payload };




        default:
            return state;
    }

}

export default spotsReducer;