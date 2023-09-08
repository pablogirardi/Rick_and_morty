import Card from "./Card";

export default function Cards({ characters, onClose }) {
  return (
    <div>
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
