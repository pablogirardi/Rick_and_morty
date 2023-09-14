import Card from "../Card/Card";
import style from "./Cards.module.css";

export default function Cards({ characters, onClose }) {
  return (
    <div className={style.container}>
      {characters.map((character) => {
        return (
          <Card
            key={character.id}
            id={character.id}
            name={character.name}
            species={character.species}
            gender={character.gender}
            status={character.status}
            origin={character.origin?.name}
            image={character.image}
            onClose={onClose}
          />
        );
      })}
    </div>
  );
}
