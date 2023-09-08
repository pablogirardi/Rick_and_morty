import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Detail = ({}) => {
    const [character, setCharacter] = useState({}); 
    const id = useParams().id;

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);


    return(
        // RENDERIZADO CONDICIONAL
        <div>
            
                 {
                 /*1{character && <div>
                         <h2>{character.name}</h2>
                         <h2>{character.status}</h2>
                         }
                 2. character ? <h2>{character.name}</h2> :null */
                 }
                 <h2>{character?.name}</h2>
                 <h2>{character?.status}</h2>
                 <h2>{character?.species}</h2>
                 <h2>{character?.gender}</h2>
                 <h2>{character?.origin?.name}</h2>
                 <img src={character?.image} alt={character?.name} />
            
        </div>

    );
}

export default Detail