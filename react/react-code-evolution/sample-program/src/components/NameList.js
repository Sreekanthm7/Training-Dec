import React from "react"
import Person from "./Person"
function NameList() {
  const names = ["Bruce", "Clark", "Diana"]
  const persons = [
    {
      id: 1,
      name: "Bruce",
      age: 30,
      skill: "React",
    },
    {
      id: 2,
      name: "Clark",
      age: 25,
      skill: "Angular",
    },
    {
      id: 3,
      name: "Diana",
      age: 20,
      skill: "Vue",
    },
  ]

  const nameList = names.map((name, index) => (
    <h2 key={index}>
      {index} {name}
    </h2>
  ))
  return <div>{nameList}</div>
  //   const names = ["Bruce", "Clark", "Diana"]
  //   const nameList = names.map((name) => <h2>{name}</h2>)

  //   return <div>{nameList}</div>

  //   return (
  //   <div>
  //     {
  //         names.map(name => <h2>{name}</h2>)
  //     }
  //   </div>
  //   )
}

export default NameList
