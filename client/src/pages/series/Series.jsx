import "./series.css";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { getSeries } from "../../redux/apiCalls";
import { useEffect, useState } from "react";
import { seriesData } from "../../dummyData";
import "./series.css"
import SeriItem from "./SeriItem";

export default function Series() {
    // const dispatch = useDispatch();
    // const series = useSelector((state) => state.series.series);

    // useEffect(() => {
    //     getSeries(dispatch);
    // }, [dispatch]);

    const series = seriesData;
    console.log(series);
    return (
        <div className="seriesPage">
            <SeriItem data={seriesData[0]}/>
            <SeriItem data={seriesData[0]}/>
            <SeriItem data={seriesData[0]}/>
            <SeriItem data={seriesData[0]}/>
            <SeriItem data={seriesData[0]}/>
            <SeriItem data={seriesData[0]}/>
        </div>
    )
  const dispatch = useDispatch();
  const series = useSelector((state) => state.series.series);

  useEffect(() => {
    getSeries(dispatch);
  }, [dispatch]);

  return (
    <div className="productList">
    </div>
  );
}


// export default function Series() {
//     const dispatch = useDispatch();
//     const series = useSelector((state) => state.series.series);

//     useEffect(() => {
//         getSeries(dispatch);
//     }, [dispatch]);

//     const columns = [
//         {
//             field: "id",
//             headerName: "ID",
//             width: 90
//         },
//         {
//             field: "name",
//             headerName: "Name",
//             width: 300,
//         },
//     ];

//     return (
//         <div className="productList">
//             <DataGrid
//                 rows={series}
//                 disableSelectionOnClick
//                 columns={columns}
//                 pageSize={10}
//                 checkboxSelection
//             />
//         </div>
//     );
// }
