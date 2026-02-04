package com.cts.collection;
import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.List;

public class ArraysPrg1 {
    public static void main(String[] args) {
        int arr1[]={1,2,36,5,7,4,6};
        int arr2[]={1,2,36,5,7,4,6};
        System.out.println(Arrays.toString(arr1));
        System.out.println(Arrays.equals(arr2,arr1));
        Arrays.sort(arr1);
        System.out.println("sorted array is "+Arrays.toString(arr1));
        System.out.println("sorted array is "+Arrays.toString(arr1));
        System.out.println("ELEMENT FOUND AT  "+Arrays.binarySearch(arr1,6));
        Integer arr3[]={5,3,2,6,7,1};
        List<Integer> l2=Arrays.asList(arr3);
        //int i=null;gives error
        Integer a=0;
        Integer s=null;
        String s3="123";
        int i=Integer.parseInt(s3);
        System.out.println(i);
        Float v=Float.valueOf("123");
        System.out.println(v);
    }
}
