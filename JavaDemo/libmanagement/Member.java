import java.util.ArrayList;

public class Member {
    String name;
    int id;
    
    Member(String name, int id){
        this.name = name;
        this.id = id;
    }

    ArrayList<String> booksBorrowed = new ArrayList<>();

    @Override
    public String toString() {
        return "Member [name=" + name + ", id=" + id + ", booksBorrowed=" + booksBorrowed + "]";
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void borrowBook(String title){
        booksBorrowed.add(title);
    }
    public void returnBook(String title){
        booksBorrowed.remove(title);
    }

    public int numberOfBorrowedBooks(){
        return booksBorrowed.size();
    }
}
