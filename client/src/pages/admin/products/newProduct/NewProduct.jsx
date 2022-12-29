import "./newProduct.css";

export default function NewProduct() {
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="productFlex">
          <div className="nameProduct">
            <span className="addTitle">Product</span>
            <div className="productLine-text">
              <div className="addProductItem">
                <label>Name</label>
                <input type="text" placeholder="Name Product" />
              </div>
              <div className="addProductItem">
                <label>Code</label>
                <select name="active" id="active">
                  <option value="">iP11</option>
                  <option value="">iP11PM</option>
                  <option value="">iP12</option>
                  <option value="">iP12P</option>
                  <option value="">iP12PM</option>
                  <option value="">iP13</option>
                  <option value="">iP13P</option>
                  <option value="">iP13PM</option>
                </select>
              </div>
              <div className="addProductItem">
                <label>Price</label>
                <input type="text" placeholder="$$$" />
              </div>
              <div className="addProductItem">
                <label>Image</label>
                <input type="file" id="file" />
              </div>
            </div>
          </div>
          <div className="detailProduct">
            <span className="addTitle">Product details</span>
            <div className="addTitle-text">
              <div className="addProductItem">
                <label>Cơ sở sản xuất</label>
                <input type="text" placeholder="" />
              </div>
              <div className="addProductItem">
                <label>Cửa hàng</label>
                <input type="text" placeholder="" />
              </div>
              <div className="addProductItem">
                <label>Trung tâm bảo hành</label>
                <input type="text" placeholder="" />
              </div>
              <div className="addProductItem">
                <label>Memory</label>
                <select name="active" id="memory">
                  <option value="">64GB</option>
                  <option value="">128GB</option>
                  <option value="">256GB</option>
                  <option value="">512GB</option>
                </select>
              </div>
              <div className="addProductItem">
                <label>Color</label>
                <input type="text" placeholder="123" />
              </div>
              <div className="addProductItem">
                <label>Status</label>
                <select name="active" id="memory">
                  <option value="">InFactory</option>
                  <option value="">InStore</option>
                  <option value="">Sold</option>
                  <option value="">InWarranty</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <button className="addProductButton">Create</button>
      </form>
    </div>
  );
}
