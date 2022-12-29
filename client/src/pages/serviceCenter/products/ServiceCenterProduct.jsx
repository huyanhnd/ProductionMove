import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, deleteUser } from "../../../api/userApi";
import Select from "@mui/material/Select";
import { useEffect, useState } from "react";
import { formatDate } from "../../../helper/formatDate";
import { checkRole } from "../../../helper/checkRole";
import { getProductServiceCenter, getProductServiceCenterFiltered } from "../../../api/productsApi";
import { getProductLines } from "../../../api/productLineApi";
import FormControl from "@mui/material/FormControl";
import { MenuItem } from "@mui/material";
import axios from "axios";
import { publicRequest } from "../../../api/requestMethods";

export default function ServiceCenterProduct() {
    const dispatch = useDispatch();
    const AllserviceCenterProduct = useSelector((state) => state.product.productServiceCenter);
    const serviceCenterProductFiltered = useSelector((state) => state.product.productServiceCenterFiltered);
    const productLines = useSelector((state) => state.productline.productlines);
    const [serviceCenterId, setServiceCenterId] = useState("0");
    const [code, setCode] = useState("");

    const productLines_ = AllserviceCenterProduct.reduce(function (total, currentValue) {
        return total.map((item) => { return item.name }).includes(currentValue.name) ? total : [...total, currentValue];
    }, []);
    const color_ = AllserviceCenterProduct.reduce(function (total, currentValue) {
        return total.map((item) => { return item.color }).includes(currentValue.color) ? total : [...total, currentValue];
    }, []);
    const memory_ = AllserviceCenterProduct.reduce(function (total, currentValue) {
        return total.map((item) => { return item.capacity }).includes(currentValue.capacity) ? total : [...total, currentValue];
    }, []);
    const [productline, setProductline] = useState(0);
    const [color, setColor] = useState("All");
    const [memory, setMemory] = useState("0");

    useEffect(() => {
        getProductServiceCenterFiltered(dispatch, serviceCenterId, 'All', productline, color, memory);
    }, [dispatch, serviceCenterId, productline, color, memory]);
    useEffect(() => {
        getProductServiceCenter(dispatch, serviceCenterId, 0)
    }, [dispatch])
    console.log(productline, color, memory);
    
    const columns = [
        { field: "id", headerName: "Id", width: 50 },
        { field: "code", headerName: "Code", width: 100 },
        {
            field: "productLineId",
            headerName: "ProductLine",
            width: 100,
            renderCell: (params) => {
                return (
                    <div className="userListItem">
                        {params.row.productLineId}
                    </div>
                );
            }
        },
        {
            field: "status",
            headerName: "Status",
            width: 120,
            renderCell: (params) => {
                return (
                    <span className={`status ${params.row.status}`}>
                        {params.row.status}
                    </span>
                );
            },
        },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <div>
                        <button className="userListEdit" onClick={() => { publicRequest.put(`/Product/return/${code}`) }}> Return to Factory</button >
                    </div>
                );
            },
        },
    ];

    return (
        <div className="userList">
            <div className="datatableTitle">
                Service Center Product
            </div>
            <div className="factoryFilter">
                {/* productline */}
                <div className="filterSection">
                    <div className="filterTitle">Product Line</div>
                    <FormControl>
                        <Select
                            className="filterBox"
                            defaultValue={0}
                        >
                            <MenuItem value={0} onClick={() => { setProductline(0) }}>
                                <em>Tất cả</em>
                            </MenuItem>
                            {productLines_.map((data, index) => {
                                return (
                                    <MenuItem value={data.productLineId} key={index} onClick={() => { setProductline(data.productLineId) }}>
                                        {data.name}
                                    </MenuItem>
                                );
                            })}
                        </Select>
                    </FormControl>
                </div>

                {/* color */}
                <div className="filterSection">
                    <div className="filterTitle">Color</div>
                    <FormControl>
                        <Select
                            className="filterBox"
                            defaultValue={'All'}
                        >
                            <MenuItem value={'All'} onClick={() => { setColor('All') }}>
                                <em>Tất cả</em>
                            </MenuItem>
                            {color_.map((data, index) => {
                                return (
                                    <MenuItem value={data.color} key={index} onClick={() => { setColor(data.color) }}>
                                        {data.color}
                                    </MenuItem>
                                );
                            })}
                        </Select>
                    </FormControl>
                </div>

                {/* Memory */}
                <div className="filterSection">
                    <div className="filterTitle">Memory</div>
                    <FormControl>
                        <Select
                            className="filterBox"
                            defaultValue={"0"}
                        >
                            <MenuItem value={"0"} onClick={() => { setMemory("0") }}>
                                <em>Tất cả</em>
                            </MenuItem>
                            {memory_.map((data, index) => {
                                return (
                                    <MenuItem value={data.capacity} key={index} onClick={() => { setMemory(data.capacity) }}>
                                        {data.capacity}
                                    </MenuItem>
                                );
                            })}
                        </Select>
                    </FormControl>
                </div>
            </div>
            <DataGrid
                rows={serviceCenterProductFiltered}
                columns={columns}
                pageSize={10}
                onSelectionModelChange={(ids) => {
                    const selectedIDs = new Set(ids);
                    const selectedRowData = serviceCenterProductFiltered.filter(row => selectedIDs.has(row.id))
                    setCode(selectedRowData[0].code);
                }}
                autoHeight
            />
        </div>
    );
}
