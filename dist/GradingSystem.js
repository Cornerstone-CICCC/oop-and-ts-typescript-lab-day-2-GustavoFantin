// 🎓 Student Grading System
// 🏫 Create a system that manages student records and calculates their average grade.
//
// 1. Implement a class `Gradebook<T>` to store student records.
// 2. Implement a method `addStudent` that adds a new student with an empty grade list.
// 3. Implement a method `addGrade` that records a new grade for a student.
// 4. Implement a method `getAverageGrade` that returns a student’s average grade.
// 5. Implement a method `getStudentGrades` that returns all recorded grades for a student. Formula to get average: sumOfAllGrades / numberOfSubjects.
// 6. Implement a method `updateSubjectGrade` that updates a subject grade for a student.
class Gradebook {
    students = [];
    addStudent(student) {
        this.students.push(student);
        return `${student.name} added to the gradebook.`;
    }
    addGrade(id, grade) {
        const st = this.students.find((element) => element.id === id);
        st.grades.push(grade);
        return `Grade recorded for ${grade.subject}`;
    }
    getAverageGrade(id) {
        const st = this.students.find((element) => element.id === id);
        // console.log('here are the grades',st.grades);
        const total = st.grades.reduce((sum, item) => sum + item.grade, 0);
        const average = total / st.grades.length;
        return average;
    }
    getStudentGrades(id) {
        const st = this.students.find((element) => element.id === id);
        //update use map
        // console.log(st.grades);
        return st.grades;
    }
    updateSubjectGrade(id, subject, newGrade) {
        const st = this.students.find((element) => element.id === id); // map next
        const findSub = st.grades.find((element) => element.subject === subject); //change to map for update
        findSub.grade = newGrade;
        return `${st.name} ${findSub.subject} grade updated to ${findSub.grade}`;
    }
}
// Test cases
const gradebook = new Gradebook();
console.log(gradebook.addStudent({ id: 1, name: "Alice", grades: [] })); // "Alice added to the gradebook."
console.log(gradebook.addGrade(1, { subject: "Math", grade: 90 })); // "Grade recorded for Math."
console.log(gradebook.addGrade(1, { subject: "English", grade: 80 })); // "Grade recorded for English."
console.log(gradebook.addGrade(1, { subject: "Science", grade: 85 })); // "Grade recorded for Science."
console.log(gradebook.getStudentGrades(1)); // Should return all grades for Alice
console.log(gradebook.getAverageGrade(1)); // Should return Alice's average grade
console.log(gradebook.updateSubjectGrade(1, "English", 95)); // Should update Alice's English grade to 95
