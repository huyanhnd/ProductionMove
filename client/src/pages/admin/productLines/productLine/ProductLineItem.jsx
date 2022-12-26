import { useState } from "react";
import { Link } from "react-router-dom";
import "./productLineItem.css";
import CloseIcon from '@mui/icons-material/Close';

export default function ProductLineItem({ data }) {
  const [isSeemore, setIsSeemore] = useState(false)
  const handleSeemore = (e) => {
    setIsSeemore(!isSeemore)
  }
  return (
    <div className="seriItemSection">
      {isSeemore ? <div className="detail">
        <div className="detail-content">
          <div className="table-header">
            <div className="title">Thông số kỹ thuật</div>
            <div className = "close" onClick={handleSeemore}>+</div>
          </div>
          <table id="table-data">
            <tr>
              <td>Tên sản phẩm</td>
              <td>{data.name}</td>
            </tr>
            <tr>
              <td>Kích thước màn hình</td>
              <td>{data.screenSize} inches</td>
            </tr>
            <tr>
              <td>Chipset</td>
              <td>{data.chip}</td>
            </tr>
            <tr>
              <td>Camera</td>
              <td>{data.camera}</td>
            </tr>
            <tr>
              <td>Ram</td>
              <td>{data.ram}GB</td>
            </tr>
            <tr>
              <td>Tần số quét</td>
              <td>{data.refreshRate}hz</td>
            </tr>
            <tr>
              <td>Dung lượng pin</td>
              <td>{data.battery}</td>
            </tr>
            <tr>
              <td>Trọng lượng</td>
              <td>{data.weight}</td>
            </tr>
          </table>
        </div>
      </div> : <></>}
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
      <button className="seemore-Btn" onClick={handleSeemore}>See more</button>
    </div>

  );
}
