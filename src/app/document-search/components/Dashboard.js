"use client"

import { useState } from "react"
import { MOCK_REGEX_VALUES } from "../mock-data"
import MainDocumentArea from "./MainDocumentArea"
import Sidebar from "./Sidebar"
import { getRegexResults } from "./utils"

const Dashboard = ({ regexData = MOCK_REGEX_VALUES, initialText }) => {
  const [document, setDocument] = useState(initialText)
  const [results, setResults] = useState(
    getRegexResults(regexData, initialText)
  )
  const handleSidebarModeSelection = (regex) => {
    const results = getRegexResults(regex, document)
    setResults(results)
  }

  return (
    <div className="flex">
      <Sidebar
        regexData={regexData}
        handleModeChange={(regex) => handleSidebarModeSelection(regex)}
      />
      <MainDocumentArea initialText={initialText} matches={results} />
    </div>
  )
}

export default Dashboard
