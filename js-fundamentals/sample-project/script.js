let classObj = {
  name: "class A",
  teacherName: "Mary",
  students: [
    {
      name: "Ravi",
      id: "101",
      marks: [
        { subject: "English", mark: 25 },
        { subject: "Maths", mark: 48 },
        { subject: "Physics", mark: 40 },
        { subject: "Chemistry", mark: 30 },
        { subject: "Computer", mark: 20 },
      ],
    },
    {
      name: "Aju",
      id: "102",
      marks: [
        { subject: "English", mark: 35 },
        { subject: "Maths", mark: 38 },
        { subject: "Physics", mark: 33 },
        { subject: "Chemistry", mark: 34 },
        { subject: "Computer", mark: 30 },
      ],
    },
    {
      name: "Mini SS",
      id: "103",
      marks: [
        { subject: "English", mark: 12 },
        { subject: "Maths", mark: 49 },
        { subject: "Physics", mark: 18 },
        { subject: "Chemistry", mark: 30 },
        { subject: "Computer", mark: 40 },
      ],
    },
    {
      name: "Binu",
      id: "104",
      marks: [
        { subject: "English", mark: 49 },
        { subject: "Maths", mark: 49 },
        { subject: "Physics", mark: 47 },
        { subject: "Chemistry", mark: 46 },
        { subject: "Computer", mark: 50 },
      ],
    },
  ],
}

function printStudents() {
  for (i = 0; i < classObj.students.length; i++) {
    console.log(classObj.students[i].name)
  }
}

function addStudent(id, name) {
  let studentObject = {
    name: name,
    id: id,
  }
  classObj.students.push(studentObject)
  printStudents()
}
// addStudent("105", "riya")

// function changeName(idx, name, marks){
//     classObj.students[0].name = "RaviKumar"

//     console.log(classObj.students[0]);

//     console.log(classObj.students[idx].name = name);

// }

// changeName(1, "rahul")

// function changeMark(idx, marks){
//     console.log(classObj.students[idx].marks[3].mark=100);
//     console.log(classObj.students[idx].marks);

// }

// changeMark(1, "rahul")

// function sumOfMarks(){

// }

function printMarks(id, students) {
  x = students.find((student) => {
    return student.id === id
  })
  total = 0
  x.marks.forEach((mobj) => {
    // console.log(mobj.subject, mobj.mark);
    total += mobj.mark
  })
  console.log(total);
  //   console.log("total", total);
  //   totalFromReduce = x.marks.reduce((total, mobj) => {
  //     return total + mobj.mark;
  //   }, 0)
  //   console.log("totalfromReduce", totalFromReduce);
  // console.log(individualMarksArray);
  // var totalMarks = individualMarksArray.reduce((total, mark) => {
  //   return total + parseInt(mark);
  // }, 0);
  // console.log(totalMarks);
}
printMarks("101", classObj.students)
