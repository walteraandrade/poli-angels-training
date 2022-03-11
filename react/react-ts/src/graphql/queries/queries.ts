import { gql } from "graphql-request"

const rickAndMortyCharacters = gql`
  query getCharacter {
  characters{
    results {
      name
      image
      status
      species
    }
  }
}
`

export const queries = {
  rickAndMortyCharacters
}