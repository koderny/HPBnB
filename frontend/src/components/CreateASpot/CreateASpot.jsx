import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createASpotThunk } from "../../store/spots";
import { useNavigate, useParams } from "react-router-dom";

function createASpot({ spot }) {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [lat, setLat] = useState("");
    const [lng, setLng] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [previewImgUrl, setPreviewImgUrl] = useState("");
    const [url1, setUrl1] = useState("");
    const [url2, setUrl2] = useState("");
    const [url3, setUrl3] = useState("");
    const [url4, setUrl4] = useState("");
    const [errors, setErrors] = useState("");


    const [form, setForm] = useState({

        address,
        city,
        state,
        country,
        lat,
        lng,
        state,
        description,
        name,
        price,
    });




    const handleInputChange = async (e, fieldName) => {

        setForm((prev) => {
            const newForm = { ...prev };
            newForm[fieldName] = e.target.value;
            return newForm;
        })

        const res = await dispatch(createASpotThunk(spotDetails));
        navigate(`/spots/${res.id}`);

        const submitSpot = (e) => {
            e.preventDefault();
        }
    }
    return (
        <div>
            <h1>Create A New Spot</h1>
            <h2>Where's your place located?</h2>
            <h3>Guests will only get your exact address once they booked a reservation</h3>


            <form onSubmit={(e) => submitSpot(e)}>
                <div>
                    <label>Country</label>
                    <div>
                        <input
                            type="text"
                            value={form.country}
                            placeholder='Country'
                            onChange={(e) => handleInputChange(e, "country")} />
                    </div>
                </div>
                <div>
                    <label>Street Address</label>
                    <div>
                        <input
                            type="text"
                            value={form.address}
                            placeholder='Address'
                            onChange={(e) => handleInputChange(e, "address")} />
                    </div>
                </div>
                <div>
                    <label>City</label>
                    <div>
                    <input
                        type="text"
                        value={form.city}
                        placeholder='City'
                        onChange={(e) => handleInputChange(e, "city")} />
                        </div>
                </div>
                <div>
                    <label>State</label>
                    <div>
                        <input
                            type="text"
                            value={form.state}
                            placeholder='State'
                            onChange={(e) => handleInputChange(e, "state")} />
                    </div>
                </div>
                <div>
                    <label>Latitude</label>
                    <div>
                        <input
                            type="text"
                            value={form.lat}
                            placeholder='Latitude'
                            onChange={(e) => handleInputChange(e, "lat")} />
                    </div>
                </div>
                <div>
                    <label>Longitude</label>
                    <div>
                        <input
                            type="text"
                            value={form.lng}
                            placeholder='Longitude'
                            onChange={(e) => handleInputChange(e, "lng")} />
                    </div>
                </div>

                <h2>Drescribe your place to guests</h2>
                <h3>Mention the best features of your space, any special amenities like
                    fast wifi or parking, and what you love about the neigborhood.</h3>
                <div>

                    <div>
                        <input
                            type="text" style={{width:'600px', height: '100px'}}
                            value={form.description}
                            placeholder='Please write at least 30 characters'
                            onChange={(e) => handleInputChange(e, "description")} />
                    </div>
                </div>
                <div>
                    <h2>Set a base price for your spot</h2>
                    <h3>Catch guest's attention with  a spot title that hightlights
                        what makes your place special</h3>

                        <div>
                        <input
                            type="text" 
                            value={form.name}
                            placeholder='Name of your spot'
                            onChange={(e) => handleInputChange(e, "name")} />
                    </div>

                    <label>Price</label>
                    <div>
                        <input
                            type="text"
                            value={form.price}
                            placeholder='Price per night(USD)'
                            onChange={(e) => handleInputChange(e, "price")} />
                    </div>
                </div>
                <div>
                    <h2>Liven up your spot with photos</h2>
                    <h3>Submit a link to a least one photo to publish your spot</h3>

                    <label>Photos</label>
                    <div>
                        <input
                            type="text"
                            value={form.previewImgUrl}
                            placeholder='Preview Image URL'
                            onChange={(e) => handleInputChange(e, 'previewImgUrl')} />
                    </div>
                </div>
                <button>Create Spot</button>
            </form>

        </div>
    )
}

export default createASpot;