package librarymanagement;

import java.util.ArrayList;

public class Library {
    
    ArrayList<Book> books = new ArrayList<>();

    public boolean addBook(Book book){
        if(book.isAvailable()){
       return books.add(book);
        }else{
        return false;
        }
    }

    public void removeBook(Book book){
        books.remove(book);
    }

    @Override
    public String toString() {
        return "Library [books=" + books + "]";
    }

    
}
