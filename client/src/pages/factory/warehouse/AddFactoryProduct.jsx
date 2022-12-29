import {useState, useEffect} from "react";
import ProductForm from "./productForm";
import {useDispatch, useSelector} from "react-redux";
import {postNewProducts} from "../../../api/productsApi";
import {getProductLines} from "../../../api/productLineApi";
import "./addProduct.css";

export default function AddFactoryProduct() {
    const dispatch = useDispatch();
    const productLines = useSelector((state) => state.productline.productlines);
    const [numberOfList, setNumberOfList] = useState(1);
    const [products, setProducts] = useState([{}]);

    const postNewProductsAPI = (products) => {
        postNewProducts(products, dispatch);
    };

    useEffect(() => {
        getProductLines(dispatch);
    }, [dispatch]);

    return (
        <div className="newProduct">
            <h1 className="addProductTitle">New Product</h1>
            <div style={{display: "flex"}}>
                {products.map((item, index) => (
                    <ProductForm
                        keyItem={index}
                        changeProducts={setProducts}
                        productLines={productLines}
                    />
                ))}
            </div>
            <div style={{display: "flex"}}>
                <div className="button">
                    <button
                        className="add"
                        onClick={() => {
                            setProducts([...products, {}]);
                        }}
                    >
                        +
                    </button>
                </div>
                <button
                    onClick={() => {
                        console.log(products);
                        postNewProductsAPI(products);
                    }}
                    className="addProductFacoryButton"
                >
                    Create
                </button>
            </div>
        </div>
    );
}
