public class StringPrg1 {
    public static void main(String[] args) {
        String s="Hello";
        String s2="Hello";
        String s3=s2;
        System.out.println(s);
        String s1=s.concat("world ");
        System.out.println(s);//Hello
        System.out.println("String Concatenation  " + s1);
        System.out.println("Converting all chars to Upper Case  "+ s1.toUpperCase());
        System.out.println("Converting all chars to lowe Case  "+ s1.toLowerCase());
        System.out.println("  "+ s1.toUpperCase());
        char[] charArray=s1.toCharArray();
        for(char a:charArray){
            System.out.print(a+" ");
        }
        System.out.println("");
        System.out.println(s1.charAt(0));
        System.out.println(s1.charAt(1));
        char[] charArray2=new char[charArray.length];
        int j=0;
        for(int i=charArray.length-1;i>=0;i--)
        {
            charArray2[j]=charArray[i];
            j++;
        }
        for(char a:charArray2) {
            System.out.print(a + " ");
        }
        System.out.println("\n"+"s="+s);
        System.out.println("s2="+s2);
        System.out.println("s3="+s3);
        System.out.println("\n" +
                "s.equals(s2): " +s.equals(s2));
        System.out.println("s==s3 : "+(s==s2));
        System.out.println("s2==s3 : "+s2==s3);
        System.out.println("\ns2.euqlas(s3) : "+s2.equals(s3));
        System.out.println("s==s3 : "+s==s3);
        System.out.println("\n s.equals(s3)"+s.equals(s3));

    }
}
