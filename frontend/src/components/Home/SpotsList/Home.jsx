import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getAllSpotsThunk } from "../../../store/spots";
import { csrfFetch } from "../../../store/csrf";

const SpotsList = () => {

    const [spots, setSpots] = useState([])
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const getData = async () => {
            const res = await csrfFetch('/api/spots');
            const data = await res.json();
            // console.log(data)
            setSpots(data);
            setIsLoaded(true);

        }

        if (!isLoaded) {
            getData();
        }
    }, [spots, isLoaded])

    console.log(spots, "----> Spots")



    return (

        <>
            <h1>Available Spots</h1>
            <ul className="spots-list">
                {spots.map((spot, idx) => (
                    <li key={spot.id}>{spots.spot} </li>
                ))}
            </ul>
        </>
    );
}

export default SpotsList;