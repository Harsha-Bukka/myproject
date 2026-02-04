package com.cts.lambda;

import com.cts.exception.InterestCalculation;

import java.util.Arrays;
import java.util.Comparator;


//import static java.lang.StringUTF16.compareTo;

public class UserMain {
    public static void main(String[] args) {
        //Comparator <User> comparatorId=(User o1,User o2)->Integer.valueOf(o1.getId().compareTo(Integer.valueOf(o2.getId());
        Comparator<User> comparatorName=(User o1,User o2)->o1.getName().compareTo(o2.getName());
        User user[]=new User[3];
        int id[]={1,2,3};
        String name[]={"harsha","varsha","akash"};
       for(int i=0;i<user.length;i++){
            user[i]=new User();
           user[i].setId(id[i]);
           user[i].setName(name[i]);
        }
       for(User u:user){
           System.out.println(u);
       }
        Arrays.sort(user);
        System.out.println("elements after sorted");
        for(User u:user){
            System.out.println(u);
        }
    }

    private static void compareTo(Integer integer) {
    }

//    private static Object compareto(User u) {
//
//    }
}
