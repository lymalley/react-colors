import starWarNames from 'starwars-names'
import { map } from 'ramda'
import uuid from 'uuid'

const createStarWarName = starwarscharactername => ({
  id: uuid.v4(),
  name: starwarscharactername,
  value: null 
})

const starwarsnames = map(createStarWarName, starWarNames.all)

export default starwarsnames
