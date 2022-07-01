import _ from 'lodash'

const filterUselessData = (schemaArr) => {
  const currentSchema = schemaArr[0] || {}
  const finalSchema = _.cloneDeep(currentSchema)

  const handleFilter = (node) => {
    const { currentConfigValue = {}} = node
    const options = {}
    Object.keys(currentConfigValue).forEach(key => {
      if (isBelongTo(key)) {
        options[key] = currentConfigValue[key]
      } else {
        node[key] = currentConfigValue[key]
      }
    })
    node.options = options
    node.config && delete node.config
    node.currentConfigValue && delete node.currentConfigValue
    if (node.children && Array.isArray(node.children) && node.children.length > 0) {
      node.children.forEach(childNode => handleFilter(childNode))
    }
  }
  handleFilter(finalSchema)
  return finalSchema
}

const isBelongTo = (key) => {
  return !['name', 'isCanvas'].includes(key)
}

export {
  filterUselessData
}
