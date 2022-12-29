import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, deleteUser } from "../../../api/userApi";
import Select from "@mui/material/Select";
import { useEffect, useState } from "react";
import { formatDate } from "../../../helper/formatDate";
import { checkRole } from "../../../helper/checkRole";
import { getProductServiceCenter } from "../../../api/productsApi";
import { getProductLines } from "../../../api/productLineApi";
import FormControl from "@mui/material/FormControl";
import { MenuItem } from "@mui/material";

export default function ServiceCenterProduct() {
    const dispatch = useDispatch();
    const serviceCenterProduct = useSelector((state) => state.product.productServiceCenter);
    const productLines = useSelector((state) => state.productline.productlines);
    const [serviceCenterId, setServiceCenterId] = useState("0");

    // const productlines = serviceCenterProduct.reduce(function (total, currentValue) {
    //     return total.map((item) => { return item.name }).includes(currentValue.name) ? total : [...total, currentValue];
    // }, []);
    
    const [productline, setProductline] = useState("0");

    useEffect(() => {
        getProductServiceCenter(dispatch, serviceCenterId, "All", productline, "All");
    }, [dispatch, serviceCenterId, productline]);

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
                            <MenuItem value={0} onClick={() => {setProductline(0)}}>
                                <em>Tất cả</em>
                            </MenuItem>
                            {productLines.map((data, index) => {
                                return (
                                    <MenuItem value={data.id} key={index} onClick={() => {setProductline(data.id)}}>
                                        {data.name}
                                    </MenuItem>
                                );
                            })}
                        </Select>
                    </FormControl>
                </div>
            </div>
            <DataGrid
                rows={serviceCenterProduct}
                disableSelectionOnClick
                columns={columns}
                pageSize={10}
                checkboxSelection
                autoHeight
            />
        </div>
    );
}
