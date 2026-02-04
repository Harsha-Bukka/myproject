package com.cts;
//concrete or complete class
public class Manager extends Employee1{
    private float pf;
    private String location;

    public Manager(int empid, String empname, float salary, float pf, String location) {
        super(empid, empname, salary);
        this.pf = pf;
        this.location = location;
    }
    public float annualSalary(){

        return getSalary()*getSalary()*pf;
    }

    @Override
    public void empInfo() {
//        System.out.println("Manager Info");
//        super.empInfo();
        System.out.println("Employee Data");
        System.out.println("\t ID: "+getEmpid());
        System.out.println("\t Name : "+getEmpname());
        System.out.println("\t Salary : "+getSalary());
        System.out.println("\t Gross Salary : "+annualSalary());
        System.out.println("\t PF% : "+pf);
        System.out.println("\t Location : "+location);
    }

    public static void main(String[] args) {
       // Employee e=new Employee();// error abstract class cannot have object
        Manager manager=new Manager(10001,"Harsha",
                200f,0.5f,"Warangal");
        manager.empInfo();
       /* System.out.println("\t Gross Salary : "+manager.annualSalary());
        System.out.println("\t PF% : "+manager.pf);
        System.out.println("\t Location : "+manager.location);*/


    }
}
