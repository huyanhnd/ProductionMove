import { useState } from "react";
import "./newExport.scss";
import { useDispatch } from "react-redux";
import AddFactoryProduct from "../../warehouse/AddFactoryProduct";

export default function NewExport() {
  return (
    <div className="newExport">
      <h1 className="addExportTitle">New Export</h1>
      <form className="addExportForm">
        <div className="ExportFlex">
          <div className="nameExport">
            <span className="addTitle">New Export Request To Store</span>
            <div className="ExportLine-text">
              <div className="addExportItem">
                <label>Name</label>
                <input type="text" placeholder="Name ExportLine" />
              </div>
              <div className="addExportItem">
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
          <div className="detailExport">
            <AddFactoryProduct />
          </div>
        </div>
        <button className="addExportButton">Create</button>
      </form>
    </div>
  );
}
