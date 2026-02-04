public class UserMain {
    public static void main(String[] args) {
        System.out.println("This program is example of runtime polymorphism");
        User user;
        user=new Father();
        System.out.println("\t\tUser object to call Father class method");
        user.introduction();
        user=new Passenger();
        System.out.println("\t\tUser object to call Passenger class ,method");

        user.introduction();
        user=new User();
        System.out.println("\t\tUser object to call User class ,method");
        user.introduction();
        //Static method overwritten in sub and super class
        User.hello();
        Father.hello();

    }
}
