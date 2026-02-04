package com.cts.exception;
import java.util.Scanner;
public class Program1 {
    public static void main(String[] args) {
        String company=null;
        Scanner sc=new Scanner(System.in);
        try {
            System.out.println("Enter company name : ");
            company = sc.nextLine();
            System.out.println("company name : "+company);
            System.out.println("The lenght of company name : "+company.length());

        }catch(Exception e){
            System.out.println(e.getMessage());
        }
        finally {
            sc.close();
            System.out.println("This  will be executed even if exception occurred or not");
        }
    }

}
