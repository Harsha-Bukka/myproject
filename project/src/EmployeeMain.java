public class EmployeeMain {
    public static void main(String[] args) {
        //sout to get the below
        System.out.println("Employee Data");
        Employee employee=new Employee ();
        Address address=new Address();
        address.setAddId(1);
        address.setAddLocation("Warangal");
        address.setState("Telangana");

        employee.setEmployeeId(1000);
        employee.setEmployeeName("Harsha");
        employee.setEmployeeSalary(2000000);

        employee.setAddress((address));
        System.out.println("EmployeeMain.main");
        System.out.println("\t Employee Id "+employee.getEmployeeId());
        System.out.println("\t Employee Name "+employee.getEmployeeName());
        System.out.println("\t Employee Salary "+employee.getEmployeeSalary());
        System.out.println("\t ****Address****");
        Address address1=employee.getAddress();
        System.out.println("\t\t Employee ID"+address1.getAddId());
        System.out.println("\t\t Employee Location"+address1.getAddLocation());
        System.out.println("\t\t Employee State"+address1.getState());



    }
}
