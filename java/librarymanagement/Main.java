package librarymanagement;

public class Main {
    public static void main(String[] args) {
        Book originOfSpecies = new Book("Origin of Species", 1, "Charles Darvin");
        
        Library lib = new Library();

        lib.addBook(originOfSpecies);


        System.out.println(lib);
        
        Members John = new Members("John", 734242343);


        John.borrowBook(originOfSpecies);

        System.out.println(John);

        

    }
}
