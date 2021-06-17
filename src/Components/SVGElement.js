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
import Mizoram from "./svgs/Mizoram";
import Nagaland from "./svgs/Nagaland";
import Puducherry from "./svgs/Puducherry";
import Uttar_Pradesh from "./svgs/Uttar_Pradesh";
import Uttarakhand from "./svgs/Uttarakhand";

function SVGElement(props) {
  const stateName = props.state;
  // stateName = stateName.replaceAll(" ", "_");
  // console.log(stateName);
  const setDistrictSelected = props.updateDistrict;

  switch (stateName) {
    case "Andaman And Nicobar Islands":
      return (
        <Andaman_And_Nicobar_Islands
          updateDistrict={setDistrictSelected}
          district={props.district}
        />
      );
    case "Arunachal Pradesh":
      return (
        <Arunachal_Pradesh
          updateDistrict={setDistrictSelected}
          district={props.district}
        />
      );
    case "Andhra Pradesh":
      return (
        <Andhra_Pradesh
          updateDistrict={setDistrictSelected}
          district={props.district}
        />
      );
    case "Chandigarh":
      return (
        <Chandigarh
          updateDistrict={setDistrictSelected}
          district={props.district}
        />
      );
    case "Daman And Diu":
      return (
        <Daman_And_Diu
          updateDistrict={setDistrictSelected}
          district={props.district}
        />
      );
    case "Dadra And Nagar Haveli":
      return (
        <Dadra_And_Nagar_Haveli
          updateDistrict={setDistrictSelected}
          district={props.district}
        />
      );
    case "Goa":
      return (
        <Goa updateDistrict={setDistrictSelected} district={props.district} />
      );
    case "Haryana":
      return (
        <Haryana
          updateDistrict={setDistrictSelected}
          district={props.district}
        />
      );
    case "Himachal Pradesh":
      return (
        <Himachal_Pradesh
          updateDistrict={setDistrictSelected}
          district={props.district}
        />
      );
    case "Madhya Pradesh":
      return (
        <Madhya_Pradesh
          updateDistrict={setDistrictSelected}
          district={props.district}
        />
      );
    case "Manipur":
      return (
        <Manipur
          updateDistrict={setDistrictSelected}
          district={props.district}
        />
      );
    case "Meghalaya":
      return (
        <Meghalaya
          updateDistrict={setDistrictSelected}
          district={props.district}
        />
      );
    case "Mizoram":
      return (
        <Mizoram
          updateDistrict={setDistrictSelected}
          district={props.district}
        />
      );
    case "Nagaland":
      return (
        <Nagaland
          updateDistrict={setDistrictSelected}
          district={props.district}
        />
      );
    case "Puducherry":
      return (
        <Puducherry
          updateDistrict={setDistrictSelected}
          district={props.district}
        />
      );
    case "Uttar Pradesh":
      return (
        <Uttar_Pradesh
          updateDistrict={setDistrictSelected}
          district={props.district}
        />
      );
    case "Uttarakhand":
      return (
        <Uttarakhand
          updateDistrict={setDistrictSelected}
          district={props.district}
        />
      );
  }
  return <></>;
}

export default SVGElement;
