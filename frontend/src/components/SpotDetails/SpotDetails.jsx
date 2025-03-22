import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SpotTile from "../Home/SpotTile";

const SpotDetails = () => {

    const { id } = useParams();
    const spot = useSelector((state) => state.spotReducer.byId[id]);


    return (
        <div>
            <SpotTile spot={spot} />
        </div>
    )
}


export default SpotDetails;