package librarymanagement;

public class Book {
    public static boolean isAvailable;
    String name;
    int id;
    String author;
    boolean available;

    Book(String name, int id, String author){
        this.name = name;
        this.id = id;
        this.author = author;
    }

    @Override
    public String toString() {
        return "Book [name=" + name + ", id=" + id + ", author=" + author + "]";
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

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public boolean isAvailable() {
        return available;
    }

    public void setAvailable(boolean available) {
        this.available = available;
    }

  
    

}
