package com.cts;
//if below class and method of first class Formula declared as Final then the Myclass
//cannot extends Formula and method speed cannot also override
public  class Formula {
     float speed(float d1,float d2)
    {
        return d1/d2;
    }
}
class MyFormula extends Formula{
   final float speed(float d1,float d2)
    {
        return d1/d2;
    }
}

/*//Cannot inherit from final class 'java.lang.Math
class TestMath extends Math{
    //'Math()' has private access in 'java.lang.Math'
   Math n=new Math();
}*/

