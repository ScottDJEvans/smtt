"use client"

import { useEffect, useState } from "react"
import { MOCK_REGEX_VALUES } from "../mock-data"
import MainDocumentArea from "./MainDocumentArea"
import Sidebar from "./Sidebar"
import { getRegexResults } from "./utils"
import { REGEX_ACTIONS, REGEX_STATUS } from "./constants"

const Dashboard = ({ savedRegexData = MOCK_REGEX_VALUES, initialText }) => {
  const [document, setDocument] = useState(initialText)
  const [regexData, setRegexData] = useState(savedRegexData)
  const [results, setResults] = useState(
    getRegexResults(regexData, initialText)
  )

  const refetchRegexResults = (regex) => {
    const results = getRegexResults(regex, document)
    setResults(results)
  }

  const handleSidebarModeSelection = (regex) => {
    refetchRegexResults(regex)
  }

  useEffect(() => {
    refetchRegexResults(regexData)
  }, [regexData, document])

  const handleRegexChange = (action, value, newValue) => {
    let updated = [...regexData]

    switch(action) {
      case REGEX_ACTIONS.ADD:
        updated.push({
          value: newValue,
          status: REGEX_STATUS.PENDING
        })
        break;
      case REGEX_ACTIONS.EDIT:
        updated = updated.map((regex) => {
          return regex.value === value ? { ...regex, value: newValue } : regex
        })
        break;
      case REGEX_ACTIONS.DELETE:
        updated = updated.filter((regex) => regex.value !== value)
        break;
    }
    setRegexData(updated)
  }

  const handleStatusChange = (status, selectedRegexValue) => {
    let updated = [...regexData]
    updated = updated.map((regex) => {
      return regex.value === selectedRegexValue
        ? { ...regex, status: status }
        : regex
    })
    setRegexData(updated)
  }

  return (
    <div className="flex">
      <Sidebar
        regexData={regexData}
        handleModeChange={(regex) => handleSidebarModeSelection(regex)}
        handleRegexChange={(action, value, newValue) =>
          handleRegexChange(action, value, newValue)
        }
        handleStatusChange={(status, selectedRegexValue) => handleStatusChange(status, selectedRegexValue)}
      />
      <MainDocumentArea initialText={initialText} matches={results} handleChange={(e) => setDocument(e.target.value)} />
    </div>
  )
}

export default Dashboard
