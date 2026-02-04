package com.cts.exception;

import java.util.Objects;

/** Product class developed by
 * Author Bukka Harsha
 * Date : 02/01/2026
 */

/**
 *
 * @params prdId
 * @params prdName
 * @params prdCost
 * are parameters added
 */
public class Product {
    private int prdId;
    private String prdName;
    private float prdCost;

    @Override
    public String toString() {
        return "Product{ \n"+" prdId : "+prdId+
                "\n prdName : " +prdName+"\n prdCost : $ "+prdCost+" \n}";
    }

    /**
     *
     * @param o   the reference object with which to compare.
     * @return object class
     */
    @Override
    public boolean equals(Object o) {
        if (o == null || getClass() != o.getClass()) return false;
        Product product = (Product) o;
        return prdId == product.prdId && Float.compare(prdCost, product.prdCost) == 0 && Objects.equals(prdName, product.prdName);
    }


    @Override
    public int hashCode() {
        return Objects.hash(prdId, prdName, prdCost);
    }

    public Product(int prdId, String prdName, float prdCost) {
        this.prdId = prdId;
        this.prdName = prdName;
        this.prdCost = prdCost;
    }

    public int getPrdId() {
        return prdId;
    }

    public String getPrdName() {
        return prdName;
    }

    public float getPrdCost() {
        return prdCost;
    }
}
