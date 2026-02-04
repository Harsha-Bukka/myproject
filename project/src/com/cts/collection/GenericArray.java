package com.cts.collection;

import java.util.ArrayList;
import java.util.Collections;
import java.util.LinkedList;
import java.util.List;

public class GenericArray {
    public static void main(String[] args) {
        ArrayList <Integer> arr=new ArrayList<>();
        arr.add(20);//add elements at the last
        arr.add(30);
        arr.add(40);
        arr.add(40);
        arr.add(50);
        arr.add(500);
        arr.add(-1);
        System.out.println(arr);
        System.out.println("Before Sort ");
        for(Object o:arr){
            System.out.println(o+" ");
        }
        Collections.sort(arr);
        System.out.println("After  Sort ");
        for(Object o:arr){
            System.out.print(o+" ,");
        }
        int  pos= Collections.binarySearch(arr,100);
        if (pos>0){
            System.out.println("40 found at position "+ pos+" in array");
        }
        else {
            System.out.println("Not found");
            System.out.println(arr.contains(0));
        }
     LinkedList <String> strl=new LinkedList<>();
        strl.add("Chennai");
        strl.add("Warangal");
        strl.add("HYD");
        strl.addFirst("HYD");
        strl.addLast("HYD");
        System.out.println(strl);
        System.out.println("getting first element in List");
        System.out.println(strl.getFirst());
        System.out.println(strl.get(2));
        System.out.println("getting Last element in List");
        System.out.println("Element at positoin 2:"+strl.getLast());
        Collections.sort(strl);
        System.out.println("After Sorting");
        for(String o:strl){
            System.out.print(o+" , ");
        }
        System.out.println();
        System.out.println("getting first element in List");
        System.out.println(strl.getFirst());
        System.out.println("Element at position 2:"+strl.get(2));
        System.out.println("getting Last element in List");
        System.out.println(strl.getLast());
        System.out.println("last element using max String: "+Collections.max(strl));
        System.out.println("First element using min in String: "+Collections.min(strl));

    }
}
