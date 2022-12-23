import { Link } from "react-router-dom";
import "./productLineItem.css";


export default function ProductLineItem({ data }) {
  return (
    <div className="seriItemSection">
      <div className="productline_slider">
        <div className="productline_info">
          <div className="productline_link">
            <div className="productline_img">
              {/* <img className="imgsize" src={data.img}></img> */}
              <img
                src="https://cdn2.cellphones.com.vn/358x358,webp,q100/media/catalog/product/t/_/t_m_18.png"
                width="358"
                height="358"
                // alt="iPhone 14 Pro Max 128GB | Chính hãng VN/A"
                class="product__img"
              ></img>
            </div>
            <div className="productline_item_text">
              <div className="productline_name">{data.name}</div>
              <div className="productline_badge">
                <p className="productline_more">6.7 inches</p>
                <p className="productline_more">6 GB</p>
                <p className="productline_more">{data.ram} GB</p>
              </div>
              <div className="productline_price">{data.price}</div>
            </div>
            <Link to="/products" className="link">
              <button className="seemore-Btn">See more</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
