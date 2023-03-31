package schoolprojectnew;

public class Student {
    
    String name;
    int age;
    boolean isSingleParent;
    String parentEmail;

    Student(String name, int age,String parentEmail){
        this.name = name;
        this.age = age;
        this.parentEmail = parentEmail;
    }

    @Override
    public String toString() {
        return "Student [name=" + name + ", age=" + age + ", isSingleParent=" + isSingleParent
                + ", parentEmail=" + parentEmail + "]";
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }


    public boolean isSingleParent() {
        return isSingleParent;
    }

    public void setSingleParent(boolean isSingleParent) {
        this.isSingleParent = isSingleParent;
    }

    public String getParentEmail() {
        return parentEmail;
    }

    public void setParentEmail(String parentEmail) {
        this.parentEmail = parentEmail;
    }


   

}
