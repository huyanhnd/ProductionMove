import "../factoryProcess.css"
import { useState } from "react";
import { Link } from "react-router-dom";
import { Tabs, Tab } from '@mui/material';
import ExportList from "../exportList/ExportList"

export default function FactoryExport() {
    const [value, setValue] = useState(0)

    const handleTabs = (e, val) => {
        setValue(val)
    }

    return (
        <div className="datatable">
            <div className="datatableTitle">
                Export Request
                <Link to="/factory-warehouse/addproducts" className="link">
                    Add Export Request
                </Link>
            </div>
            <Tabs value={value} onChange={handleTabs}>
                <Tab label="Item One" />
                <Tab label="Item Two" />
                <Tab label="Item Three" />
            </Tabs>

            <TabPanel value={value} index={0}>
                <ExportList />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <ExportList />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <ExportList />
            </TabPanel>
        </div>
    );
}

function TabPanel(props) {
    const { children, value, index } = props;
    return (
        <div>{value === index && (<h1>{children}</h1>)}</div>
    )
}