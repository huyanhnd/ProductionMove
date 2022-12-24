import "./addProduct.css";

export default function AddServiceCenterProduct() {
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
      <div className="addProductItem">
          <label>Product Name</label>
          <input type="text" placeholder="Iphone" />
        </div>
        <div className="addProductItem">
          <label>Code</label>
          <input type="text" placeholder="UX9702" />
        </div>
        <div className="addProductItem">
          <label>Color</label>
          <input type="text" placeholder="white,black,..." />
        </div>
        <div className="addProductItem">
          <label>Memory</label>
          <select name="active" id="active">
            <option value="manufacture">64GB</option>
            <option value="store">128GB</option>
            <option value="sold">256GB</option>
            <option value="error">1TB</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Status</label>
          <select name="active" id="active">
            <option value="manufacture">In Warranty</option>
            <option value="store">Warranted</option>
            <option value="sold">Error</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="file" />
        </div>
        <button className="addProductButton">Create</button>
      </form>
    </div>
  );
}