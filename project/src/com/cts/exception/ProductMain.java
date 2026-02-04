package com.cts.exception;

public class ProductMain  {
    public static void main(String[] args) {
        Product p1=new Product(1,"Phone",2999.33f);
        System.out.println(p1.toString());
        Product p2=new Product(1,"Phone",2999.33f);
        System.out.println(p2.toString());
//        false
//      455896770
//        132316541
//        above is the  output of tthe below print statement before overridden method of equals and hashcode
        System.out.println(p1.equals(p2));
        System.out.println(p1.hashCode());
        System.out.println(p2.hashCode());
//                true
//                -743618086
//                -743618086
//                the above outputs got when equals and hashcode is overridden
    }

}
