public class Person {
    protected int personId;
    String name;
    double salary;
    private int age;

    public Person(double salary, String name, int personId) {
        this.salary = salary;
        this.name = name;
        this.personId = personId;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }
   public int getPersonId() {
        return personId;
    }

    public String getName() {
        return name;
    }

    public double getSalary() {
        return salary;
    }
}
