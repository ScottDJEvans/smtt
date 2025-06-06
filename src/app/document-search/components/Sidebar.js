"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import ApproveSection from "./ApproveSection"
import EditRegexSection from "./EditRegexSection"
import PropTypes from "prop-types"

const Sidebar = ({
  regexData,
  handleModeChange,
  handleRegexChange,
  handleStatusChange,
}) => {
  const [shouldShowApprovalSection, setShouldShowApprovalSection] =
    useState(false)
  return (
    <aside className="w-64 mr-6 rounded min-h-full bg-gray-300 block top-0 left-0 ">
      <div className="mt-2 flex place-self-center">
        <Button
          onClick={() => {
            setShouldShowApprovalSection(!shouldShowApprovalSection)
            handleModeChange(regexData)
          }}
        >
          Switch Mode
        </Button>
      </div>
      {shouldShowApprovalSection ? (
        <ApproveSection
          options={regexData}
          handleSelection={(selectedRegex) => handleModeChange(selectedRegex)}
          handleClick={(status, selectedRegexValue) => handleStatusChange(status, selectedRegexValue)}
        />
      ) : (
        <EditRegexSection
          options={regexData}
          handleRegexChange={(action, value, newValue) =>
            handleRegexChange(action, value, newValue)
          }
        />
      )}
    </aside>
  )
}

export default Sidebar

Sidebar.propTypes = {
  regexData: PropTypes.array,
  handleModeChange: PropTypes.func,
  handleRegexChange: PropTypes.func,
}
