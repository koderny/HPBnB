import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
import { getAllSpotsThunk } from "../../store/spots";


const Home = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    const dispatch = useDispatch();

    const spots = useSelector((state) => state.spots.allSpots);



    useEffect(() => {

        const getAllSpots = async () => {

            await dispatch(getAllSpotsThunk());
            console.log("home")
            setIsLoaded(true);
        }

        if (!isLoaded) {
            getAllSpots();
        }

    }, [ isLoaded])


    if (!isLoaded) {
        <h2>...loading</h2>
    } else {
        return (
            <div>
                {
                    spots.map((spot, idx) => (
                        <div key={`${idx}}-${spot.id}`}>
                            <h1>{spot.address}</h1>
                        </div>
                    ))
                }
           </div>
        );
    }
}

export default Home;