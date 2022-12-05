import "./productList.css";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProductLine } from "../../redux/apiCalls";

export default function ProductList() {
  const dispatch = useDispatch();
  const productline = useSelector((state) => state.productline.productline);
  useEffect(() => {
    getProductLine(dispatch);
  }, [dispatch]);

  // const [data, setData] = useState(productRows);

  // const handleDelete = (id) => {
  //   setData(data.filter((item) => item.id !== id));
  // };

  const columns = [
    { field: "code", headerName: "CODE", width: 90 },
    {
      field: "name",
      headerName: "NAME",
      width: 200,
    },
    { field: "seriesId", headerName: "ID", width: 90 },
    { field: "screenSize", headerName: "SIZE", width: 90 },
    { field: "resolution", headerName: "ID", width: 90 },
    { field: "processor", headerName: "SIZE", width: 90 },
    { field: "memory", headerName: "ID", width: 90 },
    { field: "hardware", headerName: "SIZE", width: 90 },
    { field: "graphics", headerName: "ID", width: 90 },
    { field: "listPrice", headerName: "SIZE", width: 90 },
    // {
    //   field: "price",
    //   headerName: "Price",
    //   width: 160,
    // },
    // {
    //   field: "action",
    //   headerName: "Action",
    //   width: 150,
    //   renderCell: (productLine) => {
    //     return (
    //       <>
    //         <Link to={"/product/" + productLine.row.code}>
    //           <button className="productListEdit">Edit</button>
    //         </Link>
    //         <DeleteOutline
    //           className="productListDelete"
    //           //onClick={() => handleDelete(params.row.id)}
    //         />
    //       </>
    //     );
    //   },
    // },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={productline}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
