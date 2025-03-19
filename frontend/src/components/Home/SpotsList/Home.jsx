import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
import { getAllSpotsThunk } from "../../../store/spots";


const SpotsList = () => {

    const dispatch = useDispatch();
    
    const allSpots = useSelector((state) => state.spots.allSpots);
    

    const [spots, setSpots] = useState([])
    const [isLoaded, setIsLoaded] = useState(false);
    
    
    useEffect(() => {

        const getAllSpots = async () => {
            
            dispatch(getAllSpotsThunk());
            setIsLoaded(true);
        }
        
        
        if (!isLoaded) {
            getAllSpots();
        }
    }, [spots, isLoaded])
    
    console.log(spots);

    if(isLoaded) {
    return (
    
        <>
            <h1>Available Spots</h1>
            <ul className="spots-list">
                {spots.Spots.map((spot, idx) => (
                    <li key={spot.id}>{spots.spot} </li>
                ))}
            </ul>
        </>
    );
    }
}

export default SpotsList;