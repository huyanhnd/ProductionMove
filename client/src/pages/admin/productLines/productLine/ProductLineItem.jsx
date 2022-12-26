import { Link } from "react-router-dom";
import "./productLineItem.css";

export default function ProductLineItem({ data }) {
  const popup = document.getElementById("popup");
  function openPopup() {
    popup.classList.add("open_popup");
  }
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
            <div className="link">
              <button className="seemore-Btn" onClick={() => openPopup()}>
                See more
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <div class="modal-background"></div>
      <div className="popup" id="popup">
        <header className="modal-card-head">
          <p className="modal-card-title is-flex">Thông số kĩ thuật</p>
        </header>
        <section className="modal-card-body">
          <div className="modal-content">
            <ul className="technical-content-modal">
              <li>
                <p className="title-1">Màn hình</p>
                <div className="modal-item-description">
                  <div className="select-1">
                    <p>Kích thước màn hình</p>
                    <div>6.7 inches</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div> */}
    </div>
  );
}
