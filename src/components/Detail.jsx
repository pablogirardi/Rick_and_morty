import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Detail = ({id}) => {
    const [character, setCharacter] = useState({}); 

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => response.data)
        .then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);


    return(
        <div>
            <h1>
                Hola
            </h1>
        </div>

    );
}

export default Detail