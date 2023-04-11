package librarymanagement;


public class Main {

    public static void testMobileNumber() {

        int given;
        int expected;
        int got;

        Members John = new Members("John", 942422422);

        // test case 1

        given = expected = 942422422;
        John.setMobilenumber(942422422);
        got = John.getMobilenumber();

        assert (got == expected)
                : "setMobileNumber: Test case 1 failed. given:" + given + "exp:" + expected + "but got:" + got;

        // test case 2;

        given = 0;

        John.setMobilenumber(0);
        got = John.getMobilenumber();

        assert (got == expected)
                : "setMobileNumber: Test case 2 failed. given:" + given + "exp:" + expected + "but got:" + got;

    }

    public static void testBorrowBook() {
        boolean given;
        boolean expected;
        boolean got;

        Members John = new Members("John", 942422422);

        Book originOfSpecies = new Book("Origin Of Species", 1, "Charles Darvin");

        // test case 1

        given = true;
        expected = true;
        originOfSpecies.setAvailable(true);
        got = originOfSpecies.isAvailable();

        assert (got == expected)
                : "setAvailable: Test case 1 failed. given:" + given + "exp:" + expected + "but got:" + got;

        // test case 2
        expected = false;
        originOfSpecies.setAvailable(false);
        got = originOfSpecies.isAvailable();

        assert (got == expected)
                : "setAvailable: Test case 2 failed. given:" + given + "exp:" + expected + "but got:" + got;
    }

    public static void testAddBook() {
        boolean given;
        boolean expected;
        boolean got;

        Library lib = new Library();
        Book originOfSpecies = new Book("Origin Of Species", 1, "Charles Darvin");

        lib.addBook(originOfSpecies);

        // test case 1

        given = true;
        expected = true;
        originOfSpecies.setAvailable(true);
        got = originOfSpecies.isAvailable();

        assert (got == expected)
                : "testAddBook: Test case 1 failed. given:" + given + "exp:" + expected + "but got:" + got;

        // test case 2

        
        given = true;
        expected = false;
        originOfSpecies.setAvailable(false);
        got = originOfSpecies.isAvailable();

        assert (got == expected)
                : "testAddBook: Test case 2 failed. given:" + given + "exp:" + expected + "but got:" + got;

    }

    public static void main(String[] args) {
        // Book originOfSpecies = new Book("Origin of Species", 1, "Charles Darvin");
        // Book warAndPeace = new Book("War and Peace", 2, "Leo Tolstoy");
        // Library lib = new Library();

        // lib.addBook(originOfSpecies);
        // lib.addBook(warAndPeace);

        // System.out.println(lib);

        // Members John = new Members("John", 734242343);

        // John.borrowBook(originOfSpecies);
        // John.borrowBook(warAndPeace);

        // John.returnBook(warAndPeace);

        // System.out.println(John);

        // testMobileNumber();

        // testBorrowBook();
        testAddBook();
        System.out.println("Test Passed");

    }
}
