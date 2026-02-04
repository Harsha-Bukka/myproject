public class User {
    void introduction(){
        System.out.println("\t\tI am A User");
    }
    public static void hello(){
        System.out.println("this is static polymorphism");
    }
}
class Passenger extends User{
    public static void hello(){
        System.out.println("this is static method inside Passenger which is rewritten");
    }
    @Override
    void introduction(){
        System.out.println("\t\tI am A Passenger");
    }
}
class Father extends  User{
    public static void hello(){
        System.out.println("this is static method inside Father which is rewritten");
    }
    @Override
    void introduction(){
        System.out.println("\t\tI am Father");
    }
}
