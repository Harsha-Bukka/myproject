import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../../components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table";
import { Plus, Edit, Settings } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";

export function ProductManagement() {
  const [products, setProducts] = useState([
    {
      id: "PROD001",
      name: "Standard Card",
      category: "Standard",
      interestRate: 18.5,
      annualFee: 0,
      creditLimitMin: 1000,
      creditLimitMax: 5000,
      status: "Active",
    },
    {
      id: "PROD002",
      name: "Gold Rewards Card",
      category: "Gold",
      interestRate: 16.5,
      annualFee: 99,
      creditLimitMin: 5000,
      creditLimitMax: 15000,
      status: "Active",
    },
    {
      id: "PROD003",
      name: "Platinum Elite Card",
      category: "Platinum",
      interestRate: 14.5,
      annualFee: 299,
      creditLimitMin: 10000,
      creditLimitMax: 50000,
      status: "Active",
    },
  ]);

  const fees = [
    { id: "FEE001", productId: "PROD001", feeType: "Late Payment", amount: 35 },
    { id: "FEE002", productId: "PROD001", feeType: "Overlimit", amount: 25 },
    { id: "FEE003", productId: "PROD002", feeType: "Late Payment", amount: 40 },
    { id: "FEE004", productId: "PROD002", feeType: "Overlimit", amount: 30 },
    { id: "FEE005", productId: "PROD003", feeType: "Late Payment", amount: 45 },
  ];

  const handleSaveProduct = () => {
    toast.success("Product saved successfully");
  };

  const handleSaveFee = () => {
    toast.success("Fee configuration saved successfully");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl mb-2">Product Management</h1>
          <p className="text-muted-foreground">Configure card products, limits, and fees</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              New Product
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Create New Card Product</DialogTitle>
              <DialogDescription>Configure a new credit card product</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="productName">Product Name</Label>
                <Input id="productName" placeholder="e.g., Premium Card" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Input id="category" placeholder="e.g., Gold" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="interestRate">Interest Rate (%)</Label>
                <Input id="interestRate" type="number" placeholder="15.5" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="annualFee">Annual Fee ($)</Label>
                <Input id="annualFee" type="number" placeholder="99" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="minLimit">Min Credit Limit ($)</Label>
                <Input id="minLimit" type="number" placeholder="1000" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="maxLimit">Max Credit Limit ($)</Label>
                <Input id="maxLimit" type="number" placeholder="50000" />
              </div>
            </div>
            <Button className="w-full" onClick={handleSaveProduct}>
              Create Product
            </Button>
          </DialogContent>
        </Dialog>
      </div>

      <Tabs defaultValue="products" className="w-full">
        <TabsList>
          <TabsTrigger value="products">Card Products</TabsTrigger>
          <TabsTrigger value="fees">Fee Configuration</TabsTrigger>
        </TabsList>

        <TabsContent value="products" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Card Products</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Product ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Interest Rate</TableHead>
                      <TableHead>Annual Fee</TableHead>
                      <TableHead>Credit Limit Range</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {products.map((product) => (
                      <TableRow key={product.id}>
                        <TableCell>{product.id}</TableCell>
                        <TableCell>{product.name}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{product.category}</Badge>
                        </TableCell>
                        <TableCell>{product.interestRate}%</TableCell>
                        <TableCell>${product.annualFee}</TableCell>
                        <TableCell>
                          ${product.creditLimitMin.toLocaleString()} - $
                          {product.creditLimitMax.toLocaleString()}
                        </TableCell>
                        <TableCell>
                          <Badge>{product.status}</Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="icon">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          {/* Product Details Cards */}
          <div className="grid gap-4 md:grid-cols-3">
            {products.map((product) => (
              <Card key={product.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    <Badge variant="outline">{product.category}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Interest Rate:</span>
                    <span>{product.interestRate}%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Annual Fee:</span>
                    <span>${product.annualFee}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Credit Range:</span>
                    <span>
                      ${product.creditLimitMin.toLocaleString()} - $
                      {product.creditLimitMax.toLocaleString()}
                    </span>
                  </div>
                  <Button variant="outline" size="sm" className="w-full mt-2">
                    <Settings className="h-4 w-4 mr-2" />
                    Configure
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="fees" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Fee Configuration</CardTitle>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="sm">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Fee
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add Fee Configuration</DialogTitle>
                      <DialogDescription>Configure a new fee type</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="feeProduct">Product</Label>
                        <Input id="feeProduct" placeholder="Select product" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="feeType">Fee Type</Label>
                        <Input id="feeType" placeholder="e.g., Late Payment" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="feeAmount">Amount ($)</Label>
                        <Input id="feeAmount" type="number" placeholder="35" />
                      </div>
                      <Button className="w-full" onClick={handleSaveFee}>
                        Add Fee
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Fee ID</TableHead>
                      <TableHead>Product ID</TableHead>
                      <TableHead>Fee Type</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {fees.map((fee) => (
                      <TableRow key={fee.id}>
                        <TableCell>{fee.id}</TableCell>
                        <TableCell>{fee.productId}</TableCell>
                        <TableCell>{fee.feeType}</TableCell>
                        <TableCell>${fee.amount}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="icon">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
