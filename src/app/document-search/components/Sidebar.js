"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import ApproveSection from "./ApproveSection"
import PropTypes from "prop-types"

const Sidebar = ({ regexData }) => {
  const [shouldShowApprovalSection, setShouldShowApprovalSection] =
    useState(false)
  return (
    <aside className="w-64 mr-6 rounded min-h-full bg-gray-300 block top-0 left-0 ">
      <div className="mt-2 flex place-self-center">
        <Button
          onClick={() =>
            setShouldShowApprovalSection(!shouldShowApprovalSection)
          }
        >
          Switch Mode
        </Button>
      </div>
      {shouldShowApprovalSection ? (
        <ApproveSection options={regexData} />
      ) : (
        <div>Edit Placeholder</div>
      )}
    </aside>
  )
}

export default Sidebar

Sidebar.propTypes = {
  regexData: PropTypes.array,
}
