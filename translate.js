const translate = (obj = {}) => {
  let result = {}
  for (let key in obj) {
    let newKey = getNewKey(key)

    result[newKey] = isPlainObject(obj[key])
      ? translate(obj[key])
      :  obj[key]
  }
  return result
}

const getNewKey = (key) => {
  let newKey = key.replace(/([A-Z])/g, '_$1').toLowerCase()
  newKey.startsWith('_') && (newKey = newKey.slice(1))
  return newKey
}

export default translate
  