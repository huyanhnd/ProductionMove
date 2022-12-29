import {useState} from "react";
import "./newExport.css";
import FactoryFilter from "./NewExportFilter";
import {useDispatch} from "react-redux";
import AddFactoryProduct from "../../warehouse/AddFactoryProduct";
import ExportProduct from "./ExportProduct";

export default function NewExport() {
    return (
        <div className="factoryPage">
            <div className="header">
                <FactoryFilter />
            </div>
            <ExportProduct />
        </div>
    );
}
