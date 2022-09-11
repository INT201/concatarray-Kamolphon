const { template } = require('@babel/core')

function concatArray(array1, array2) {
  if ( (array1 === null || array1 === undefined) && (array2 === undefined || array2 === null) ) {
      return undefined     
  }

  if (array1 === [] && array2 === []) {
    return []
  }

  if (array1 === [] || array1 === null || array1 === undefined) {
    return array2
  }

  if (array2 === [] || array2 === null || array2 === undefined) {
    return array1
  }

  else{
    return array1.concat(array2)
  }
}
module.exports = concatArray
