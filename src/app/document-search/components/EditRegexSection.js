import { Button } from "@/components/ui/button"
import PropTypes from "prop-types"
import { useState } from "react"
import { REGEX_ACTIONS } from "./constants"

const EditRegexSection = ({ options, handleRegexChange }) => {
  const [isEditing, setIsEditing] = useState(null)
  const [newRegexValue, setNewRegexValue] = useState("")

  const handleCloseEdit = () => {
    setIsEditing(null)
    setNewRegexValue("")
  }

  const handleSaveClick = () => {
    const action = isEditing === "new" ? REGEX_ACTIONS.ADD : REGEX_ACTIONS.EDIT
    handleRegexChange(action, isEditing, newRegexValue)
    handleCloseEdit()
  }

  const handleDeleteClick = () => {
    handleRegexChange(REGEX_ACTIONS.DELETE, isEditing)
    handleCloseEdit()
  }

  const renderEditMode = (value) => {
    return (
      <div className="items-center my-2 max-w-[80%]">
        <p>Editing {value}</p>
        <input
          className="max-w-[120px] my-2 bg-white rounded"
          defaultValue={value}
          onChange={(e) => setNewRegexValue(e.target.value)}
        />
        <Button className="my-2" onClick={() => handleSaveClick()}>
          Save
        </Button>
        <Button className="bg-destructive" onClick={() => handleDeleteClick()}>
          Delete
        </Button>
      </div>
    )
  }

  const renderCancelButton = () => {
    if (!isEditing) return null
    return <Button onClick={() => handleCloseEdit()}>Cancel</Button>
  }

  const renderAddButton = () => {
    if (isEditing) return null
    return <Button onClick={() => setIsEditing("new")}>Add</Button>
  }

  const renderData = () => {
    return options.map((data) => {
      return (
        <div className="flex flex-col w-full items-center">
          {!isEditing && (
            <Button
              onClick={() => setIsEditing(data.value)}
              className="bg-tertiary max-w-[80%]"
            >
              {data.value}
            </Button>
          )}
          {isEditing === data.value && renderEditMode(data.value)}
        </div>
      )
    })
  }
  return (
    <div className="flex flex-col items-center text-center m-4 max-w-[150px]">
      <p>Editing expressions</p>
      {isEditing === "new" && renderEditMode("")}
      {renderData()}
      {renderAddButton()}
      {isEditing && renderCancelButton()}
    </div>
  )
}

export default EditRegexSection

EditRegexSection.propTypes = {
  options: PropTypes.array,
  handleRegexChange: PropTypes.func,
}
