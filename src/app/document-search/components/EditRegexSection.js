import { Button } from "@/components/ui/button"
import PropTypes from "prop-types"
import { useState } from "react"

const EditRegexSection = ({ options, handleEdit }) => {
  const [isEditing, setIsEditing] = useState(null)
  const [newRegexValue, setNewRegexValue] = useState("")

  const handleSaveClick = () => {
    handleEdit(newRegexValue, isEditing)
    setIsEditing(null)
    setNewRegexValue("")
  }

  const renderEditMode = (value) => {
    return (
      <div>
        <p>Editing {value}</p>
        <input
          defaultValue={value}
          onChange={(e) => setNewRegexValue(e.target.value)}
        />
        <Button onClick={() => handleSaveClick()}>Save</Button>
      </div>
    )
  }

  const renderData = () => {
    return options.map((data) => {
      return (
        <div>
          <Button
            onClick={() => setIsEditing(data.value)}
            className="bg-tertiary"
          >
            {data.value}
          </Button>
          {isEditing === data.value && renderEditMode(data.value)}
        </div>
      )
    })
  }
  return (
    <div className="flex flex-col items-center m-2">
        <p>Expressions</p>
      {renderData()}
    </div>
  )
}

export default EditRegexSection

EditRegexSection.propTypes = {
  options: PropTypes.array,
  handleAdd: PropTypes.func,
  handleEdit: PropTypes.func,
  handleDelete: PropTypes.func,
}
