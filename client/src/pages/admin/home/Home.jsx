import "./home.css";
import { products_, userData } from "../../../dummyData";
import { useDispatch, useSelector } from "react-redux";
import { getProductLines } from "../../../api/productLineApi";
import { useEffect } from "react";
import { getProducts } from "../../../api/productsApi";
import ChartBar from "../../../components/chart/ChartBar";
import { getFactory } from "../../../api/factoryApi";
import FeaturedInfo from "../../../components/featuredInfo/FeaturedInfo";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    getProductLines(dispatch);
    getProducts(dispatch)
    getFactory(dispatch, '00', '000', '0000', '')
  }, [dispatch]);
  const products = useSelector((state) => state.product.products);
  /**
   * Tổng số sản phẩm
   */
  const productlines = useSelector((state) => state.productline.productlines);
  const productData = productlines.map((productline, index) => {
    const quantity = products.filter((product) => {
      const code = product.code.split('-')[0]
      return code == productline.code
    })
    return { name: productline.name, "Quantity": quantity.length }
  })

  /**
   * Thống kê theo trạng thái
  */
  const statuses = ['InFactory', 'InStore', 'Sold', 'InWarranty', 'Warranted', 'Error', 'OutOfWarranty']
  const statusData = statuses.map((status, index) => {
    const quantity = products.filter((product) => {
      return status == product.status
    })
    return { name: status, "Quantity of Product": quantity.length }
  })

  /**
   * Thống kê theo nhà máy
  */
  const factories = useSelector((state) => state.factory.factories);
  const factoryData = factories.map((factory, index) => {
    const quantity = products.filter((product) => {
      return product.factoryId == factory.id
    })
    return { name: factory.name, "Quantity of Product": quantity.length }
  })

  /**
   * Thống kê theo cửa hàng
  */
  const stores = useSelector((state) => state.store.stores);
  const storeData = stores.map((store, index) => {
    const quantity = products.filter((product) => {
      return product.storeId == store.id
    })
    return { name: store.name, "Quantity of Product": quantity.length }
  })

  /**
   * Thống kê theo cửa hàng
  */
  const serviceCenters = useSelector((state) => state.serviceCenter.serviceCenters);
  const serviceCenterData = serviceCenters.map((serviceCenter, index) => {
    const quantity = products.filter((product) => {
      return product.serviceCenterId == serviceCenter.id
    })
    return { name: serviceCenter.name, "Quantity of Product": quantity.length }
  })

  return (
    <div className="home">
      <div className="featureHome">
        <FeaturedInfo type='product' data={products_}/>
      </div>
      {/* Tổng sp trên toàn quốc */}
      <ChartBar data={productData} title="All of products" grid dataKey="Quantity" />
      {/* Tổng sp theo trạng thái */}
      <ChartBar data={statusData} title="All of products by Status" grid dataKey="Quantity of Product" />
      {/* Tổng sp theo nhà máy */}
      <ChartBar data={factoryData} title="Products by Factory" grid dataKey="Quantity of Product" />
      {/* Tổng sp theo Đại lý phân phối */}
      <ChartBar data={storeData} title="Products by Store" grid dataKey="Quantity of Product" />
      {/* Tổng sp theo TT bảo hành */}
      <ChartBar data={serviceCenterData} title="Products by Service center" grid dataKey="Quantity of Product" />
    </div>
  );
}
