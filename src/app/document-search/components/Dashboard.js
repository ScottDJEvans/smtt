"use client"

import { MOCK_REGEX_VALUES } from "../mock-data"
import MainDocumentArea from "./MainDocumentArea"
import Sidebar from "./Sidebar"

const Dashboard = ({ regexData = MOCK_REGEX_VALUES }) => {
  return (
    <div>
      <Sidebar regexData={regexData}/>
      <MainDocumentArea />
    </div>
  )
}

export default Dashboard
