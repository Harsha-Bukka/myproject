package com.cts.exception;

import java.util.Scanner;

public class UserMain {
    public static void main(String[] args) {
        User user=new User();
        try{
            int id;
            String name;
            float salary;

            Scanner sc=new Scanner(System.in);
            System.out.println("Enter user Id");
            user.setId(sc.nextInt());
            sc.nextLine();
            System.out.println("Enter user name: ");
            user.setName( sc.nextLine());
            System.out.println("Enter salary : ");
            user.setSalary(sc.nextFloat());
            System.out.println("User Details");
            System.out.println("User Name :"+user.getName());
            System.out.println("User salary: "+user.getSalary());
        } catch (UserException ex) {
            throw new RuntimeException(ex);
        }


    }
}
