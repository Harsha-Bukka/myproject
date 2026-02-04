package com.cts;

import com.cts.collection.Employee;

import java.util.Map;

public class EmployeeMain {
    public static void main(String[] args) {
        Employee employee[]=new Employee[3];
        int id[]={1,2,3};
        String name[]={"harsha","varsha","akash"};
        float sal[]={2000,122000,22030f};
        EmployeeOperation operation=new EmployeeOperation();
        for(int i = 0; i<employee.length; i++)
        {
            employee[i]=new Employee();
            employee[i].setId(id[i]);
            employee[i].setName(name[i]);
            employee[i].setSalary(sal[i]);
            operation.addEmployee(employee[i]);
        }
        System.out.println("all employee list");
        Map<Integer,Employee> allEmployee=operation.getAllEmployee();
        for(int k:allEmployee.keySet())

            System.out.println(allEmployee.get(k));
        //checking
        Employee employee1=operation.searchEmployeeById(1);
        if(employee1!=null){
            System.out.println("Found"+employee1);
        }
        else{
            System.out.println("not found");
        }

    }
}
