function _merge(left, right) {
  let results = []
  let i = 0
  let j = 0
  while (i < left.length && j < right.length) {
    if (right[j].time > left[i].time) {
      results.push(left[i])
      i++
    } else {
      results.push(right[j])
      j++
    }
  }
  while (i < left.length) {
    results.push(left[i])
    i++
  }
  while (j < right.length) {
    results.push(right[j])
    j++
  }
  return results
}

function mergeSort(arry) {
  if (arry.length <= 1) return arry
  const mid = Math.floor(arry.length / 2)
  const left = mergeSort(arry.slice(0, mid))
  const right = mergeSort(arry.slice(mid))
  return _merge(left, right)
}

function sortedUniqueBy(array, iteratee) {
  if (!(array != null && array.length)) return []
  let seen
  let index = -1
  let resIndex = 0

  const result = []

  while (++index < array.length) {
    const value = array[index]
    const computed = iteratee(value)

    if (!index || computed !== seen) {
      seen = computed
      result[resIndex++] = value
    }
  }
  return result
}

function findHighLow(arr) {
  let highest = arr[0],
    lowest = arr[0]

  for (let i = 1, len = arr.length; i < len; i++) {
    let temp = arr[i]
    lowest = temp.low < lowest.low ? temp : lowest
    highest = temp.high > highest.high ? temp : highest
  }

  return { lowest, highest }
}

export { mergeSort, findHighLow, sortedUniqueBy }
