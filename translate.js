const translate = (obj = {}) => {
  if (Array.isArray(obj)) {
    return obj.map(item => translate(item))
  } else if (!isObject(obj)) {
    return obj
  }
  let result = {}
  for (let key in obj) {
    let newKey = getNewKey(key)
    let value = obj[key]

    if (Array.isArray(value) || isObject(value)) {
      result[newKey] = translate(value)
    } else {
      result[newKey] = value
    }
  }
  return result
}

const getNewKey = (key) => {
  let newKey = key.replace(/([A-Z])/g, '_$1').toLowerCase()
  newKey.startsWith('_') && (newKey = newKey.slice(1))
  return newKey
}

const isObject = (obj) => {
  return Object.prototype.toString.call(obj) === '[object Object]'
}

export default translate
  