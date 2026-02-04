package com.cts.collection;

import java.util.ArrayList;
import java.util.List;

/**
 * This is ArrayList Program
 */
public class ArrayList1 {
    public static void main(String[] args) {
        List l=new ArrayList();
        l.add(33232);
        l.add(new Integer(223332));
        l.add(33232);
        l.add("hello");
        l.add(7334.33f);
        l.add("hello world");
        System.out.println(l);
        System.out.println("Index access");
        System.out.println(l.get(0));
        System.out.println(l.get(1));
        System.out.println("Delecting or removeing based on index/value");
        l.remove(3);
        l.remove("hello");
        System.out.println("\n Using Loop");
        for(int i=0;i<l.size();i++)
        {
            System.out.println(l.get(i)+" ");
        }
        System.out.println("\n Using For Each");
        for(Object o:l){
            System.out.println(o+" ");
        }




    }
}
