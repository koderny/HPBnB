import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const SpotDetails = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    const allSpots = useSelector((state) => Object.vallues(state.spots.allSpots));


    return (
        <div>
        <h2>{spots.name}</h2>
        <span>{spots.spot}</span>
        <span>{`${spots.city}, ${spots.state}`}</span>
        <span>{`$ ${spots.price} night`}</span>
        </div>
    )
}



export default SpotDetails;