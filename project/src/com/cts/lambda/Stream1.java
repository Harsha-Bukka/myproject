package com.cts.lambda;

import java.sql.Array;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Stream;

public class Stream1 {
    public static void main(String[] args) {
        Integer arr[]={11,2,1,22,33,3,4,55};
        Stream.of(arr).forEach(a-> System.out.print(a+" "));
        System.out.println("\n using filter");
        Stream.of(arr).filter(a->a%2==0).forEach(a-> System.out.print(a+" "));
        System.out.println("\n using distinct");
        Stream.of(arr).distinct().forEach(a-> System.out.print(a+" "));
        System.out.println("\n using distinct and sort");
        Stream.of(arr).distinct().sorted().forEach(a-> System.out.print(a+" "));
        System.out.println("\n using map");
        Stream.of(arr).distinct().map(a->a*a).forEach(a-> System.out.print(a+" "));
        System.out.println("\n using skip");
        Stream.of(arr).skip(3).forEach(a-> System.out.print(a+" "));


        List<String> lan=new ArrayList<>();
        lan.add("java");
        lan.add("python");
        lan.add("js");
        lan.add("html");
        lan.add("css");
        lan.add("angular");
        System.out.println("\nusing filter display String > 5 char length");
        lan.stream().distinct().sorted().filter(s->s.length()>5).forEach(s-> System.out.print(s+" "));
      //use limit method to skip from last
    }
}
