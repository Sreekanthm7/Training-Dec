import React, { useState } from "react"
import ListItem from "./ListItem"
import Tools from "../components/Tools"

let arr = [
  {
    id: 1,
    title: "Appointment for October",
    descr: "The patient is resheduled to october",
    isActive: false,
  },
  {
    id: 2,
    title: "Appointment for November",
    descr: "The Patient is rescheduled to November",
    isActive: true,
  },
  {
    id: 3,
    title: "Appointment for Januvary",
    descr: "The patient is rescheduled to November",
    isActive: false,
  },
]

function List() {
  const [data, setData] = useState(arr)

  const onListChange = (event) => {
    console.log(event.target.value)
    const value = event.target.value
    const newList = arr.filter((item) => {
      if (value === "all") {
        return true
      }
      if (value === "active") {
        return item.isActive === true
      }
      if (value === "nonActive") {
        return item.isActive === false
      }
      return false
    })
    console.log(newList)

    setData(newList)
  }

  const handleDelete = (item) => {
    console.log("Delete", item)
    const newListone = data.filter((element) => element.id != item.id)

    setData(newListone)
  }

  return (
    <Tools onAction={onListChange}>
      <div className="app-list">
        {data.map((obj) => {
          return (
            <ListItem
              key={obj.title}
              title={obj.title}
              descr={obj.descr}
              isActive={obj.isActive}
              onDelete={() => {
                handleDelete(obj)
              }}
            />
          )
        })}
      </div>
    </Tools>
  )
}

export default List
