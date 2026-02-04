package com.cts.lambda;

import com.cts.exception.InterestCalculation;

import java.util.Arrays;
import java.util.Comparator;
import java.util.stream.Stream;


//import static java.lang.StringUTF16.compareTo;

public class UserMain1{
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
       Stream.of(user).forEach(s-> System.out.println(s));
        System.out.println("sorting by name");
        Stream.of(user).sorted(comparatorName).forEach(s-> System.out.print(s+" "));
        //Stream.of(user).sorted().System.out.println("\n using limit");
        //Stream.of(user).sorted(comparatorName).limit(2).forEach(s-> System.out.print(s+" "));

    }



}
