"use client"

import { MOCK_REGEX_VALUES } from "../mock-data"
import MainDocumentArea from "./MainDocumentArea"
import Sidebar from "./Sidebar"
import { getInitialDocumentText } from "./utils"


const Dashboard = ({ regexData = MOCK_REGEX_VALUES }) => {
    const initialText = getInitialDocumentText()
  return (
    <div>
      <Sidebar regexData={regexData}/>
      <MainDocumentArea initialText={initialText} />
    </div>
  )
}

export default Dashboard
