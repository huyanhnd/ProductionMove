import { useState } from "react";
import "./productLineItem.css";

export default function ProductLineItem({ data }) {
  const [isSeemore, setIsSeemore] = useState(false);
  const handleSeemore = (e) => {
    setIsSeemore(!isSeemore);
  };
  return (
    <div className="seriItemSection">
      {isSeemore ? (
        <div className="detail">
          <div className="detail-content">
            <div className="table-header">
              <div className="title">Thông số kỹ thuật</div>
              <div className="close" onClick={handleSeemore}>
                +
              </div>
            </div>
            <section className="table-section">
              <div className="table-data">
                <div className="detail-data">
                  <p>Kích thước màn hình</p>
                  <div>{data.screenSize}</div>
                </div>
                <div className="detail-data">
                  <p>Chipset</p>
                  <div>{data.chip}</div>
                </div>
                <div className="detail-data">
                  <p>Camera</p>
                  <div>{data.camera}</div>
                </div>
                <div className="detail-data">
                  <p>Ram</p>
                  <div>{data.ram}</div>
                </div>
                <div className="detail-data">
                  <p>Tần số quét</p>
                  <div>{data.refreshRate}</div>
                </div>
                <div className="detail-data">
                  <p>Dung lượng pin</p>
                  <div>{data.battery}</div>
                </div>
                <div className="detail-data">
                  <p>Trọng lượng</p>
                  <div>{data.weight}</div>
                </div>
              </div>
            </section>
          </div>
        </div>
      ) : (
        <></>
      )}
      <div className="imgContainer">
        <img src={data.imageSub} alt="" className="img img-back" />
        <img src={data.image} alt="" className="img img-front" />
      </div>
      <div className="seriName">{data.name}</div>
      <div className="price">${data.listPrice}</div>
      <div className="seri-description">
        <div className="description">{data.screenSize} inch</div>
        <div className="description">{data.chip}</div>
        {/* <div className="description">{data.camera}</div> */}
        <div className="description">{data.ram}GB RAM</div>
      </div>
      <button className="seemore-Btn" onClick={handleSeemore}>
        See more
      </button>
    </div>
  );
}
