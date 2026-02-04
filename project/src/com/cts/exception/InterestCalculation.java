package com.cts.exception;
import java.util.*;

public class InterestCalculation {
    float amt;
    float rate;
    int time;
    Scanner sc=new Scanner(System.in);
    float instrest() throws Exception {
        System.out.println("Enter the amount");
        amt = sc.nextFloat();
        if(amt<0)
            throw new Exception("Invalid amount");
        System.out.println("Enter the amount");
        rate = sc.nextFloat();
        if(rate<0)
            throw new Exception("Invalid amount");
        System.out.println("Enter the amount");
        time = sc.nextInt();
        if(time<0)
            throw new Exception("Invalid amount");
        return amt*rate*time/100;
    }

    public static void main(String[] args) {
        try {
            System.out.println("Insert " + new InterestCalculation().instrest());
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }
}
