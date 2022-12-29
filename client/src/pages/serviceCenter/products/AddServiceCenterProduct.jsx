import "./addProductServiceCenter.css";

export default function AddServiceCenterProduct() {
  return (
    <div className="newProductServiceCenter">
      <h1 className="addProductServiceCenterTitle">New Product ServiceCenter</h1>
      <form className="addProductServiceCenterForm">
      <div className="addProductServiceCenterItem">
          <label>ProductServiceCenter Name</label>
          <input type="text" placeholder="Iphone" />
        </div>
        <div className="addProductServiceCenterItem">
          <label>Code</label>
          <input type="text" placeholder="UX9702" />
        </div>
        <div className="addProductServiceCenterItem">
          <label>Color</label>
          <input type="text" placeholder="white,black,..." />
        </div>
        <div className="addProductServiceCenterItem">
          <label>Memory</label>
          <select name="active" id="active">
            <option value="manufacture">64GB</option>
            <option value="store">128GB</option>
            <option value="sold">256GB</option>
            <option value="error">1TB</option>
          </select>
        </div>
        <div className="addProductServiceCenterItem">
          <label>Status</label>
          <select name="active" id="active">
            <option value="manufacture">In Warranty</option>
            <option value="store">Warranted</option>
            <option value="sold">Error</option>
          </select>
        </div>
        <div className="addProductServiceCenterItem">
          <label>Image</label>
          <input type="file" id="file" />
        </div>
        <button className="addProductServiceCenterButton">Create</button>
      </form>
    </div>
  );
}
