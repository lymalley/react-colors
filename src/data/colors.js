import csscolorsObj from 'css-color-names'
import uuid from 'uuid'
import {
  map,
  keys,
  prop
} from 'ramda'

// create color document
const createColor = k => ({
  id: uuid.v4(),
  name: k,
  value: prop(k, csscolorsObj)
})

const colors = map(createColor, keys(csscolorsObj))

export default colors