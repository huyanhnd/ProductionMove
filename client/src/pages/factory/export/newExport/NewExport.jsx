import { useState } from "react";
import "./newExport.scss";
import { useDispatch } from "react-redux";
import AddFactoryProduct from "../../warehouse/AddFactoryProduct";

export default function NewExport() {
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Export</h1>
      <form className="addProductForm">
        <div className="productFlex">
          <div className="nameProduct">
            <span className="addTitle">New Export Request To Store</span>
            <div className="productLine-text">
              <div className="addProductItem">
                <label>Name</label>
                <input type="text" placeholder="Name ProductLine" />
              </div>
              <div className="addProductItem">
                <label>To Store</label>
                <select name="active" id="active">
                  <option value="">iP11</option>
                  <option value="">iP11PM</option>
                  <option value="">iP12</option>
                  <option value="">iP12P</option>
                  <option value="">iP12PM</option>
                  <option value="">iP13</option>
                  <option value="">iP13P</option>
                  <option value="">iP13PM</option>
                </select>
              </div>
            </div>
          </div>
          <div className="detailProduct">
            <AddFactoryProduct />
          </div>
        </div>
        <button className="addProductButton">Create</button>
      </form>
    </div>
  );
}
