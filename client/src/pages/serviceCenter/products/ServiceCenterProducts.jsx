import "./serviceCenterProducts.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState } from "react";
import { serviceCenterRow } from "../../../dummyData";

const ServiceCenterProduct = () => {
  const [data, setData] = useState(serviceCenterRow);
  const Button = ({ type }) => {
    return <button className={"status-button " + type}>{type}</button>;
  };

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    { field: "id", headerName: "No.", width: 70 },
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
    { field: "code", headerName: "Code", width: 150 },
    {
      field: "email",
      headerName: "Color",
      width: 100,
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
      renderCell: (params) => {
        return <Button type={params.row.status} />;
      },
    },
    // {
    //   field: "action",
    //   headerName: "Action",
    //   width: 200,
    //   renderCell: (params) => {
    //     return (
    //       <div className="cellAction">
    //         <Link to="/users/test" style={{ textDecoration: "none" }}>
    //           <div className="viewButton">Edit</div>
    //         </Link>
    //         <div
    //           className="deleteButton"
    //           onClick={() => handleDelete(params.row.id)}
    //         >
    //           Delete
    //         </div>
    //       </div>
    //     );
    //   },
    // },
  ];
  
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Products
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <Link to="/servicecenters_products/addproducts" className="link">
          Add Product
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={actionColumn}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default ServiceCenterProduct;
