export const CharCard = ({character}) => {

    return (

        <div className={`character-card ${character.status}`}>
            <h2>{character.name}</h2>
            <details>
                <summary>More Info</summary>
                <ul>
                <li>Name: {character.name}</li>
                <li>Gender: {character.gender}</li>
                <li>Species: {character.species}</li>
                {character.type === '' ? (
                    <li>Type: ?</li>
                ) : <li>Type: {character.type}</li>}
                <li>Status: {character.status}</li>
                </ul>
            </details>
            
            <img src={character.image} alt="character" />
        </div>
    
    )

}