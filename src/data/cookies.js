import fortuneCookies from 'fortune-cookie'
import uuid from 'uuid'
import { map } from 'ramda'

const createCookie = c => ({
  id: uuid.v4(),
  name: c,
  value: null
})

const cookies = map(createCookie, fortuneCookies)

export default cookies