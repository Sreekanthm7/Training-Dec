package sampleprograms;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;
import java.util.stream.Stream;

public class Sample {
    public static void main(String[] args) {
        Sample obj = new Sample();
        obj.item('b', 0);
    }

    void item(char ch , int pos) {
        Set<Character> Zero = new HashSet<>();
        Set<Character> First = new HashSet<>();
        Set<Character> Second = new HashSet<>();
        Set<Character> Third = new HashSet<>();

    String[] words = {"band", "bell", "well", "sell","want", "dont"};

        Stream<String> stream = Arrays.stream(words);
            for(int i = 0 ; i< words.length; i++) {
                if(words[i].charAt(pos) == ch){
                    Stream<String> item = stream.filter(x -> x.charAt(pos) == ch);
    
                    String[] str = item.toArray(String[]::new);
    
                    for(int j = 0 ; j < str.length; j++){
    
                        Zero.add(str[j].charAt(0));
                        First.add(str[j].charAt(1));
                        Second.add(str[j].charAt(2));
                        Third.add(str[j].charAt(3));
    
                    }
    
                    System.out.println("Zero: "+ Zero);
                    System.out.println("First: "+ First);
                    System.out.println("Second: "+ Second);
                    System.out.println("Third: "+ Third);
                }
            
        
    }
        
    }
}