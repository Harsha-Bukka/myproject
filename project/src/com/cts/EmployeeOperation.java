package com.cts;

import com.cts.collection.Employee;

import java.util.Map;
import java.util.HashMap;
public class EmployeeOperation {
    private Map<Integer, Employee> employeeMap;

     EmployeeOperation() {
        this.employeeMap = new HashMap<>();

    }
    public void addEmployee(Employee e){
        this.employeeMap.put(e.getId(),e);
    }
    public Map<Integer, Employee> getAllEmployee(){
        return this.employeeMap;
    }
    public Employee searchEmployeeById(int id){
         Employee employee=null;
         for(int k:employeeMap.keySet()){
             if(k==id){
                 employee = employeeMap.get(id);
                 break;
             }
         }
         return employee;
    }

}
