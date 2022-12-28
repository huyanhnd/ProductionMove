import "./newProductLine.css";

export default function NewProductLine() {
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product Line</h1>
      <form className="addProductForm">
        <div className="productFlex">
          <div className="nameProduct">
            <span className="addTitle">ProductLine</span>
            <div className="productLine-text">
              <div className="addProductItem">
                <label>Name</label>
                <input type="text" placeholder="Name ProductLine" />
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
                <label>Kích thước màn hình</label>
                <input type="text" placeholder="123" />
              </div>
              <div className="addProductItem">
                <label>Chipset</label>
                <input type="text" placeholder="123" />
              </div>
              <div className="addProductItem">
                <label>Camera</label>
                <input type="text" placeholder="123" />
              </div>
              <div className="addProductItem">
                <label>Ram</label>
                <input type="text" placeholder="123" />
              </div>
              <div className="addProductItem">
                <label>Tần số quét</label>
                <input type="text" placeholder="123" />
              </div>
              <div className="addProductItem">
                <label>Dung lượng pin</label>
                <input type="text" placeholder="123" />
              </div>
              <div className="addProductItem">
                <label>Trọng lượng</label>
                <input type="text" placeholder="123" />
              </div>
              <div className="addProductItem">
                <label>Series Id</label>
                <input type="text" placeholder="123" />
              </div>
            </div>
          </div>
        </div>
        <button className="addProductButton">Create</button>
      </form>
    </div>
  );
}
