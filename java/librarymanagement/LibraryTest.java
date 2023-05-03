package librarymanagement;

import static org.junit.Assert.assertEquals;

import java.util.ArrayList;

import javax.swing.plaf.TextUI;

import org.junit.Test;

public class LibraryTest {
    @Test
    public void testAddBook() {


        Library lib = new Library();

        Book originOfSpecies = new Book("Origin Of Species", 1, "Charles Darvin");

        originOfSpecies.setAvailable(true);
        lib.addBook(originOfSpecies);
        boolean expected = true;
        boolean got = lib.addBook(originOfSpecies);

        assertEquals(expected, got);

    }
}
