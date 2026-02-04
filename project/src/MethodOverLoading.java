public class MethodOverLoading {
    void add(int a,int b){
        System.out.println("Addition : "+(a+b));
    }
    void add(int a,int b,int c)
    {
        System.out.println("ADDITION : "+(a+b+c));
    }
    void add(float a,float b)
    {
        System.out.println("ADDITION OF 2 FLOAT:"+(a+b) );
    }

    void add(String a,String b)
    {
        System.out.println("STRING CONCATINATION : "+a+"  is " +b+"  " + a+b);
    }

    public static void main(String[] args) {
        MethodOverLoading mol=new MethodOverLoading();
        mol.add(1,2);
        mol.add(1,2,3);
        mol.add(10.33f,20.33f);
        mol.add("Hello","Bye");
    }
}
