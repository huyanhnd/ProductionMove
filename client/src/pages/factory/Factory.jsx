import FactoryList from "./FactoryList"
import GroupedSelect from "./GroupedSelect"
import "./factory.css"

export default function Factory() {
    return (
    <div className="factoryPage">
        <GroupedSelect />
        <FactoryList />
    </div>
    )
}