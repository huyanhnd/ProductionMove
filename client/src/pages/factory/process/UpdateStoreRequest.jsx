import { DataGrid } from "@mui/x-data-grid"
import { useSelector } from "react-redux"
import { requestFromStore } from "../../../dummyData"
import "./updateStoreRequest.scss"

export default function UpdateStoreRequest() {
    const storeRequest = useSelector((state) => state.currentStoreRequest.storeRequest)
    const data = requestFromStore[storeRequest]
    console.log();
    const handleStatus = (action) => {
        data.status=action
    }
    function Request(props) {
        return (
            <tr>
                <td className="td">{props.index}</td>
                <td className="td">{props.item.productLine}</td>
                <td className="td">{props.item.color}</td>
                <td className="td">{props.item.memory}</td>
                <td className="td">{props.item.quantity}</td>
            </tr>
        )
    }

    const colums = [
        { field: "id", headerName: "No.", width: 50, },
        { field: "productLine", headerName: "Product Line", width: 250, },
        { field: "color", headerName: "Color", width: 120 },
        { field: "memory", headerName: "Memory", width: 120 },
        { field: "quantity", headerName: "Quantity", width: 120 }
    ];

    return (
        <div className="page">
            <div className="header">
                <div className="title">Store request details</div>
                <button
                    className="approve-request"
                onClick={() => handleStatus("Complete")}
                >Approve</button>
                <button
                    className="reject-request"
                onClick={() => handleStatus("Rejected")}
                >Reject</button>
            </div>

            <div className="row">
                <div className="field ">Request ID </div>
                <div className="param">: {data.request}</div>
            </div>

            <div className="row">
                <div className="field ">From </div>
                <div className="param">: Cửa Hàng XX - Số YY - Đường ZZ</div>
            </div>

            <div className="row">
                <div className="field ">Date </div>
                <div className="param">: {data.receivedAt}</div>
            </div>

            <div className="row">
                <div className="field ">Status </div>
                <div className="param">: {data.status}</div>
            </div>

            <div className="request">
                <table>
                    <tr>
                        <th className="th">No.</th>
                        <th className="th">Product Line</th>
                        <th className="th">Color</th>
                        <th className="th">Memory</th>
                        <th className="th">Quantity</th>
                    </tr>
                    {data.orderDetails.map((item, index) => {
                        return <Request item={item} index={index} key={index} />
                    })}
                </table>
            </div>
        </div>
    )
}