import { useDispatch } from "react-redux";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
import "./newProduct.css";
import { addProductLine } from "../../redux/apiCalls";
import { useState } from "react";

export default function NewProduct() {
  // const [inputs, setInputs] = useState({});
  // const [file, setFile] = useState(null);
  // //const [cat, setCat] = useState([]);
  // const dispatch = useDispatch();

  // const handleChange = (e) => {
  //   setInputs((prev) => {
  //     return { ...prev, [e.target.name]: e.target.value };
  //   });
  // };
  // // const handleCat = (e) => {
  // //   setCat(e.target.value.split(","));
  // // };

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   const fileName = new Date().getTime() + file.name;
  //   const storage = getStorage(app);
  //   const storageRef = ref(storage, fileName);
  //   const uploadTask = uploadBytesResumable(storageRef, file);

  //   uploadTask.on(
  //     "state_changed",
  //     (snapshot) => {
  //       const progress =
  //         (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //       console.log("Upload is " + progress + "% done");
  //       switch (snapshot.state) {
  //         case "paused":
  //           console.log("Upload is paused");
  //           break;
  //         case "running":
  //           console.log("Upload is running");
  //           break;
  //         default:
  //       }
  //     },
  //     (error) => {
  //     },
  //     () => {
  //       getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
  //         const product = { ...inputs, img: downloadURL};
  //         addProductLine(product, dispatch);
  //       });
  //     }
  //   );
  // };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="file" />
        </div>

        <div className="addProductItem">
          <label>Code</label>
          <input type="text" placeholder=""/>
        </div>
        <div className="addProductItem">
          <label>Name</label>
          <input type="text" placeholder="" />
        </div>
        <div className="addProductItem">
          <label>SeriesId</label>
          <select name="seriesId" id="seriesId">
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>ScreenSize</label>
          <select name="screenSize" id="screenSize">
            <option value="1">13</option>
            <option value="2">14</option>
            <option value="3">15.6</option>
            <option value="4">16</option>
            <option value="5">17.3</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Resolution</label>
          <select name="resolution" id="resolution">
            <option value="1">1920 x 1080</option>
            <option value="2">1920 x 1200</option>
            <option value="3">2560 x 1600</option>
            <option value="4">2560 x 1920</option>
            <option value="5">3840 x 2400</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Processor</label>
          <input type="text" placeholder="" />
        </div>
        <div className="addProductItem">
          <label>RAM</label>
          <select name="ram" id="ram">
            <option value="1">8GB</option>
            <option value="2">16GB</option>
            <option value="3">32GB</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Hardware</label>
          <input type="text" placeholder="" />
        </div>
        <div className="addProductItem">
          <label>Graphics</label>
          <input type="text" placeholder="" />
        </div>
        <div className="addProductItem">
          <label>ListPrice</label>
          <input type="text" placeholder="" />
        </div>
        <button className="addProductButton">Create</button>
      </form>
    </div>
  );
}
