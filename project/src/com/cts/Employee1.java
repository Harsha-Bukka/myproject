package com.cts;

public abstract class Employee1 {
    private int empid;
    private  String empname;
    private float salary;

    public Employee1(int empid, String empname, float salary) {
        this.empid = empid;
        this.empname = empname;
        this.salary = salary;
    }

    public int getEmpid() {
        return empid;
    }

    public String getEmpname() {
        return empname;
    }

    public float getSalary() {
        return salary;
    }
   public abstract float annualSalary();//abstract method
   public abstract void empInfo();
   /*public void empInfo(){
       System.out.println("Employee Data");
       System.out.println("\t ID: "+getEmpid());
       System.out.println("\t Name : "+getEmpname());
       System.out.println("\t Salary : "+getSalary());
   }*/

}
