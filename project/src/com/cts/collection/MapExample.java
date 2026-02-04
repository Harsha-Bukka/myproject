package com.cts.collection;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;

public class MapExample {
    public static void main(String[] args) {
        Map<String,String> map=new HashMap<>();
        map.put("a","apple");//no duplicate key are allowed
        map.put("b","banana");
        map.put("c","cat");
        map.put("d","cat");//duplicate values are allowed
        System.out.println("Element in map are: "+map);
        System.out.println(map.get("a"));//retrieve an element by key return value of that key
        Set<String> s=map.keySet();
        System.out.println("Updating the value of key b");
        //map['b']="ball";
        for(String key:s){
            System.out.print(" ,"+key+" *_____ * "+map.get(key));
        }
        System.out.println();
        map.remove("b");
        Collection<String> values=map.values();
        System.out.println("all keys "+values+"\nall values "+values);
    }
}
