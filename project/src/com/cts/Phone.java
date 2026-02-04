package com.cts;
public interface Phone {
    void call();
    void message();//by default abstract in nature
     String country="India";//variable are public static final in nature so,must be initialised
}
interface BudgetPhone extends Phone{
 void audioPlay();
}
//Interface implements multiple inheritances
interface  SmartPhone extends BudgetPhone,Phone{
    void internetSurfing();

    void banking();

    void videoPlay();

    void gamePlay();

}
class A{

}
class MyPhone extends A implements Phone,BudgetPhone,SmartPhone{

    @Override
    public void internetSurfing() {
        System.out.println("In InternetSurfing method");
    }

    @Override
    public void banking() {
        System.out.println("In banking method");
    }

    @Override
    public void videoPlay() {
        System.out.println("In videoPlay method");
    }

    @Override
    public void gamePlay() {
        System.out.println("In gamePlay method");
    }

    @Override
    public void audioPlay() {
        System.out.println("In audioPlay method");
    }

    @Override
    public void call() {
        System.out.println("In call method");
    }

    @Override
    public void message() {
        System.out.println("In message method");
    }
    public static void main(String[] args) {
        MyPhone myPhone=new MyPhone();
        System.out.println("Phone Data");
        myPhone.audioPlay();
        myPhone.banking();
        myPhone.call();
//        Phone phone=new Phone();
//        phone.call();
//        phone.message();

        System.out.println("Country name "+Phone.country);
    }
}

