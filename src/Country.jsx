import React from "react";

const countryStyle = {
    "textAlign" : "center",
    "border": "1px solid grey",
    "margin": "10px",
    "flexBasis": "10%"
};
 const Country = ({name,flags})=>{
     console.log(flags.alt, name.common)
     const alt = flags.alt ?? name.official;
     const nam = name.common ?? name.official;
    return (
            <div style={countryStyle}>
                <img src={flags.png} alt={alt} width={100} height={100} title={alt} style = {{"margin":"5px"}} />
                <h5 style = {{"margin":"3px"}} >{nam}</h5>
            </div>
    )
}
export default Country;