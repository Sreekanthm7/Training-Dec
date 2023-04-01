package librarymanagement;

import java.util.ArrayList;

public class Library {
    
    ArrayList<Book> books = new ArrayList<>();

    public void addBook(Book book){
        books.add(book);
    }

    public void removeBook(Book book){
        books.remove(book);
    }

    @Override
    public String toString() {
        return "Library [books=" + books + "]";
    }

    
}
