public class Manager extends Person{

    private String location;
    private String state;

    public Manager(double salary, String name, int personId, String state, String location) {
        super(salary, name, personId);
        this.state = state;
        this.location = location;
    }

    public String getLocation() {
        return location;
    }

    public String getState() {
        return state;
    }

    public static void main(String[] args) {
//200000,"Varsha",2020,double salary, String name, int personId
        Manager manager=new Manager(200000,"Harsha",2020,"warangal","telangana");
        manager.personId=101;
        manager.name="Arjun";
        manager.salary=1000112;
        manager.setAge(20);
        manager.location="warangal";
        manager.state="Telangana";
        System.out.println("Manager Data");
        System.out.println("\t ID: "+manager.personId);
        System.out.println("\t Name : "+manager.name);
        System.out.println("\t Age : "+manager.getAge());
        System.out.println("\t Salary : "+manager.salary);
        System.out.println("\t Location : "+manager.location);
        System.out.println("\t Salary : "+manager.state);

    }
}
