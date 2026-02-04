public class StringBufferExample {
    public static void main(String[] args) {
        String s1="Hello";
        System.out.println(s1);
        s1.concat("world");
        System.out.println(s1);
        StringBuffer stringBuffer=new StringBuffer("hello");
        System.out.println(stringBuffer);
        System.out.println("below is the append to stringBuffer");
        stringBuffer.append(" to java");
        System.out.println(stringBuffer);

        System.out.println("deleting from "+(stringBuffer));
        stringBuffer.delete(2,7);

        System.out.println("Inserting the element based on position");
        stringBuffer.insert(5,"learning");
        System.out.println("After insert :");
        System.out.println(stringBuffer);
        System.out.println("using reverse method on string");
        stringBuffer.reverse();
        String p="abba";
        String p1=new StringBuffer(p).reverse().toString();
        System.out.println("plaindrome : "+(p.equals(p1)));

    }
}
