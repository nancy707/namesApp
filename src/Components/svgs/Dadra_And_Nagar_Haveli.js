import React from "react";
// import "./components.css";

export default function Dadra_And_Nagar_Haveli(props) {
  let map = {};
  map["Dadra And Nagar Haveli"] = { value: 1, label: "Dadra And Nagar Haveli" };

  const districts = Object.keys(map);
  const changeColor = (district) => {
    if (district == "All Districts") {
      districts.forEach((d, i) => {
        const element = document.getElementsByClassName(d)[0];
        if (element != undefined) {
          element.style.fill = "#d0d0d0";
        }
      });
    } else {
      districts.forEach((d, i) => {
        if (d == district) {
          document.getElementsByClassName(d)[0].style.fill = "#2596be";
        } else {
          document.getElementsByClassName(d)[0].style.fill = "#d0d0d0";
        }
      });
    }
  };
  changeColor(props.district);

  return (
    <svg
      id="chart"
      // width="500px"
      // height="500px"
      viewBox="700 400 1000 600"
      //   preserveAspectRatio="xMidYMid meet"
      pointer-events="auto"
    >
      <g class="regions">
        <path
          className="Dadra And Nagar Haveli"
          d="M342.4692501258196,370.53255379909115L343.25193759436297,370.79439567615054L342.51273276295797,372.10357263890364ZM384.9517866129863,206.2317870493148L383.1255158530457,204.21361423217786L384.7343734272763,200.83506894261654L388.16950176144746,202.41469524994272L388.47388022143787,203.02897222316096L386.9954705586315,206.5827599737222L386.3867136386507,207.63565448431746ZM384.9083039758425,225.13470398651816L384.9952692501247,225.13470398651816L384.2995470558635,221.45152661526936L384.0386512330151,220.13599858970883L378.21197785606273,216.80307406941483L375.863915450429,212.81185682779596L379.25556114745814,208.20595715154286L386.6041268243589,213.03116803228613L386.6476094614991,212.89958149878976L388.34343231001367,209.1710604277182L393.64831404126926,208.90785347433257L393.21348766985466,204.7401069939524L394.9527931555094,205.39821014347535L394.77886260694504,208.42530148907008L398.170508303976,208.86398542777306L399.6489179667842,202.23918526573243L406.12783090085577,202.67795832821184L409.64992450931095,195.43739317856352L412.4328132863593,199.91358238116618L410.51957725213833,206.62663130491592L419.73789632611806,203.77486330833472L422.43381982888786,205.31046387868173L422.60775037745407,209.4342651081206L420.95541016607785,211.0573104215855L418.6508303975843,209.82906786727062L418.0855561147455,212.32936662776683L409.86733769501734,219.12738875063405L409.86733769501734,221.40767659328503L404.82335178661197,220.57451422313625L403.8667337695024,221.40767659328503L403.2579768495234,221.9338727057766L402.9101157523892,222.2408162556262L401.3882234524408,225.61699199297527L400.9099144438842,226.71307283070382L400.8664318067422,226.80075760193995L402.823150478107,228.02831802689843L403.6493205837942,234.69135919241216L403.6928032209362,234.9543442612635L405.43210870659277,235.5679673190666L406.47569199798454,232.10521919508165L413.17201811776613,236.22540697335353L413.8242576748871,233.11340141202072L417.9985908404633,231.31618389082223L416.7375943633615,226.9761263908349L417.0419728233519,225.92389858472188L420.8249622546555,227.15149417500743L422.86864620030065,225.22239328040905L424.65143432310106,228.2913602857143L427.216909914443,227.37070249240924L432,229.60653768768225L430.2172118772014,233.37640001529508L428.8257674886754,234.07771859423974L426.8255661801686,233.8585582615906L426.78208354303024,235.17349676264985L426.47770508303984,240.7832679226608L426.47770508303984,240.8709124635916L430.6520382486142,242.44847143790003L430.6520382486142,249.2836248682579L426.6951182687462,250.94836813601933L427.260392551585,256.38006243046266L422.43381982888786,255.37264307471332L417.0854554604921,249.23981461895892L412.47629592350313,251.56167191099257L410.91092098641093,248.53884214767277L403.6493205837942,246.7863410957866L402.0839456467038,246.69871342224542L402.04046300955997,247.35591488872114L401.5186713638632,253.44531428225127L399.9098137896308,253.13868267629823L392.03945646703687,244.2012197481663L393.30045294413685,241.17766638728244L393.69179667840945,240.25739542433348L393.90920986411584,239.6876900550801L391.47418218419625,238.06616306166325L390.30015098137665,243.06194471828076L389.7348766985415,243.23722054880454L387.2563663814817,243.54395084667885L385.6040261701055,241.79116504422063L385.2561650729749,241.17766638728244L387.64771011575067,230.87782216469577L384.7343734272763,229.82572843057733L384.7343734272763,229.29966801233468ZM389.5174635128333,223.77548778914297L390.56104680422686,223.77548778914297L392.08293910417524,223.73164109978097L392.51776547558984,221.9338727057766L392.77866129844006,220.8376205830482L392.86562657272407,220.57451422313625L392.21338701560126,220.53066294294058L388.8217413185703,220.22370221978554L387.99557121288126,220.13599858970883L387.99557121288126,221.0130235647075L387.1694011071977,221.80232452675727L387.99557121288126,222.5039082743474L387.99557121288126,223.77548778914297Z"
          style={{ cursor: "pointer" }}
          onClick={() => props.updateDistrict(map["Dadra And Nagar Haveli"])}
          transform="scale(3, 3)"
        >
          <title>Dadra And Nagar Haveli</title>
        </path>
      </g>
      <g class="district-borders" fill="none" stroke-width="1.5">
        <path
          d="M342.4692501258196,370.53255379909115L343.25193759436297,370.79439567615054L342.51273276295797,372.10357263890364L342.4692501258196,370.53255379909115
          M384.9517866129863,206.2317870493148L383.1255158530457,204.21361423217786L384.7343734272763,200.83506894261654L388.16950176144746,202.41469524994272L388.47388022143787,203.02897222316096L386.9954705586315,206.5827599737222L386.3867136386507,207.63565448431746L384.9517866129863,206.2317870493148
          M384.9083039758425,225.13470398651816L384.9952692501247,225.13470398651816L384.2995470558635,221.45152661526936L384.0386512330151,220.13599858970883L378.21197785606273,216.80307406941483L375.863915450429,212.81185682779596L379.25556114745814,208.20595715154286L386.6041268243589,213.03116803228613L386.6476094614991,212.89958149878976L388.34343231001367,209.1710604277182L393.64831404126926,208.90785347433257L393.21348766985466,204.7401069939524L394.9527931555094,205.39821014347535L394.77886260694504,208.42530148907008L398.170508303976,208.86398542777306L399.6489179667842,202.23918526573243L406.12783090085577,202.67795832821184L409.64992450931095,195.43739317856352L412.4328132863593,199.91358238116618L410.51957725213833,206.62663130491592L419.73789632611806,203.77486330833472L422.43381982888786,205.31046387868173L422.60775037745407,209.4342651081206L420.95541016607785,211.0573104215855L418.6508303975843,209.82906786727062L418.0855561147455,212.32936662776683L409.86733769501734,219.12738875063405L409.86733769501734,221.40767659328503L404.82335178661197,220.57451422313625L403.8667337695024,221.40767659328503L403.2579768495234,221.9338727057766L402.9101157523892,222.2408162556262L401.3882234524408,225.61699199297527L400.9099144438842,226.71307283070382L400.8664318067422,226.80075760193995L402.823150478107,228.02831802689843L403.6493205837942,234.69135919241216L403.6928032209362,234.9543442612635L405.43210870659277,235.5679673190666L406.47569199798454,232.10521919508165L413.17201811776613,236.22540697335353L413.8242576748871,233.11340141202072L417.9985908404633,231.31618389082223L416.7375943633615,226.9761263908349L417.0419728233519,225.92389858472188L420.8249622546555,227.15149417500743L422.86864620030065,225.22239328040905L424.65143432310106,228.2913602857143L427.216909914443,227.37070249240924L432,229.60653768768225L430.2172118772014,233.37640001529508L428.8257674886754,234.07771859423974L426.8255661801686,233.8585582615906L426.78208354303024,235.17349676264985L426.47770508303984,240.7832679226608L426.47770508303984,240.8709124635916L430.6520382486142,242.44847143790003L430.6520382486142,249.2836248682579L426.6951182687462,250.94836813601933L427.260392551585,256.38006243046266L422.43381982888786,255.37264307471332L417.0854554604921,249.23981461895892L412.47629592350313,251.56167191099257L410.91092098641093,248.53884214767277L403.6493205837942,246.7863410957866L402.0839456467038,246.69871342224542L402.04046300955997,247.35591488872114L401.5186713638632,253.44531428225127L399.9098137896308,253.13868267629823L392.03945646703687,244.2012197481663L393.30045294413685,241.17766638728244L393.69179667840945,240.25739542433348L393.90920986411584,239.6876900550801L391.47418218419625,238.06616306166325L390.30015098137665,243.06194471828076L389.7348766985415,243.23722054880454L387.2563663814817,243.54395084667885L385.6040261701055,241.79116504422063L385.2561650729749,241.17766638728244L387.64771011575067,230.87782216469577L384.7343734272763,229.82572843057733L384.7343734272763,229.29966801233468L384.9083039758425,225.13470398651816
          M389.5174635128333,223.77548778914297L390.56104680422686,223.77548778914297L392.08293910417524,223.73164109978097L392.51776547558984,221.9338727057766L392.77866129844006,220.8376205830482L392.86562657272407,220.57451422313625L392.21338701560126,220.53066294294058L388.8217413185703,220.22370221978554L387.99557121288126,220.13599858970883L387.99557121288126,221.0130235647075L387.1694011071977,221.80232452675727L387.99557121288126,222.5039082743474L387.99557121288126,223.77548778914297L389.5174635128333,223.77548778914297"
          stroke="rgb(255, 255, 255)"
        ></path>
      </g>
    </svg>
  );
}
