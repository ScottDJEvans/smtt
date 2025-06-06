import { loremIpsum } from "lorem-ipsum"

export const getInitialDocumentText = () => {
  return loremIpsum({ count: 20 })
}
