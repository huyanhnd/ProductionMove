import "./factoryWarehouse.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { DataGrid } from "@mui/x-data-grid";
import { userRows } from "../../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";

const FactoryWarehouse = () => {
  const [data, setData] = useState(userRows);
  const Button = ({ type }) => {
    return <button className={"status-button " + type}>{type}</button>;
  };
  const columns = [
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
      field: "age",
      headerName: "Memory",
      width: 100,
      renderCell: (params) => {
        return <div className="cellWithImg">{params.row.age} GB</div>;
      },
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
      renderCell: (params) => {
        return <Button type={params.row.status} />;
      },
    },
  ];

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Products Of Factory
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <Link to="/factory-warehouse/addproducts" className="link">
          Add Product Into Warehouse
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
};

export default FactoryWarehouse;
