package schoolprojectnew;

import java.util.ArrayList;

public class Grade {
    String grade;
    String classTeacher;
    Student child;


    ArrayList<Student> Grade1 = new ArrayList<>();
    ArrayList<Student> Grade2 = new ArrayList<>();
    ArrayList<Student> Grade3 = new ArrayList<>();

      
    Grade(Student child, String grade, String classTeacher){
        this.child = child;
        this.grade = grade;
        this.classTeacher = classTeacher;

    }


    @Override
    public String toString() {
        return "Grade [grade=" + grade + ", classTeacher=" + classTeacher + ", child=" + child + "]";
    }


    public String getGrade() {
        return grade;
    }


    public void setGrade(String grade) {
        this.grade = grade;
    }


    public String getClassTeacher() {
        return classTeacher;
    }


    public void setClassTeacher(String classTeacher) {
        this.classTeacher = classTeacher;
    }


    public Student getChild() {
        return child;
    }


    public void setChild(Student child) {
        this.child = child;
    }

    

}


