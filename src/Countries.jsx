import React, {useEffect, useState} from 'react';
import Country from "./Country";
const countries = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [searchQuery, setSearchQuery] = useState("");
    const countriesStyle = {
        "display": "flex",
        "flexWrap": "wrap",
        "justifyContent": "center",
        "alignItems": "center",
    }
    const countryStyle = {
        "textAlign" : "center",
        "border": "1px solid grey",
        "margin": "10px",
        "flexBasis": "10%"
    };
    const searchStyle = {
        "margin": "20px",
        "width": "50%",
        "padding": "10px",
        "position": "relative",
        "left": "20%",
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [countries, setCountries]= useState([]);
    // eslint-disable-next-line react-hooks/rules-of-hooks,react-hooks/exhaustive-deps
    const handleSearch = (searchQuery) => {
        if(searchQuery === "" || searchQuery === null) fetchData();
        const filtered = countries.filter((country) => {
            return country.name.common.toLowerCase().includes(searchQuery.toLowerCase());
        });
        setCountries(filtered);
    }
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
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(async() => {
        await fetchData();
    }, []);

    return (
        <>
        <input style={searchStyle} type="search" name="search" placeholder="Search for countries" onChange={(e) => {
            setSearchQuery(e.target.value)
            handleSearch(e.target.value)
        }}
        />
        <div style={countriesStyle}>
            {countries.map((country)=>{
                return (
                    // <Country name={country.name} flags={country.flags}/>

                        <div style={countryStyle} className="countryCard">
                            <img src={country.flags.png} alt={country.name.common} width={100} height={100} style = {{"margin":"5px"}} />
                            <h5 style = {{"margin":"3px"}} >{country.name.common}</h5>
                        </div>

                )
            })}
        </div>
        </>
    )

}

export default countries;