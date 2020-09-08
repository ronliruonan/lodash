import arrayLikeKeys from './.internal/arrayLikeKeys.js'
import getAllKeys from './.internal/getAllKeys.js'
import keys from './keys'

function a() {
  const result = arrayLikeKeys(arguments)
  console.log('arrayLikeKeys()')
  console.log(result)

  console.log('Object.keys()')
  console.log(Object.keys(Object(arguments)))

  {
    const result = getAllKeys(arguments)
    console.log('getAllKeys()')
    console.log(result)
  }

  {
    const result = keys(arguments)
    console.log('keys()')
    console.log(result)
  }
}

a(1, 2, 4);