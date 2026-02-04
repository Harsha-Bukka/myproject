public class ManagerMain{
    public static void main(String[] args) {
        Manager manager=new Manager(200000,"Akash",202,"warangal","telangana");
        Person person=new Person(200000,"Varsha",2020);
        System.out.println("Manager Data");
        System.out.println("\t ID: "+manager.personId);
        System.out.println("\t Name : "+ manager.name);
        System.out.println("\t Age : "+manager.getAge());
        System.out.println("\t Salary : "+manager.salary);
        System.out.println("\t Location : "+manager.getLocation());
        System.out.println("\t Salary : "+manager.getState());
    }
}
