"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import ApproveSection from "./ApproveSection"
import PropTypes from "prop-types"

const Sidebar = ({ regexData }) => {
  const [shouldShowApprovalSection, setShouldShowApprovalSection] =
    useState(false)
  return (
    <aside>
      <Button
        onClick={() => setShouldShowApprovalSection(!shouldShowApprovalSection)}
      >
        Switch Mode
      </Button>
      {shouldShowApprovalSection ? <ApproveSection options={regexData} /> : <div>Edit Placeholder</div>}
    </aside>
  )
}

export default Sidebar


Sidebar.propTypes = {
    regexData: PropTypes.array
}