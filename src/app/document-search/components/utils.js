import { loremIpsum } from "lorem-ipsum"

export const getInitialDocumentText = () => {
  return loremIpsum({ count: 20 })
}

export function searchTextWithRegex(input, text) {
  try {
    const regex = new RegExp(input, "g")
    const results = text.match(regex)
    return results
  } catch (e) {
    console.log("Error: ", e)
  }
}

export function getRegexResults(input, text) {
  if (Array.isArray(input)) {
    return input.map((regex) => {
      return searchTextWithRegex(regex.value, text)
    })
  } else {
    return searchTextWithRegex(input, text)
  }
}
