import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createASpotThunk } from "../../store/spots";
import { useNavigate, useParams } from "react-router-dom";

function createASpot({spot}) {

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
    const [price, setPrice] = useState(0);
    const [previewImgUrl, setPreviewImgUrl]= useState("");
    const [url1, setUrl1]= useState("");
    const [url2, setUrl2]= useState("");
    const [url3, setUrl3]= useState("");
    const [url4, setUrl4]= useState("");
    const [errors, setErrors]= useState("");

    
    const [form, setForm] = useState({
        ownerId,
        address,
        city,
        state,
        country,
        lat: parseInt(lat),
        lgn: parseInt(lng),
        state,
        description,
        name,
        price,
    });
    
    const res = await dispatch(createASpotThunk(spotDetails));
    navigate(`/spots/${res.id}`);

    
    
    const handleInputChange = (e, fieldName)=>{

        setForm((prev)=>{
            const newForm = {...prev};
            newForm[fieldName] = e.target.value;
            return newForm;
    })

    const submitSpot = (e) => {
        e.preventDefault();
    }

    return (
        <>
        <h1>Create A Spot</h1>
        <h2>Where's your place located?</h2>
        <h3>Guests will only get your exact address once they booked a reservation</h3>

        
        <form onSubmit={(e)=> submitSpot(e)}>
            <div>
                <input
                type="text"
                value={form.country}
                placeholder='Country'
                onChange={(e)=> handleInputChange(e, "country")} />
            </div>
            <div>
                <input
                type="text"
                value={form.address}
                placeholder='Street Address'
                onChange={(e)=> handleInputChange(e, "address")} />
            </div>
            <div>
                <input
                type="text"
                value={form.city}
                placeholder='City'
                onChange={(e)=> handleInputChange(e, "city")} />
            </div>
            <div>
                <input
                type="text"
                value={form.state}
                placeholder='State'
                onChange={(e)=> handleInputChange(e, "state")} />
            </div>
            <div>
                <input
                type="text"
                value={form.lat}
                placeholder='Latitude'
                onChange={(e)=> handleInputChange(e, "lat")} />
            </div>
            <div>
                <input
                type="text"
                value={form.lng}
                placeholder='Longitude'
                onChange={(e)=> handleInputChange(e, "lng")} />
            </div>

            <h2>Drescribe your place to guests</h2>
            <h3>Mention the best features of your space, any special amenities like
                fast wifi or parking, and what you love about the neigborhood.</h3>
            <div>

                <input
                type="text"
                value={form.description}
                placeholder='Please write at least 30 characters'
                onChange={(e)=> handleInputChange(e, "description")} />
            </div>
            <div>
                <h2>Set a base price for your spot</h2>
                <h3>Catch guest's attention with  a spot title that hightlights
                    what makes your place special</h3>

                <input
                type="text"
                value={form.price}
                placeholder='Price per night(USD)'
                onChange={(e)=> handleInputChange(e, "price")} />
            </div>
            <div>
                <h2>Liven up your spot with photos</h2>
                <h3>Submit a link to a least one photo to publish your spot</h3>

                <input
                type="text"
                value={form.previewImgUrl}
                placeholder='Preview Image URL'
                onChange={(e)=> handleInputChange(e, 'previewImgUrl')} />
            </div>
            <button>Create Spot</button>
        </form>



        </>
    )
};
}

export default createASpot;