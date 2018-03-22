export const mapArrayToObject = array => {
  if (!array) {
    return
  }

  let object = {}
  array.map(element => (object[element.id] = element))
  return object
}
