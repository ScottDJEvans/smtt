import { loremIpsum } from "lorem-ipsum"

export const getInitialDocumentText = () => {
  return loremIpsum({ count: 20 })
}

export function getRegexTextSearchResults(input, text) {
    try {
      const regex = new RegExp(input, "g")
      const results = text.match(regex)
      return results
    } catch (e) {
      console.log("Error: ", e)
    }
}