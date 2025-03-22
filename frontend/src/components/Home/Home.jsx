import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllSpotsThunk } from "../../store/spots";
import SpotTile from "./SpotTile";
import './Home.css';
import { useNavigate} from 'react-router-dom'


const Home = () => {
    
    const dispatch = useDispatch();
    
    const navigate = useNavigate();
    
    const spots = useSelector((state) => state.spots.allSpots);
    const [isLoaded, setIsLoaded] = useState(false);



    useEffect(() => {

        const getAllSpots = async () => {

            await dispatch(getAllSpotsThunk());
            console.log("home")
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

    } else {
        return (
            <div>
                <h1 style={{ color: 'red' }}>Dont miss out, reserve now!</h1>

                <div className="tile-list-container">
                    {
                        spots.map((spot, idx) => (
                            <div 
                            className="tile-container" 
                            key={`${idx}}-${spot.id}`}
                            onClick={(e)=> goToSpotDetail(e, spot)}
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