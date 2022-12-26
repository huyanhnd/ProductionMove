import FeaturedInfo from "./FeaturedInfo";
import "./home.css";
import { userData } from "../../../dummyData";
import { useDispatch, useSelector } from "react-redux";
import { getProductLines } from "../../../api/productLineApi";
import { useEffect } from "react";
import { getProducts } from "../../../api/productsApi";
import ChartBar from "../../../components/chart/ChartBar";
import { getFactory } from "../../../api/factoryApi";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    getProductLines(dispatch);
    getProducts(dispatch)
    getFactory(dispatch, '00','000','0000','')
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
  const status = ['factory']

  /**
   * Thống kê theo nhà máy
  */
  const factories = useSelector((state) => state.factory.factories);
  const factoryData = factories.map((factory, index) => {
    const quantity = products.filter((product) => {
      return product.factoryId == factory.id
    })
    return { name: factory.name, "Quantity of product": quantity.length }
  })

  /**
   * Thống kê theo cửa hàng
  */
  const stores = useSelector((state) => state.store.stores);
  const storeData = factories.map((store, index) => {
    const quantity = products.filter((product) => {
      return product.storeId == store.id
    })
    return { name: store.name, "Quantity of Store": quantity.length }
  })

  /**
   * Thống kê theo cửa hàng
  */

  return (
    <div className="home">
      <FeaturedInfo />
      {/* Tổng sp trên toàn quốc */}
      <ChartBar data={productData} title="All of products" grid dataKey="Quantity" />
      {/* Tổng sp theo trạng thái */}
      {/* Tổng sp theo nhà máy */}
      <ChartBar data={factoryData} title="Products by Factory" grid dataKey="Quantity of product" />
      {/* Tổng sp theo Đại lý phân phối */}
      {/* Tổng sp theo TT bảo hành */}
    </div>
  );
}
