import React, { useState } from "react";
import ProductNavbar from "../../components/ProductNavbar";
import Filter from "../../components/Filter";
import ProductData from "../../components/ProductData";

const Dashboard = () => {
  const [productList, setProductList] = useState("allProduct");
  return (
    <div className="mb-10">
      <ProductNavbar setProductList={setProductList} />
      <div className="grid grid-cols-6 gap-4 mt-5">
        <div className="col-span-1">
          <Filter />
        </div>
        <div className="col-span-5 border-2 mr-4">
          <ProductData productList={productList} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
