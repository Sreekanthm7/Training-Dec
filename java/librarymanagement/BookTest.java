package librarymanagement;

import static org.junit.Assert.assertEquals;

import javax.swing.text.html.StyleSheet.BoxPainter;

import org.junit.Test;

public class BookTest {
    @Test
    public void testGetAuthor() {
        Book originofSpecies = new Book("Origin Of Species", 1, "Charles Darvin");
        
        originofSpecies.setAuthor("Charles Darvin");

        String expected = "Charles Darvin";
        String got = originofSpecies.getAuthor();

        assertEquals(expected, got);
        
    }

    @Test
    public void testGetId() {

        Book originofSpecies = new Book("Origin Of Species", 1, "Charles Darvin");

        int expected = 1;
        int got = originofSpecies.getId();

        assertEquals(expected, got);

    }

    @Test
    public void testGetName() { 
        Book originofSpecies = new Book("Origin Of Species", 1, "Charles Darvin");
        originofSpecies.setName("Origin Of Species");

        String expected = "Origin Of Species";
        String got = originofSpecies.getName();

        assertEquals(expected, got);
    }

    @Test
    public void testIsAvailable() {

        Book originofSpecies = new Book("Origin Of Species", 1, "Charles Darvin");
        originofSpecies.setAvailable(true);

        boolean expected = true;
        boolean got = originofSpecies.isAvailable();

        assertEquals(expected, got);
    }
}
