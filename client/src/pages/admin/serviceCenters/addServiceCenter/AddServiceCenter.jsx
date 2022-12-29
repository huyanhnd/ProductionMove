import { useState } from "react";
import app from "../../../../firebase"
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import "./addServiceCenter.css";
import { useDispatch } from "react-redux";
import { addUser } from "../../../..//api/userApi";
import AddressFilter from "./AddressFilter";

export default function AddServiceCenter() {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({role: "Service Center"});
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setInputs(prev => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }
  
  const handleClick = (e) => {
    e.preventDefault();
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const user = { ...inputs, image: downloadURL };
          addUser(user, dispatch);
          alert("Add User Success!");
        });
      }
    );
  };

  return (
    <div className="newServiceCenter">
      <h1 className="newServiceCenterTitle">New ServiceCenter</h1>
      <form className="newServiceCenterForm">
        <div className="newServiceCenterItem">
          <label>ServiceCenter name</label>
          <input type="text" placeholder="" name="" onChange={handleChange} />
        </div>
        <AddressFilter/>
        <button className="newServiceCenterButton" onClick={handleClick}>Create</button>
      </form >
    </div >
  );
}

// import "./addStore.css"
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from "react-redux";
// import { getDistrict, getProvince, getWard } from "../../../../api/addressApi";
// import { getUsers } from "../../../../api/userApi";
// import { addStore } from "../../../../api/storesApi";

// export default function AddStore() {
//     const dispatch = useDispatch();
//     useEffect(() => {
//         getProvince(dispatch);
//         getUsers(dispatch)
//     }, [dispatch]);

//     /**
//      * name handle
//     */
//     const [storeName, setStoreName] = useState("")
//     const handeStoreNameChange = (e) => {
//         setStoreName(e.target.value)
//     }
//     /**
//      * province handle
//      */
//     const province = useSelector((state) => state.address.province);
//     const [provinceCode, setProvinceCode] = useState('00')
//     const handleProvinceCodeChange = (e) => {
//         setProvinceCode(e.target.value)
//         setDistrictCode('000')
//         setWardCode('0000')
//     }
//     /**
//      * District handle
//      */
//     useEffect(() => {
//         getDistrict(dispatch, provinceCode);
//     }, [provinceCode])
//     const district = useSelector((state) => state.address.district);
//     const [districtCode, setDistrictCode] = useState('000')
//     const handleDistrictCodeChange = (e) => {
//         setDistrictCode(e.target.value)
//         setWardCode('0000')
//     }
//     /**
//      * ward handle
//      */
//     useEffect(() => {
//         getWard(dispatch, districtCode);
//     }, [districtCode])
//     const ward = useSelector((state) => state.address.ward);
//     const [wardCode, setWardCode] = useState('0000')
//     const handleWardCodeChange = (e) => {
//         setWardCode(e.target.value)
//     }
//     /**
//      * address handle
//      */
//     const [address, setAddress] = useState('')
//     const handeAddressChange = (e) => {
//         setAddress(e.target.value)
//     }

//     /**
//      * Store id handle
//      */
//     const allUsers = useSelector((state) => state.user.users);
//     const storeIds = allUsers.filter(user => {
//         return user.role == 'Store'
//     })
//     console.log();
//     const [storeId, setStoreId] = useState(storeIds[storeIds.length -1].id)
//     const handleStoreIdChange = (e) => {
//         setStoreId(e.target.value)
//     }

//     const handleSubmit = (e) => {
//         const newStoreName = document.getElementsByClassName('input-box')[0].value
//         const newProvinceCode = provinceCode
//         const newProvinceName = province.find(curValue => {
//             return curValue.code == newProvinceCode
//         }).name
//         const newDistrictCode = districtCode
//         const newDistrictName = district.find(curValue => {
//             return curValue.code == newDistrictCode
//         }).name
//         const newWardCode = wardCode
//         const newWardName = ward.find(curValue => {
//             return curValue.code == newWardCode
//         }).name
//         const newAddress = document.getElementsByClassName('input-box')[1].value.concat(' - ', newWardName, ' - ', newDistrictName, ' - ', newProvinceName)
//         const newStoreId = storeId
//         const newStore = { "name": newStoreName, "address" : newAddress, "wardCode" : newWardCode,  "accountId" : newStoreId }
//         addStore(newStore, dispatch)
//     }
//     return (
//         <div className="updateStore-container">
//             <div className="updateFactory-content">
//                 <div className="title">
//                     Please enter details below!
//                 </div>

//                 {/* sửa tên nhà máy */}
//                 <div className="select-section">
//                     <div className="select-title">Store name</div>
//                     <input type="text" placeholder="Type Store name here" class="input-box" value={storeName} onChange={handeStoreNameChange} />
//                 </div>

//                 {/* Sửa thành phố */}
//                 <div className="select-section">
//                     <div className="select-title">Province/City</div>
//                     <FormControl >
//                         <Select className="select-box"
//                             value={provinceCode}
//                             onChange={handleProvinceCodeChange}
//                         >
//                             {province.map((data, index) => {
//                                 return <MenuItem value={data.code} key={index}>{data.name}</MenuItem>
//                             })}
//                         </Select>
//                     </FormControl>
//                 </div>

//                 {/* Sửa Huyện */}
//                 <div className="select-section">
//                     <div className="select-title">District</div>
//                     <FormControl >
//                         <Select className="select-box"
//                             value={districtCode}
//                             onChange={handleDistrictCodeChange}
//                         >
//                             {district.map((data, index) => {
//                                 return <MenuItem value={data.code} key={index}>{data.name}</MenuItem>
//                             })}
//                         </Select>
//                     </FormControl>
//                 </div>

//                 {/* Sửa Xã */}
//                 <div className="select-section">
//                     <div className="select-title">Ward</div>
//                     <FormControl >
//                         <Select className="select-box"
//                             value={wardCode}
//                             onChange={handleWardCodeChange}
//                         >
//                             {ward.map((data, index) => {
//                                 return <MenuItem value={data.code} key={index}>{data.name}</MenuItem>
//                             })}
//                         </Select>
//                     </FormControl>
//                 </div>

//                 {/* Sửa địa chỉ cụ thể */}
//                 <div className="select-section">
//                     <div className="select-title">Address</div>
//                     <input type="text" placeholder="Type address here" class="input-box" value={address} onChange={handeAddressChange} />
//                 </div>

//                 {/* Sửa Store */}
//                 <div className="select-section">
//                     <div className="select-title">Authorized account</div>
//                     <FormControl >
//                         <Select className="select-box"
//                             value={storeId}
//                             onChange={handleStoreIdChange}
//                         >
//                             {storeIds.map((data, index) => {
//                                 return <MenuItem value={data.id} key={index}>{data.fullName}</MenuItem>
//                             })}
//                         </Select>
//                     </FormControl>
//                 </div>
//                 <div
//                     id="submit-btn"
//                     onClick={handleSubmit}
//                 >Submit</div>
//             </div>
//         </div>
//     )
// }