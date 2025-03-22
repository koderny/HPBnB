import React from "react";
import './SpotTile.css';


const SpotTile = ({ spot }) => {
    return (
        <div className="tile-container">
            <div className='spotImage-container'>
                <img className="spotImage" src={spot.previewImage} />
            </div>

            <div className="info-container">
                <div className="top-container spot-text">
                    <span>{`${spot.city}, ${spot.state}`}</span>
                    <span>{`⭐️ ${spot.avgRating}`}</span>
                </div>

                <div className="bottom-container">
                    <span className="spot-text spot-price">{`$${spot.price}`}</span>
                    <span className="spot-text">night</span>
                </div>

            </div>
        </div>
    );
}

export default SpotTile;