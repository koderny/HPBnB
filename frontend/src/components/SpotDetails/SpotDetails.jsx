import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getASpotThunk } from "../../store/spots";
import { useParams } from "react-router-dom";



const SpotDetails = () => {

    const dispatch = useDispatch();
    const { id } = useParams();

    const spot = useSelector((state) => state.spots.byId[id]);
    const [isLoaded, setIsLoaded] = useState(false);


    useEffect(() => {
        
        const getASpot = async () => {

            await dispatch(getASpotThunk(id));
            setIsLoaded(true);
    }

    if (!isLoaded) {
        getASpot();
    }
}, [isLoaded])


    if(!isLoaded){
        <h2>....loading</h2>

    } else {
        return (
        <div>
            <div>
                <img className="spotImage" src={spot.SpotImages[0].url} />
            </div>
            <h1>Hosted by {`${spot.Owner.firstName} ${spot.Owner.lastName}`}</h1>
            <span>{`${spot.description}`}</span>
            <h2>⭐️ WORK IN PROGRESS</h2>
            
        </div>
    )
    }
}


export default SpotDetails;