import {
  Card,
  CardContent,
  Checkbox,
  Divider,
  Rating,
  Slider,
} from "@mui/material";
import React, { useState } from "react";
import { IoIosCheckboxOutline } from "react-icons/io";
import { FaRegSquare } from "react-icons/fa";

const Filter = () => {
  const [checkList, setCheckList] = useState([]);
  const [rateValue, setRateValue] = useState(2);
  const category = [
    { name: "Mobile", value: "mobile" },
    { name: "Laptop", value: "laptop" },
    { name: "TV", value: "TV" },
    { name: "Washing Machine", value: "washing-machine" },
    { name: "Home Apppliance", value: "home-appliance" },
  ];
  const handleChange = (event, listValue) => {
    if (checkList.includes(listValue)) {
      const newList = checkList.filter((list) => list !== listValue);
      setCheckList([...newList]);
    } else {
      checkList.push(listValue);
      setCheckList([...checkList]);
    }
  };

  return (
    <div>
      <Card className="mx-4">
        <CardContent>
          <h2 className="text-2xl">Filter</h2>{" "}
          <Divider variant="middle" className="!my-3" />
          {category.map((list) => (
            <div key={list.name} className="flex items-center">
              <Checkbox
                checked={checkList.includes(list.value) ? true : false}
                onChange={(e) => handleChange(e, list.value)}
              />
              <p className="ml-2">{list.name}</p>
            </div>
          ))}
          <Divider variant="middle" className="!my-3" />
          <p>Price Range</p>
          <div className=" flex justify-center">
            <Slider
              className="!w-[200px]"
              defaultValue={50}
              onChange={(value) => console.log(value.target.value)}
              valueLabelDisplay="auto"
              step={25}
              marks
              min={10}
              max={100}
            />
          </div>
          <Divider variant="middle" className="!my-3" />
          <div className="">
            <p>Filter By Star</p>
            <Rating
              name="simple-controlled"
              value={rateValue}
              precision={0.5}
              onChange={(event, newValue) => {
                setRateValue(newValue);
              }}
            />
          </div>
          <Divider variant="middle" className="!my-3" />
        </CardContent>
      </Card>
    </div>
  );
};

export default Filter;
