public class Z {
    public Z() {
        System.out.println("inside z constructor");
    }
}
class Y extends Z {
        public Y() {
            System.out.println("inside x constructor");
        }
    }

 class X extends Y {
        public X() {
            System.out.println("inside y constructor");
        }


        public static void main(String[] args) {
            new X();
        }
    }
