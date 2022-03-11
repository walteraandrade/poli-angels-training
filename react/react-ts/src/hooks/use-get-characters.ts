import React from "react"
import { client } from "../client"
import { queries } from "../graphql"
import { CharacterModel } from "../models"

export const useGetCharacters = () => {
  const [characters, setCharacters] = React.useState<CharacterModel[]>()

  const getCharacters = React.useCallback(
    async () => {
      await client.request(queries.rickAndMortyCharacters)
            .then((response) => setCharacters(response.characters.results))
            .catch((error) => console.log(error))
    }
  , [])

  React.useEffect(() => {
    getCharacters()
  }, [getCharacters])

  return characters
}