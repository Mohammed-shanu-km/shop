import React from "react";
import Navbar from "../Navbar/Navbar";
import Projectsinglesectionone from "../Projectsinglesectionone/Projectsinglesectionone";
import Singlesecond from "../Singlesecondsection/Singlesecond";
import Footer from "../Footer/Footer";
import { useParams } from "react-router-dom";
import { categories } from "../../utils/data";
import { dateRangePicker } from "@nextui-org/react";
import Productdetaildslider from "../Productsdetailsilder/Productdetaildslider";
import Productdetailpage from "../Productdetailpage/Productdetailpage";

const Projectsingle = () => {
  const { id } = useParams();
  
  const data = categories?.find((item) => item?.url == id);
  return (
    <>
      <Navbar />
      <Projectsinglesectionone data={data} />
      {/* <Singlesecond data={data} /> */}
      <Productdetailpage/>
      <Footer />
    </>
  );
};

export default Projectsingle;
