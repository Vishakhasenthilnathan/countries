import React, {useEffect, useState} from 'react';
import Country from "./Country";
const countries = () => {
    const countriesStyle = {
        "display": "flex",
        "flexWrap": "wrap",
    }
    const countryStyle = {
        "textAlign" : "center",
        "border": "1px solid grey",
        "margin": "10px",
        "flexBasis": "10%"
    };
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [countries, setCountries]= useState([]);
    // eslint-disable-next-line react-hooks/rules-of-hooks,react-hooks/exhaustive-deps
    useEffect(async() => {
        const fetchData = async() =>{
            try{
                const response = await fetch("https://restcountries.com/v3.1/all");
                const data = await response.json();
                setCountries(data);
            }
            catch (error){
                console.log("Failed to fetch country")
                console.error("Failed to fetch countries",error);
            }
        };
        fetchData();
    }, []);

    return (
        <div style={countriesStyle}>
            {countries.map((country)=>{
                return (
                    // <Country name={country.name} flags={country.flags}/>

                        <div style={countryStyle}>
                            <img src={country.flags.png} alt={country.name.common} width={100} height={100} style = {{"margin":"5px"}} />
                            <h5 style = {{"margin":"3px"}} >{country.name.common}</h5>
                        </div>

                )
            })}
        </div>
    )

}

export default countries;