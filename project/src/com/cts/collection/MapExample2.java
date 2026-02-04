package com.cts.collection;

import java.util.*;

public class MapExample2 {
    public static void main(String[] args) {
        Map<Integer,String> employeeMap=new TreeMap<>();
        employeeMap.put(1,"harsha");
        employeeMap.put(2,"varsha");
        employeeMap.put(3,"akash");
        employeeMap.put(4,"sharada");
        employeeMap.put(5,"satish");
        System.out.println(employeeMap);
        //Entry interface represents one entry in map
        System.out.println("using entry set ");
        Set<Map.Entry<Integer,String>> entries=employeeMap.entrySet();
        System.out.println("ID  Name");
        System.out.println("--------------");
        for(Map.Entry<Integer,String> e:entries)
        {
            System.out.println(e.getKey()+"    "+e.getValue());
        }
        List<String> l1=new ArrayList<>(employeeMap.values());
        System.out.println(l1);
        List<String > s=Collections.unmodifiableList(l1);
       // s.add("hello");//error;
    }


}
