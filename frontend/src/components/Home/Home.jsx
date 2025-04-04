import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllSpotsThunk } from "../../store/spots";
import SpotTile from "./SpotTile";
import './Home.css';
import { useNavigate } from 'react-router-dom'
import Navigation from '../Navigation/Navigation.jsx'
import sessionReducer, * as sessionActions from '../../store/session';


const Home = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const spots = useSelector((state) => state.spots.allSpots);
    const [isLoaded, setIsLoaded] = useState(false);

    const sessionUser = useSelector(state => state.session.user);
    // console.log(sessionUser, "we are here")


    useEffect(() => {

        const getAllSpots = async () => {

            await dispatch(getAllSpotsThunk());
            setIsLoaded(true);
        }

        if (!isLoaded) {
            getAllSpots();
        }

    }, [isLoaded])


    const goToSpotDetail = (e, spot) => {
        e.preventDefault();
        navigate(`./spots/${spot.id}`)
    }


    if (!isLoaded) {
        <h2>...loading</h2>
    }
    else if (sessionUser !== null) { //logged in
        return (
            <div>
                <h1 style={{ color: 'red' }}>Logged in</h1>

                <div className="tile-list-container">
                    {
                        spots.map((spot, idx) => (
                            <div
                                className="tile-container"
                                key={`${idx}}-${spot.id}`}
                                onClick={(e) => goToSpotDetail(e, spot)}
                            >
                                <SpotTile spot={spot} />

                            </div>

                        ))
                    }
                </div>
               
            </div>
        );
    }
    else {//not logged in
        return ( 
            <div>
                <h1 style={{ color: 'red' }}>Dont miss out, reserve now!</h1>

                <div className="tile-list-container">
                    {
                        spots.map((spot, idx) => (
                            <div
                                className="tile-container"
                                key={`${idx}}-${spot.id}`}
                                onClick={(e) => goToSpotDetail(e, spot)}
                            >
                                <SpotTile spot={spot} />

                            </div>

                        ))
                    }
                </div>
              
            </div>
        );
    }
}

export default Home;