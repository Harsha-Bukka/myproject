import java.util.Scanner;

public class StringPool {
    public static void main(String[] args) {
        String var1="Cat";
        String var2="Cat";
        String var3= new String("Cat");
        System.out.println("Var1==Var2 : "+(var1==var2));
        System.out.println("Var2==Var3 checks if both referencing to same object: "+(var2==var3));
        System.out.println("Var2.equals(Var3) : "+(var2.equals(var3)));
        System.out.println("hello"=="hello");
        System.out.println("hello"==new String("hello"));
        System.out.println("hello".equals(new String("hello")));

        System.out.println("enter string and see the guess is correct or not ");
        System.out.println(new Scanner(System.in).next()=="hello");
        System.out.println(new Scanner(System.in).next().equals("hello"));
    }
}
