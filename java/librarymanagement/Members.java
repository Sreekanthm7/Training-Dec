package librarymanagement;

import java.util.ArrayList;

public class Members {
    String name;
    int mobilenumber;

    Members(String name, int mobilenumber){
        this.name = name;
        this.mobilenumber = mobilenumber;
    }


    ArrayList<Book> bookBorrowed = new ArrayList<>();

  

    @Override
    public String toString() {
        return "Members [name=" + name + ", mobilenumber=" + mobilenumber + ", bookBorrowed=" + bookBorrowed + "]";
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getMobilenumber() {
        return mobilenumber;
    }

    public void setMobilenumber(int mobilenumber) {
        this.mobilenumber = mobilenumber;
    }

    public void borrowBook(Book book){
        bookBorrowed.add(book);
        
    }

    public void returnBook(Book book){
        bookBorrowed.remove(book);
    }

    
    
}
