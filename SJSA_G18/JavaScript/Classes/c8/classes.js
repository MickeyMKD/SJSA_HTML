// object-oriented programming

class Student {
    
    // class properties
    // moze da se pishat i bez vrednost
    #indexNo = 1 // da se napravi private podatokot, so # na pochetok na imeto (ne moze da se prochita, osven so poseben metod)
    semester = 1
    #grades
    averageGrade = 10
    subjects = []

    // class methods
    // constructor is mandatory
    constructor (indexNo, semester, grades, averageGrade, subjects) {
        this.#indexNo = indexNo
        this.semester = semester
        this.averageGrade = averageGrade
        this.subjects = subjects
    }

    // funcija za da moze da se prochita private podatok
    getIndex () {
        return this.#indexNo
    }

    setIndex (index) {
        this.#indexNo = index
    }

    setGrades (grades) {
        this.#grades = grades
        this.averageGrade = grades.reduce((sum, grade) => sum += grade, 0) / grades.length
    }
}


// instancirame nov objekt od tipot Student

const StudentOne = new Student()
const StudentTwo = new Student(2, 5, 8) // po red, kako shto e pishano vo class properties, odnosno po toj redosled


StudentOne.indexNo = 1 // dodavanje parametri
StudentOne.semester = 2
StudentOne.subjects

console.log(StudentOne, StudentTwo)

StudentTwo.setIndex(200)

console.log(StudentTwo.getIndex())