export function capitalizeFirstLetter(word) {
  let firstLetter = word.charAt(0).toUpperCase()
  const remainingWord = word.substring(1)
  return firstLetter + remainingWord
}