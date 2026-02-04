package com.cts.collection;
import java.util.*;

public class SetExample {
    public static void main(String[] args) {
       Set<String> set=new TreeSet<String>();
       // Set<String> set=new HashSet<>(); not used when want to sort
        set.add("Harsha");
        set.add("Varsha");
        set.add("Akash");
        set.add("Sharada");
        set.add("Harsha");//duplicate value
        System.out.println(set);
        set.remove("Harsha");
        System.out.println("all element using iterator");
        Iterator<String> iterator=set.iterator();
        System.out.println("using iterator");
        while(iterator.hasNext()); {
            System.out.print(iterator.next()+" ");
        }
        System.out.println("Using for each");
        for(String s1:set){
            System.out.print(s1+" ");
        }
       // Collections.sort(set);
    }
}
