package com.cts.lambda;
interface  Hello{
    void display(String s);
}
public class AnonymousExample {
    //anonymous inner class
//    Hello hello=new Hello() {
//        @Override
//       private  public void display(String s) {
//            System.out.println("Welcome  " + s);
//interface having single method is used in lambda expression
// interface having single method called as functional interface
//        }
//    };
Hello hello1=(s)-> System.out.println("greeting "+s);//the above function is reduced into this single line which is called as lambda expression
    public static void main(String[] args) {
       // new AnonymousExample().hello.display("Harsha");

        new AnonymousExample().hello1.display("Harsha");
   }
}
