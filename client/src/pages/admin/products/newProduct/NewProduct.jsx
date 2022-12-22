import "./newProduct.css";

export default function NewProduct() {
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Code</label>
          <input type="text" placeholder="UX9702" />
        </div>
        <div className="addProductItem">
          <label>Series</label>
          <input type="text" placeholder="Zenbook" />
        </div>
        <div className="addProductItem">
          <label>Product Line</label>
          <input type="text" placeholder="Zenbook 17 Fold OLED (UX9702)" />
        </div>
        <div className="addProductItem">
          <label>Status</label>
          <select name="active" id="active">
            <option value="manufacture">Manufacture</option>
            <option value="store">Store</option>
            <option value="sold">Sold</option>
            <option value="error">Error</option>
            <option value="warranty">Warranty</option>
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
