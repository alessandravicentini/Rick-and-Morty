import { CharCard } from "../CharCards"

export const Characters = ({characterList}) => {

    return (
        <>
        <h1>Rick and Morty Characters</h1>
        <div className="all-characters">
        {characterList.map((character) => <CharCard character={character} key={character.id}/>)}
        </div>
        </>
    )

}