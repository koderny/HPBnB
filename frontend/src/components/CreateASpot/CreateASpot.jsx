import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createASpotThunk } from "../../store/spots";
import { useParams } from "react-router-dom";