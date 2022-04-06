export const CharCard = ({character}) => {

    return (

        <>
        <div className={character.status === 'Alive' ? "character-card-alive" : "character-card-dead"}>
            <h2>{character.name}</h2>
            <details>
                <summary>More Info</summary>
                <ul>
                <li>{character.name}</li>
                <li>{character.gender}</li>
                <li>{character.species}</li>
                {character.type === '' ? (
                    <li>?</li>
                ) : <li>{character.type}</li>}
                <li>{character.status}</li>
                </ul>
            </details>
            
            <img src={character.image} alt="character" />
        </div>
        </>

    )

}