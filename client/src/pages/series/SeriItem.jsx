import { Link } from "react-router-dom";
import "./seriItem.css"

export default function SeriItem({data}) {
    return (
        <div className="seriItemSection">
            <div className="imgContainer">
                <img src={data.url} alt="" className="img img-back"/>
                <img src='https://dlcdnwebimgs.asus.com/gain/e3ff2a0d-0ed5-464a-bdac-b32f6856a173/w800' alt="" className="img img-front"/>
            </div>
            <div className="seriName">{data.name}</div>
            <Link to="/products" className="link">
            <button className="seemore-Btn">See more</button>

            </Link>
        </div>
    )
}