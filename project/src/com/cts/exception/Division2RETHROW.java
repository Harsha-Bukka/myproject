package com.cts.exception;

public class Division2RETHROW {

        int division(int a,int b){
            try {
                if (b == 0)
                    throw new RuntimeException("Second number is invalid");//checked Exception,by compiler
            }
            catch(Exception e){
                System.out.println("Error at Division method: " +e.getMessage());
                throw e;
            }

                return  a/b;
        }
        public static void main(String[] args) {
            System.out.println("Start Program");
            try {
                System.out.println(new com.cts.exception.Division().division(11, 0));
            }
            catch(Exception e){
                System.out.println("Error in main :"+e.getMessage());
            }
            System.out.println("Final Program");
        }
}


