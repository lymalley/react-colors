import buzzwords from 'buzzwords'
import {map} from 'ramda'
import uuid from 'uuid'

console.log({buzzwords})

const createWord = b => ({
  id: uuid.v4(),
  name: b,
  value: null
})

const words = map(createWord, buzzwords)

export default words