import styled from "@emotion/styled";
import { Button, Card, CardContent, Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCartProduct,
  setCartProduct,
} from "../../store/productDataSlice";

const ProductData = ({ productList }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productData);
  const productData = data[productList];
  const addedProductsToCart = useSelector(
    (state) => state.productData.cartProducts
  );

  const handleAddToCart = (e, selectedProductData) => {
    e.preventDefault();
    dispatch(setCartProduct(selectedProductData));
  };

  const handleRemovefromCart = (e, productId) => {
    e.preventDefault();
    dispatch(deleteCartProduct(productId));
  };

  return (
    <div>
      <Card className="bg-gray-700">
        <CardContent className="grid grid-cols-4 gap-2 h-screen overflow-y-scroll">
          {productData.map((data, i) => (
            <div
              key={data.id}
              className="text-white bg-gray-700 px-2 py-2 rounded-lg flex flex-wrap content-between"
            >
              <div>
                <img
                  src="https://img.freepik.com/free-photo/laptop-stone-surface-sea-background_1232-430.jpg?semt=ais_hybrid&w=740"
                  className=""
                />
                <p className="text-lg">{data.title}</p>
                <p className="text-sm">{data.description} </p>
                <div>
                  <Rating
                    name="simple-controlled"
                    value={data.rating}
                    precision={0.5}
                    readOnly
                    sx={{
                      "& .MuiRating-iconEmpty": {
                        color: "#ffffff",
                      },
                    }}
                  />
                </div>
                <p>Stock: {data.stock}</p>
                <p>Price: {data.price}</p>
              </div>
              {addedProductsToCart.some((obj) => obj.id === data.id) ? (
                <Button
                  variant="contained"
                  color="error"
                  className="!mt-3"
                  onClick={(e) => handleRemovefromCart(e, data.id)}
                >
                  Remove From Cart
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="success"
                  className="!mt-3"
                  onClick={(e) => handleAddToCart(e, data)}
                >
                  Add to Cart
                </Button>
              )}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductData;
