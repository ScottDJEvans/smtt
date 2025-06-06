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

const ApproveSection = ({ options, handleSelection }) => {
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
      <div>
        <Button>Approve</Button>
        <Button>Reject</Button>
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
}
