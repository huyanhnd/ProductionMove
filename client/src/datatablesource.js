export const userColumns = [
  {
    field: "user",
    headerName: "Product",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  { field: "id", headerName: "Code", width: 70 },
  {
    field: "email",
    headerName: "Color",
    width: 100,
  },

  {
    field: "age",
    headerName: "Memory",
    width: 100,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {params.row.age} GB
        </div>
      );
    },
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        //         <div className={`cellWithStatus ${params.row.status}`}>
        //         {params.row.status}
        //          </div>
        <select className={`cellWithStatus ${params.row.status}`} name="cars" id="cars">
          <option value="mercedes">Newly produced</option>
          <option value="volvo">In WareHouse</option>
          <option value="saab">In Store</option>
          <option value="audi">Under warranty</option>
        </select>
      );
    },
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    username: "iPhone 11",
    img: "https://cdn.tgdd.vn/Products/Images/42/153856/iphone-11-trang-200x200.jpg",
    status: "active",
    email: "white",
    age: 128,
  },
  {
    id: 2,
    username: "iPhone 11 Pro",
    img: "https://cdn.tgdd.vn/Products/Images/42/153856/iphone-11-trang-200x200.jpg",
    email: "white",
    status: "passive",
    age: 64,
  },
  {
    id: 3,
    username: "iPhone 11 ProMax",
    img: "https://cdn.tgdd.vn/Products/Images/42/153856/iphone-11-trang-200x200.jpg",
    email: "white",
    status: "pending",
    age: 64,
  },
  {
    id: 4,
    username: "iPhone 11",
    img: "https://cdn.tgdd.vn/Products/Images/42/153856/iphone-11-trang-200x200.jpg",
    email: "white",
    status: "active",
    age: 64,
  },
  {
    id: 5,
    username: "iPhone 11",
    img: "https://cdn.tgdd.vn/Products/Images/42/153856/iphone-11-trang-200x200.jpg",
    email: "white",
    status: "passive",
    age: 64,
  },
  {
    id: 6,
    username: "iPhone 11 ProMax",
    img: "https://cdn.tgdd.vn/Products/Images/42/153856/iphone-11-trang-200x200.jpg",
    email: "white",
    status: "active",
    age: 256,
  },
  {
    id: 7,
    username: "iPhone 11 ProMax",
    img: "https://cdn.tgdd.vn/Products/Images/42/153856/iphone-11-trang-200x200.jpg",
    email: "white",
    status: "passive",
    age: 256,
  },
  {
    id: 8,
    username: "iPhone 11 ProMax",
    img: "https://cdn.tgdd.vn/Products/Images/42/153856/iphone-11-trang-200x200.jpg",
    email: "white",
    status: "active",
    age: 256,
  },
  {
    id: 9,
    username: "iPhone 11 ProMax",
    img: "https://cdn.tgdd.vn/Products/Images/42/153856/iphone-11-trang-200x200.jpg",
    email: "white",
    status: "pending",
    age: 64,
  },
  {
    id: 10,
    username: "iPhone 11 Pro",
    img: "https://cdn.tgdd.vn/Products/Images/42/153856/iphone-11-trang-200x200.jpg",
    email: "white",
    status: "active",
    age: 64,
  },
];
