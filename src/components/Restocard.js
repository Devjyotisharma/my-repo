import { CDN_URL } from "../utils/constants";

const Restocard = (props) => {
    const { name, avgRating, sla, costForTwo,cloudinaryImageId } = props?.resList;
    return (
        <div className="res-card">
            <img className="res-logo" 
            src={CDN_URL + cloudinaryImageId}
            alt="logo" />
            <h3>{name}</h3>
            <h4>{avgRating}</h4>
            <h4>{sla.slaString}</h4>
            <h4>{costForTwo}</h4>
        </div>
    )
}

export default Restocard;