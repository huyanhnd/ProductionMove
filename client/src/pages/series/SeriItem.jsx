import { Link } from "react-router-dom";
import "./seriItem.css"

export default function SeriItem({data}) {
    return (
        <div className="seriItemSection">
            <div className="imgContainer">
                <img src={data.imageSub} alt="" className="img img-back"/>
                <img src={data.image} alt="" className="img img-front"/>
            </div>
            <div className="seriName">{data.name}</div>
            <div className="seri-description">{data.description}</div>
            <Link to="/products" className="link">
            <button className="seemore-Btn">See more</button>

            </Link>
        </div>
    )
}