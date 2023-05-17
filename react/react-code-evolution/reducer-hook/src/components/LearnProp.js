import React from "react"

function LearnProp(props) {
  return (
    <>
      <div>LearnProp</div>
      <div>{props.name}</div>
      <div>{props.age}</div>
    </>
  )
}

export default LearnProp
