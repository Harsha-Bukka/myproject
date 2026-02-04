package com.cts.exception;

public class Division {
    int division(int a,int b){
        if(b==0)
             throw new RuntimeException("Second number is invalid");//checked Exception,by compiler
        else
            return  a/b;
    }
    public static void main(String[] args) {
        System.out.println("Start Program");
        System.out.println(new Division().division(11,0));
        System.out.println("Final Program");
    }
}
