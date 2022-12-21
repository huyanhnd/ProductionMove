import { FormControl, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import "./factoryProduct.css";

export default function FactoryProduct({ item }) {
  const [accept,setAccept] = useState(0)
  const [status, setStatus] = useState(item.status)
  // 0: đã ghi nhận, 1 : đang thay đổi
  const handleStatus = (e) => {
    setStatus(e.target.value)
     setAccept(1)
  }
  const handleAccept = (e) => {
    if (accept !== 0) {
      setAccept(0)
      item.status = status;
    }
  }
  return (
    <tr className="factoryProduct-tr">
      <td className="factoryProduct-no">{item.id + 1}</td>
      <td className="factoryProduct-name">{item.name}</td>
      <td className="factoryProduct-serial">{item.serial}</td>
      <td className="factoryProduct-date">{item.date}</td>
      <td className="factoryProduct-price">{item.price}</td>
      <td className="factoryProduct-status">
        <FormControl >
          <Select className="status-select"
            value={status}
            onChange={handleStatus}
          >
            <MenuItem value={0}>
              <em>In stock</em>
            </MenuItem>
            <MenuItem value={1}>
              <em>Out of stock</em>
            </MenuItem>
            <MenuItem value={2}>
              <em>Cái gì đó</em>
            </MenuItem>
            <MenuItem value={3}>
              <em>Cái gì tiếp</em>
            </MenuItem>
          </Select>
        </FormControl>
        <button className={(accept==0) ? "accept-btn-inactive" : "accept-btn-active"} onClick={handleAccept}>Accept</button>
      </td>
    </tr>
  );
}
