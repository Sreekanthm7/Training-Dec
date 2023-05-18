package bookmeetingroom;
import java.util.Date;

public class MeetingRoom {
    String roomNumber;
    boolean isAvailable;
    
    MeetingRoom(String roomNumber){
        this.roomNumber = roomNumber;
    }


    @Override
    public String toString() {
        return "MeetingRoom [roomNumber=" + roomNumber + "]";
    }


    public String getRoomNumber() {
        return roomNumber;
    }

    public void setRoomNumber(String roomNumber) {
        this.roomNumber = roomNumber;
    }

    public boolean isAvailable() {
        return isAvailable;
    }

    public void setAvailable(boolean isAvailable) {
        this.isAvailable = isAvailable;
    }
    
    public void bookMeetingRoom(Office office, Employee employee){
        // office.reservedMeetingRoom.add(employee);

    }
}