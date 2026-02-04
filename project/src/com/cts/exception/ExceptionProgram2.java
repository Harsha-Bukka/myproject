package com.cts.exception;

public class ExceptionProgram2 {
    public static void main(String[] args) {
        System.out.println(10/0.0);
        System.out.println(-10/0.0);
        System.out.println("Start Of The Program");
        String s=null;
        try{
            System.out.println(s.charAt(11));
            System.out.println(10/0);// java.lang.ArithmeticException: / by zero
        }
        catch (NullPointerException e){
            System.out.println("Null pointer error:"+e.getMessage());
        }
        catch (ArithmeticException e){
            System.out.println("Divied by Zero: " +e.getMessage());
        }
        catch (Exception e){
            System.out.println(e.getMessage());
        }
        System.out.println("End Of The Program");
        int a[]={1,2,3,4};
        /*java.lang.ArrayIndexOutOfBoundsException: Index 5 out of bounds for length 4
        System.out.println(a[5]);*/
        String name="hello";
        /*java.lang.StringIndexOutOfBoundsException: Index 10 out of bounds for length 5
        System.out.println(name.charAt(10));*/
        /*java.lang.NumberFormatException: For input string: "123e"
        String n="123e";

        int p=Integer.parseInt(n);
        System.out.println(p+10);*/

        String n="123";

        int p=Integer.parseInt(n);
        System.out.println(p+10);

        /* java.lang.NullPointerException: Cannot invoke "String.length()" because "s" is null
        int d1=s.length();*/
        Integer n1=null;
    }
}
