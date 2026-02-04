public class StringPrg2 {
    public static void main(String[] args) {
        String s1="Hello";
        String s2="Hello";
        String s3="hello";
        System.out.println(s1.equalsIgnoreCase(s3));

        String email="cts_harsha@gmail.com";
        System.out.println(email.startsWith("cts"));
        System.out.println(email.startsWith("ha"));
        System.out.println(email.endsWith(".com"));
        System.out.println(email.endsWith("com"));
        System.out.println("Index of @ "+email.indexOf("@"));
        System.out.println("Index of word that is not present in string "+email.indexOf("2"));
        int pos = email.indexOf("");
        if (pos>=0) {
            System.out.println("email valid");
        }
        else{
            System.out.println("email valid ");
        }
        String var="we are learning java.we will learn java 8";
        System.out.println(var.indexOf("java"));
        System.out.println(var.lastIndexOf("java"));
        String[] var1=var.split(" ");
        for(String s:var1)
        {
            System.out.print("["+s+"]");
        }
        var="in-courser@we$will-learn-react@#spring-boot";
        String[] s=var.split("-");
        System.out.println("\n split at -");
        for(String p:s)
        {
            System.out.print("["+p+"]");
        }
        String[] sp=var.split("-|@|#|\\$");
        System.out.println("\n split with  -, @, #, $");
        for(String p:sp)
        {
            System.out.print("["+p+"]");
        }
        System.out.println("");
        System.out.println("        hello  ".length());
        System.out.println("        hello  ".trim().length());
        String location="";
        System.out.println(location.isEmpty());
        System.out.println(location.isBlank());
    }
}
