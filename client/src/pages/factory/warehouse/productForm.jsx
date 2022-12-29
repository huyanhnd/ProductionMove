import {useState} from "react";
import Input from "@mui/material/Input";
import {TextField} from "@mui/material";

export default function ProductForm(props) {
    const [productLineId, setProductLineId] = useState(1);
    const [storeId, setStoreId] = useState(3);
    const [quantity, setQuantity] = useState(3);
    const [warrantyPeriod, setWarrantyPeriod] = useState("abc");
    const [capacity, setCapacity] = useState("64GB");
    const [color, setColor] = useState("black");
    const [price, setPrice] = useState("0");

    return (
        <form
            onChange={(e) => {
                e.preventDefault();
                props.changeProducts((prevProducts) => {
                    prevProducts[props.keyItem] = {
                        productLineId,
                        storeId,
                        quantity,
                        warrantyPeriod,
                        capacity,
                        color,
                        price,
                    };
                    return prevProducts;
                });
            }}
            className="addProductForm"
            style={{marginRight: "20px"}}
        >
            {/* {productLines} */}
            <div className="addProductItem">
                <label>Product Line</label>
                <select
                    name="active"
                    id="active"
                    onChange={(e) => {
                        const temp = parseInt(e.target.value);
                        setProductLineId(temp);
                    }}
                >
                    {props.productLines.map((item) => (
                        <option value={item.id}>{item.name}</option>
                    ))}
                </select>
            </div>
            <div className="addProductItem">
                <label>Store</label>
                <input
                    type="number"
                    placeholder="Iphone"
                    onChange={(e) => {
                        const temp = parseInt(e.target.value);
                        setStoreId(temp);
                    }}
                />
            </div>
            <div className="addProductItem">
                <label>Quantity</label>
                <input
                    type="number"
                    placeholder="UX9702"
                    onChange={(e) => {
                        const temp = parseInt(e.target.value);
                        setQuantity(temp);
                    }}
                />
            </div>
            <div className="addProductItem">
                <label>Warranty Period</label>
                <input
                    type="text"
                    onChange={(e) => {
                        setWarrantyPeriod(e.target.value);
                    }}
                />
            </div>
            <div className="addProductItem">
                <label>Memory</label>
                <select
                    name="active"
                    id="active"
                    onChange={(e) => {
                        setCapacity(e.target.value);
                    }}
                >
                    <option value="manufacture">64GB</option>
                    <option value="store">128GB</option>
                    <option value="sold">256GB</option>
                    <option value="error">1TB</option>
                </select>
            </div>
            <div className="addProductItem">
                <label>Color</label>
                <select
                    name="active"
                    id="active"
                    onChange={(e) => {
                        setColor("black");
                        // setColor(e.target.value);
                    }}
                >
                    <option value="black">Black</option>
                    <option value="white">White</option>
                </select>
            </div>
            {/* <TextField
                id="outlined-number"
                label="Price"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                value={price}
                onChange={(e) => {
                    const temp = parseInt(e.target.value);
                    setPrice(temp);
                }}
            /> */}
            <div className="addProductItem">
                <label>Price</label>
                <input
                    onChange={(e) => {
                        setPrice(e.target.value);
                    }}
                />
            </div>
        </form>
    );
}
