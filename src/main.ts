// Utility Types

// Partial

interface Assingment {
  studentId: string,
  title: string,
  grade: number,
  verified?: boolean,
}

const updateAssignment = (assign: Assingment, propsToUpdate: Partial<Assingmet>):Assingment => {
  return { ...assign, ...}
}



// Required and Readonly

const recordAssignment>): Assignment => {
  // send to database, ect.
  return assign
}

cosnt assignVerified: Readonly<Assignment> = { ...assignGraded, verified: true}

recordAssignment({...assignGraded, verified: true})


//Record
const hexColorMap: Record<string, string> = {
  red: "FF0000",
  green: "00FF00",
  blue: "000FF00"
}

const finalGrades: Record<Students, LetterGrades> = {
  sara: "B",
  Kelly: "U"
}


// Pick and Omit

type AssingResult = Pick<Assingment, "studentId" | "grade">




const score: AssingResult = {
  student: "k123",
  grade: 85,
}


type AssingPreview = 

// Exclude and Extract

type adjustedGrade = Exclude<LetterGrades, "U">

type highGrades = Extract<LetterGrades, "A" | "B">

//Nonnullable

type AllPossibleGrades = 'Dave'

// ReturnType

type newAssign = { title: string, points: number}

const createNewAssign = (title: string, points: number) => {
  return { title, points}
} 




type NewAssign: NewAssign = createNewAssign("Utility Types", 100)
console.log(tsAssign);


// Parameters
type AssignParams = Paraneters<typeof createNewAssigin


console.log(tsAssign2);

// Awaited - 



const fetchUsers = async () : Promise<User[]> => {


  const data = await fetch(
    'https://jsonplaceholder.typicode.com/users'
  ).then(res => {
    return res.json()
  })
}











