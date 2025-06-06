import Dashboard from "./components/Dashboard"
import { getInitialDocumentText } from "./components/utils"

export default function DocumentSearchPage() {
    const initialText = getInitialDocumentText()
  return (
    <>
      <div>Hello World!</div>
      <Dashboard initialText={initialText} />
    </>
  )
}
