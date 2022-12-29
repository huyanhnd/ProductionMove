// import "./factoryFilter.scss";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState, useEffect, createContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductFactory, getProducts } from "../../../../api/productsApi";
import { getFactory } from "../../../../api/factoryApi";
import { getStore } from "../../../../api/storesApi";
import { getProductLines } from "../../../../api/productLineApi";

export default function NewExportFilter() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.products);
    const exportList = useSelector((state) => state.process.exportList);
    const productFactory = useSelector((state) => state.product.products);
    const stores = useSelector((state) => state.store.stores);

    const [productData, setProductData] = useState(products);

    useEffect(() => {
        getProducts(dispatch);
        getFactory(dispatch, "00", "000", "0000", "");
        getProductFactory(dispatch, 1, 10, 2, "InFactory");
        getStore(dispatch, "00", "000", "0000", "");
        getProductLines(dispatch);
    }, []);

    /**
     * productline filter box
     */
    const [productline, setProductline] = useState("0");
    const handleProductlineChange = (e) => {
        setProductline(e.target.value);
    };


    const productlines = productFactory.reduce(function (total, currentValue) {
        return total.map((item) => { return item.name }).includes(currentValue.name) ? total : [...total, currentValue];
    }, []);


    /**
     * color filter box
     */
    const [color, setColor] = useState("0");
    const handleColorChange = (e) => {
        setColor(e.target.value);
    };
    const colors = productFactory.reduce(function (total, currentValue) {
        return total.map((item) => { return item.color }).includes(currentValue.color) ? total : [...total, currentValue];
    }, []);

    /**
     * memory filter box
     */
    const [memory, setMemory] = useState("0");
    const handleMemoryChange = (e) => {
        setMemory(e.target.value);
    };
    const memories = productFactory.reduce(function (total, currentValue) {
        return total.map((item) => { return item.capacity }).includes(currentValue.capacity) ? total : [...total, currentValue];
    }, []);

    /**
     * submit
     */
    const [submit, setSubmit] = useState(true);
    useEffect(() => {
        setProductData(
            products.filter((item, index) => {
                return (productline != "0" && item.productLineId == productline)
                    && (color != '0' && item.color == color)
                    && ((memory != '0' && item.capacity == memory)  )
            })
            
        );
        console.log(productData);
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

    return (
        <div>
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

                {/* Cơ sở cửa hàng */}
                <div className="filterSection">
                    <div className="filterTitle">Color</div>
                    <FormControl>
                        <Select
                            className="filterBox"
                            value={color}
                            onChange={handleColorChange}
                        >
                            <MenuItem value={"0"}>
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

                {/* màu mắc */}
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
        </div>
    );
}
