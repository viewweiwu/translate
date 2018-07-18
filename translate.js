const translate = (obj = {}) => {
  let result = {}
  for (let key in obj) {
    let newKey = key.replace(/([A-Z])/g, '_$1').toLowerCase()
    newKey.startsWith('_') && (newKey = newKey.slice(1))
    if (typeof obj[key] === 'object') {
      result[newKey] = translate(obj[key])
    } else {
      result[newKey] = obj[key]
    }
  }
  return result
}

export default translate
  