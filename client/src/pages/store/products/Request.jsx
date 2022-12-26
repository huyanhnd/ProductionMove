import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./request.css"
import { getProductLines } from "../../../api/productLineApi";
import { FormControl, MenuItem, Select } from "@mui/material"
import { setStoreRequest } from "../../../redux/productsSlice"

export default function Request() {
    const dispatch = useDispatch();
    useEffect(() => {
        getProductLines(dispatch);
    }, [dispatch]);
    const productlines = useSelector((state) => state.productline.productlines);
    /**
     * Product Name
     */
    const [productName, setProductName] = useState(0)
    const handleProductNameChange = (e) => {
        setProductName(e.target.value)
        setRequest({ productName: productName, memory: memory, color: color, quantity: quantity })
    }
    /**
     * Memory
     */
    const [memory, setMemory] = useState(0)
    const handleMemoryChange = (e) => {
        setMemory(e.target.value)
        setRequest({ productName: productName, memory: memory, color: color, quantity: quantity })
    }
    const memories = ["32GB", "64GB", "128GB", "256GB", "1TB"]
    /**
     * color
     */
    const [color, setColor] = useState(0)
    const handleColorChange = (e) => {
        setColor(e.target.value)
        setRequest({ productName: productName, memory: memory, color: color, quantity: quantity })
    }
    const colors = ["Black", "White", "Gold", "Red", "Sapphire"]
    /**
     * quantity
     */
    const [quantity, setQuantityChange] = useState()
    const handleQuantityChange = (e) => {
        setQuantityChange(e.target.value)
        setRequest({ productName: productName, memory: memory, color: color, quantity: quantity })
    }
    const [request, setRequest] = useState({ productName: '', memory: '', color: '', quantity: 0 })
    return (
        <div className="requestProductForm">
            <div className="requestProductItem">
                <label>Product name</label>
                <FormControl >
                    <Select className="inputBox"
                        value={productName}
                        onChange={handleProductNameChange}
                    >
                        <MenuItem value={0}>
                            <em>None</em>
                        </MenuItem>
                        {productlines.map((data, index) => {
                            return <MenuItem value={data.id} key={index}>{data.name}</MenuItem>
                        })}
                    </Select>
                </FormControl>
            </div>
            <div className="requestProductItem">
                <label>Memory</label>
                <FormControl >
                    <Select className="inputBox"
                        value={memory}
                        onChange={handleMemoryChange}
                    >
                        <MenuItem value={0}>
                            <em>None</em>
                        </MenuItem>
                        {memories.map((value, index) => {
                            return <MenuItem value={value} key={index}>{value}</MenuItem>
                        })}
                    </Select>
                </FormControl>
            </div>
            <div className="requestProductItem">
                <label>Color</label>
                <FormControl >
                    <Select className="inputBox"
                        value={color}
                        onChange={handleColorChange}
                    >
                        <MenuItem value={0}>
                            <em>None</em>
                        </MenuItem>
                        {colors.map((value, index) => {
                            return <MenuItem value={value} key={index}>{value}</MenuItem>
                        })}
                    </Select>
                </FormControl>
            </div>
            <div className="requestProductItem">
                <label>Quantity</label>
                <input type="text" placeholder="Type product quantity" className="typeInputBox" value={quantity} onChange={handleQuantityChange} />
            </div>

        </div>
    )
}
