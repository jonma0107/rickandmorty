function Character({character}) {
  return (
    <div className="text-center p-5">
      <h3>{character.name}</h3>
      <img className="img-fluid rounded-pill p-3" src={character.image} alt={character.image} />
      <p>Origen: {character.origin.name}</p>
      <p>{character.episode.id}</p>
      <p>Especie: {character.species}</p>
      <p>Estado: {character.status}</p>
      <p>Género: {character.gender}</p>
    </div>
  );
}

export default Character
