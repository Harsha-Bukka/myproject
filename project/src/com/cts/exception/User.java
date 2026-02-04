package com.cts.exception;

public class User {
    private int id;
    private String name;
    private float salary;

    public int getId() {

        return id;
    }

    public void setId(int id) throws UserException{
        if(id<0){
            throw new UserException("Here user  id less then zero");
        }
        else if(id<100 || id>500)
        {
            throw new UserException("Id range must be 100 and 500 ");
        }
        else{
            this.id=id;
        }


    }

    public String getName() {
        return name;
    }

    public void setName(String name) throws  UserException{
        if(name.isBlank()){
            throw new UserException("Name must not be empty/blank");
        }
        else if(name.length()<5 || name.length()>15){
            throw new UserException("name length must be between 5-15 characters");
        }
        this.name = name;
    }

    public float getSalary()  {
        return salary;
    }

    public void setSalary(float salary) throws UserException{
        if(salary<0){
            throw new UserException("salary must be a positive values");
        }
        else if(salary<200 || salary>20000){
            throw new UserException("Salary must be in range of 20000 - 2000000");
        }
        this.salary = salary;
    }
}
