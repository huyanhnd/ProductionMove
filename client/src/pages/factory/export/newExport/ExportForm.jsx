import { useState } from "react";
import "./exportForm.css"

export default function ExportForm(props) {
    const [productLineId, setProductLineId] = useState(1);

    return (
        <form
            onChange={(e) => {
                e.preventDefault();
                props.changeRequests((prevRequests) => {
                    prevRequests[props.keyItem] = {
                        productLineId,
                    };
                    return prevRequests;
                });
            }}
            className="addExportForm"
            style={{ marginRight: "20px" }}
        >
            <div className="addExportItem">
                <label>Product Line</label>
                <select
                    name="active"
                    id="active"
                    onChange={(e) => {
                        setProductLineId(e.target.value);
                    }}
                >
                    {props.productLines.map((item) => (
                        <option value={item.id}>{item.name}</option>
                    ))}
                </select>
            </div>
        
        </form>
    )
}