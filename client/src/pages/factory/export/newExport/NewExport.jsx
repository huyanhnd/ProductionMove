import {useState} from "react";
import "./newExport.css";
import FactoryFilter from "./NewExportFilter";
import {useDispatch} from "react-redux";
import AddFactoryProduct from "../../warehouse/AddFactoryProduct";
import ExportProduct from "./ExportProduct";
import NewExportFilter from "./NewExportFilter";

export default function NewExport() {
    return (
        <div className="factoryPage">
            <div className="header">
                <NewExportFilter />
            </div>
            <ExportProduct />
        </div>
    );
}