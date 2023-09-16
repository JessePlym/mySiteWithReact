export function capitalizeFirstLetter(word: string) {
  const firstLetter = word.charAt(0).toUpperCase()
  const remainingWord = word.substring(1)
  return firstLetter + remainingWord
}