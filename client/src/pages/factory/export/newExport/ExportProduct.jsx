// import "./factoryProduct.scss";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { changeExportList } from "../../../../redux/processSlice";
import { useDispatch, useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import { getProducts, getProductFactory } from "../../../../api/productsApi";
import { getFactory } from "../../../../api/factoryApi";
import { getStore } from "../../../../api/storesApi";
import { getServiceCenter } from "../../../../api/serviceCenterApi";
import { FormControl, MenuItem, Select } from "@mui/material";

export default function ExportProduct() {
    /**
     * productline filter box
     */
    const [productline, setProductline] = useState("0");
    const handleProductlineChange = (e) => {
        setProductline(e.target.value);
    };
    /**
 * color filter box
 */
    const [color, setColor] = useState("All");
    const handleColorChange = (e) => {
        setColor(e.target.value);
    };
    /**
         * memory filter box
         */
    const [memory, setMemory] = useState("0");
    const handleMemoryChange = (e) => {
        setMemory(e.target.value);
    };
    /**
        * submit
        */
    const [submit, setSubmit] = useState(true);
    useEffect(() => {
        getProductFactory(dispatch, 1, 10, 2, "InFactory", productline, color, memory);
    }, [submit]);


    const HandleSubmit = (e) => {
        setSubmit(!submit);
        // setSubmit(!submit);
        // postProcess(dispatch, {
        //     name: "note",
        //     factoryId: 2,
        //     storeId: 3,
        //     productIds: exportList,
        // });
    };


    const dispatch = useDispatch();
    const productFactory = useSelector((state) => state.product.products);
    console.log(productFactory);
    const factories = useSelector((state) => state.factory.factories);
    // const stores = useSelector((state) => state.store.stores);
    const serviceCenters = useSelector(
        (state) => state.serviceCenter.serviceCenters
    );

    useEffect(() => {
        getProducts(dispatch);
        getFactory(dispatch, "00", "000", "0000", "");
        getStore(dispatch, "00", "000", "0000", "");
        getServiceCenter(dispatch, "00", "000", "0000", "");
        getProductFactory(dispatch, 1, 10, 2, "InFactory", productline, color, memory);
    }, [dispatch]);
console.log(productline);
    const productlines = productFactory.reduce(function (total, currentValue) {
        return total.map((item) => { return item.name }).includes(currentValue.name) ? total : [...total, currentValue];
    }, []);
    const colors = productFactory.reduce(function (total, currentValue) {
        return total.map((item) => { return item.color }).includes(currentValue.color) ? total : [...total, currentValue];
    }, []);
    const memories = productFactory.reduce(function (total, currentValue) {
        return total.map((item) => { return item.capacity }).includes(currentValue.capacity) ? total : [...total, currentValue];
    }, []);

    const handleDelete = (id) => {
        productFactory.filter((item) => item.id !== id);
    };
    var no = 0;
    const columns = [
        {
            field: "id",
            headerName: "Id",
            width: 50,
        },
        {
            field: "name",
            headerName: "Product Line",
            width: 150,
        },
        {
            field: "capacity",
            headerName: "Memory",
            width: 100,
        },
        {
            field: "color",
            headerName: "Color",
            width: 100,
        },
        { field: "code", headerName: "Code", width: 120 },
        // {
        //   field: "factoryId",
        //   headerName: "Cơ sở sản xuất",
        //   width: 150,
        //   renderCell: (params) => {
        //     const factory = factories.find(item => {
        //       return item.id == params.row.factoryId
        //     })
        //     return (
        //       <div>{typeof(factory.name) == 'string' ? factory.name : ''}</div>
        //     );
        //   },
        // },
        {
            field: "serviceCenterId",
            headerName: "Trung tâm bảo hành",
            width: 150,
            renderCell: (params) => {
                const serviceCenter = serviceCenters.find((item) => {
                    return item.id == params.row.serviceCenterId;
                });
                return (
                    <div>
                        {typeof serviceCenter.name == "string"
                            ? serviceCenter.name
                            : ""}
                    </div>
                );
            },
        },
        {
            field: "manufactureDate",
            headerName: "Ngày sản xuất",
            width: 150,
            renderCell: (params) => {
                return <div>{params.row.manufactureDate}</div>;
            },
        },
        {
            field: "warrantyPeriod",
            headerName: "Warranty Period",
            width: 150,
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
    ];

    return (
        <div className="table">
            <div className="factoryFilter">
                {/* productline */}
                <div className="filterSection">
                    <div className="filterTitle">Product Line</div>
                    <FormControl>
                        <Select
                            className="filterBox"
                            value={productline}
                            onChange={handleProductlineChange}
                        >
                            <MenuItem value={"0"}>
                                <em>Tất cả</em>
                            </MenuItem>
                            {productlines.map((data, index) => {
                                return (
                                    <MenuItem value={data.productLineId} key={index}>
                                        {data.name}
                                    </MenuItem>
                                );
                            })}
                        </Select>
                    </FormControl>
                </div>

                {/* màu */}
                <div className="filterSection">
                    <div className="filterTitle">Color</div>
                    <FormControl>
                        <Select
                            className="filterBox"
                            value={color}
                            onChange={handleColorChange}
                        >
                            <MenuItem value={"All"}>
                                <em>Tất cả</em>
                            </MenuItem>
                            {colors.map((data, index) => {
                                return (
                                    <MenuItem value={data.color} key={index}>
                                        {data.color}
                                    </MenuItem>
                                );
                            })}
                        </Select>
                    </FormControl>
                </div>

                {/* bộ nhớ */}
                <div className="filterSection">
                    <div className="filterTitle">Memory</div>
                    <FormControl>
                        <Select
                            className="filterBox"
                            value={memory}
                            onChange={handleMemoryChange}
                        >
                            <MenuItem value={"0"}>
                                <em>Tất cả</em>
                            </MenuItem>
                            {memories.map((data, index) => {
                                return (
                                    <MenuItem value={data.capacity} key={index}>
                                        {data.capacity}
                                    </MenuItem>
                                );
                            })}
                        </Select>
                    </FormControl>
                </div>

                {/* Tên nhà máy */}
                {/* <div className="filterSection ">
          <div className="filterTitle">Factory name</div>
          <input type="text" placeholder="Type factory name here" id="filterInputBox" onChange={handeInputChange} value={factoryName} />
        </div> */}
                <div className="filterSection">
                    <br />
                    <div id="submit-btn" onClick={HandleSubmit}>
                        Submit
                    </div>
                </div>
            </div>


            <DataGrid
                rows={productFactory}
                columns={columns}
                pageSize={10}
                disableSelectionOnClick
                checkboxSelection
                onSelectionModelChange={(rows) => dispatch(changeExportList(rows))}
            />
        </div>
    );
}