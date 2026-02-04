//method overriding program
public class MethodOverRiding {
   void hello(String s){
        System.out.println("hello "+s);
    }
}
class bye extends  MethodOverRiding{
    void hello(String s){
        System.out.println("Bye "+ s);
    }
}
class Greeting extends MethodOverRiding{
    @Override//metatag
    //private //error bcs weaker access modifier
    //public ,protected and default is ok in this case when super class method is default
      void hello(String s){
        System.out.println("Greeting "+s);
    }

    public static void main(String[] args) {
        Greeting g=new Greeting();
        g.hello("Harsha");
        MethodOverRiding w=new MethodOverRiding();

    }
}
