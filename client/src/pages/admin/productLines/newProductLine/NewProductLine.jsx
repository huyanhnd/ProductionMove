import "./newProductLine.css";

export default function NewProductLine() {
  return (
    <div className="newProductLine">
      <h1 className="addProductLineTitle">New Product Line</h1>
      <form className="addProductLineForm">
        <div className="productLineFlex">
          <div className="nameProductLine">
            <span className="addTitle">ProductLine</span>
            <div className="productLine-text">
              <div className="addProductLineItem">
                <label>Name</label>
                <input type="text" placeholder="Name ProductLine" />
              </div>
              <div className="addProductLineItem">
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
              <div className="addProductLineItem">
                <label>Price</label>
                <input type="text" placeholder="$$$" />
              </div>
              <div className="addProductLineItem">
                <label>Image</label>
                <input type="file" id="file" />
              </div>
            </div>
          </div>
          <div className="detailProductLine">
            <span className="addTitle">Product details</span>
            <div className="addTitle-text">
              <div className="addProductLineItem">
                <label>Kích thước màn hình</label>
                <input type="text" placeholder="123" />
              </div>
              <div className="addProductLineItem">
                <label>Chipset</label>
                <input type="text" placeholder="123" />
              </div>
              <div className="addProductLineItem">
                <label>Camera</label>
                <input type="text" placeholder="123" />
              </div>
              <div className="addProductLineItem">
                <label>Ram</label>
                <input type="text" placeholder="123" />
              </div>
              <div className="addProductLineItem">
                <label>Tần số quét</label>
                <input type="text" placeholder="123" />
              </div>
              <div className="addProductLineItem">
                <label>Dung lượng pin</label>
                <input type="text" placeholder="123" />
              </div>
              <div className="addProductLineItem">
                <label>Trọng lượng</label>
                <input type="text" placeholder="123" />
              </div>
              <div className="addProductLineItem">
                <label>Series Id</label>
                <input type="text" placeholder="123" />
              </div>
            </div>
          </div>
        </div>
        <button className="addProductLineButton">Create</button>
      </form>
    </div>
  );
}
