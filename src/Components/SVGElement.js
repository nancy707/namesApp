import React from "react";
import "./components.css";
import Andaman_And_Nicobar_Islands from "./svgs/Andaman_And_Nicobar_Islands";
import Arunachal_Pradesh from "./svgs/Arunachal_Pradesh";
import Andhra_Pradesh from "./svgs/Andhra_Pradesh";
import Chandigarh from "./svgs/Chandigarh";
import Daman_And_Diu from "./svgs/Daman_And_Diu";
import Dadra_And_Nagar_Haveli from "./svgs/Dadra_And_Nagar_Haveli";
import Goa from "./svgs/Goa";
import Haryana from "./svgs/Haryana";
import Himachal_Pradesh from "./svgs/Himachal_Pradesh";
import Madhya_Pradesh from "./svgs/Madhya_Pradesh";
import Manipur from "./svgs/Manipur";
import Meghalaya from "./svgs/Meghalaya";
import Nagaland from "./svgs/Nagaland";
import Puducherry from "./svgs/Puducherry";
import Uttar_Pradesh from "./svgs/Uttar_Pradesh";
import Uttarakhand from "./svgs/Uttarakhand";

import Mizoram from "./svgs/Mizoram2";

function SVGElement(props) {
  const stateName = props.state;
  // stateName = stateName.replaceAll(" ", "_");
  // console.log(stateName);
  const setDistrictSelected = props.updateDistrict;

  switch (stateName) {
    case "Andaman And Nicobar Islands":
      return (
        <Andaman_And_Nicobar_Islands updateDistrict={setDistrictSelected} />
      );
    case "Arunachal Pradesh":
      return <Arunachal_Pradesh updateDistrict={setDistrictSelected} />;
    case "Andhra Pradesh":
      return <Andhra_Pradesh updateDistrict={setDistrictSelected} />;
    case "Chandigarh":
      return <Chandigarh updateDistrict={setDistrictSelected} />;
    case "Daman And Diu":
      return <Daman_And_Diu updateDistrict={setDistrictSelected} />;
    case "Dadra And Nagar Haveli":
      return <Dadra_And_Nagar_Haveli updateDistrict={setDistrictSelected} />;
    case "Goa":
      return <Goa updateDistrict={setDistrictSelected} />;
    case "Haryana":
      return <Haryana updateDistrict={setDistrictSelected} />;
    case "Himachal Pradesh":
      return <Himachal_Pradesh updateDistrict={setDistrictSelected} />;
    case "Madhya Pradesh":
      return <Madhya_Pradesh updateDistrict={setDistrictSelected} />;
    case "Manipur":
      return <Manipur updateDistrict={setDistrictSelected} />;
    case "Meghalaya":
      return <Meghalaya updateDistrict={setDistrictSelected} />;
    case "Mizoram":
      return <Mizoram updateDistrict={setDistrictSelected} />;
    case "Nagaland":
      return <Nagaland updateDistrict={setDistrictSelected} />;
    case "Puducherry":
      return <Puducherry updateDistrict={setDistrictSelected} />;
    case "Uttar Pradesh":
      return <Uttar_Pradesh updateDistrict={setDistrictSelected} />;
    case "Uttarakhand":
      return <Uttarakhand updateDistrict={setDistrictSelected} />;
  }
  return <></>;
}

export default SVGElement;
