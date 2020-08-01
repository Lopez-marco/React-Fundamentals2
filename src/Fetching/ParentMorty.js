import React, { useState, useEffect } from "react";
import CardMorty from "./CardMorty";
import {
    Card,
    Button,
    CardImg,
    CardTitle,
    CardText,
    CardColumns,
    CardSubtitle,
    CardBody,
} from "reactstrap";

const ParentMorty = () => {
    const fetchURL = "https://rickandmortyapi.com/api/character/";
    const [results, setResults] = useState([]);

    useEffect(() => {
        handleClick();
    }, []);

    function handleClick() {
        fetch(fetchURL)
            .then((res) => res.json())
            .then((jsonData) => {
                console.log(jsonData.results);
                setResults(jsonData.results);
            });
    }

    function displayCards() {
        return results.map((result, index) => <CardMorty key={index} character={result} />)
    }

    return (
        <div>
            {/* <button onClick={handleClick}>Click Here</button> */}
            <CardColumns>
                {displayCards()}
            </CardColumns>
        </div>
    );
};

export default ParentMorty;
