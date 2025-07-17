import React from "react";
import { useSelector } from "react-redux";

const ProductNavbar = ({ setProductList }) => {
  const productList = [
    { name: "All", value: "allProduct" },
    { name: "Mobile", value: "mobileData" },
    { name: "Laptop", value: "laptopData" },
    { name: "TV", value: "tvData" },
    { name: "Washing Mashine", value: "washingMachineData" },
    { name: "Home Appliance", value: "homeAppliance" },
  ];

  return (
    <div className="flex justify-center">
      <div className="flex justify-evenly py-3 rounded-full bg-black text-white mt-5 w-[800px] ">
        {productList?.map((list, i) => (
          <div
            key={i}
            className="hover:text-blue-400 cursor-pointer"
            onClick={() => setProductList(list.value)}
          >
            {list.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductNavbar;
