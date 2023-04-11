package schoolprojectnew;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class GradeTest {
    @Test
    public void testSetGrade() {
        Grade gradeOne = new Grade(3, "Leela");

        int expected = 3;
        int got = gradeOne.getGrade();

        assertEquals(expected, got);
    }

    @Test
    public void testGetClassTeacher() {
        Grade gradeOne = new Grade(3, "Leela");

        String expected = "Leela";
        String got = gradeOne.setClassTeacher("Leela");

        assertEquals(expected, got);
    }


}
