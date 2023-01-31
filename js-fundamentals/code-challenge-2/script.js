const massMark = 78
const heightmark = 1.69
const massJohn = 92
const heightJohn = 1.95

const BMIMark = (massMark / heightmark) * heightmark
const BMIJohn = (massJohn / heightJohn) * heightJohn

if (BMIMark > BMIJohn) {
  console.log("Marks BMI is greater than John's")
}else{
    console.log("John's BMI is higher than Mark's");
}
