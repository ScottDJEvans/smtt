"use client"

import PropTypes from "prop-types"

const MainDocumentArea = ({ initialText, matches }) => {
  const renderTextMatchSection = () => {
    return (
      <div className="my-4 w-full">
        {matches ? (
          <>
          <p>
            Results from search:
          </p>
          <textarea className="w-full h-80" value={matches.toString()} disabled/>
          </>
        ) : (
          <p>No matches found.</p>
        )}
      </div>
    )
  }
  return (
    <div className="w-full">
      <textarea className="w-full h-80" defaultValue={initialText} />
      {renderTextMatchSection()}
    </div>
  )
}

export default MainDocumentArea

MainDocumentArea.propTypes = {
  initialText: PropTypes.string.isRequired,
  matches: PropTypes.array
}
