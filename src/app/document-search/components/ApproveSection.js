"use client"

import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import PropTypes from "prop-types"
import { useState } from "react"
import { REGEX_STATUS } from "./constants"

const ApproveSection = ({ options, handleSelection, handleClick }) => {
  const [selectedRegex, setSelectedRegex] = useState(null)

    const handleOptionSelect = (value) => {
        handleSelection(value)
        setSelectedRegex(value)
    }

  const renderDropdown = () => {
    return (
      <Select onValueChange={(option) => handleOptionSelect(option)}>
        <SelectTrigger>
          <SelectValue placeholder="Select Regex" />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem value={option.value}>{option.value}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    )
  }
  const renderCTAs = () => {
    if (!selectedRegex) return null
    return (
      <div className="flex flex-col">
        <Button className="cursor-pointer my-4" onClick={() => handleClick(REGEX_STATUS.APPROVED, selectedRegex)}>Approve</Button>
        <Button className="cursor-pointer" onClick={() => handleClick(REGEX_STATUS.REJECTED, selectedRegex)}>Reject</Button>
      </div>
    )
  }

  return (
    <div className="m-2 flex items-center flex-col">
      {renderDropdown()}
      <p>{selectedRegex}</p>
      {renderCTAs()}
    </div>
  )
}

export default ApproveSection

ApproveSection.propTypes = {
  options: PropTypes.array.isRequired,
  handleSelection: PropTypes.func,
  handleClick: PropTypes.func
}
