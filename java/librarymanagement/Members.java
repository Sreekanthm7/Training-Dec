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

    public boolean setMobilenumber(int mobilenumber) {
        if(mobilenumber == 0){
            return false;
        }else{
        this.mobilenumber = mobilenumber;
        return true;
        }
    }

    public boolean borrowBook(Book originOfSpecies){
        if(Book.isAvailable){
             bookBorrowed.add(originOfSpecies);
        }
        return false;
    }

    public void returnBook(Book book){
        bookBorrowed.remove(book);
    }

  

    
    
}
