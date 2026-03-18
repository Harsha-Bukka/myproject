import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { Download, FileText, DollarSign } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../../components/ui/dialog";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";
import { toast } from "sonner";

export function CustomerStatements() {
  const currentStatement = {
    statementId: "STMT-2026-03",
    period: "Feb 15 - Mar 14, 2026",
    totalDue: 1550.0,
    minimumDue: 155.0,
    dueDate: "2026-04-15",
    status: "Open",
  };

  const pastStatements = [
    {
      id: "STMT-2026-02",
      period: "Jan 15 - Feb 14, 2026",
      totalDue: 1200.0,
      dueDate: "2026-03-15",
      status: "Paid",
    },
    {
      id: "STMT-2026-01",
      period: "Dec 15 - Jan 14, 2026",
      totalDue: 890.5,
      dueDate: "2026-02-15",
      status: "Paid",
    },
    {
      id: "STMT-2025-12",
      period: "Nov 15 - Dec 14, 2025",
      totalDue: 1450.75,
      dueDate: "2026-01-15",
      status: "Paid",
    },
    {
      id: "STMT-2025-11",
      period: "Oct 15 - Nov 14, 2025",
      totalDue: 2100.0,
      dueDate: "2025-12-15",
      status: "Paid",
    },
  ];

  const handlePayment = () => {
    toast.success("Payment processed successfully!");
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl mb-2">Statements & Payments</h1>
        <p className="text-muted-foreground">View your billing statements and make payments</p>
      </div>

      {/* Current Statement */}
      <Card className="border-blue-200 bg-blue-50/50">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Current Statement</CardTitle>
            <Badge>{currentStatement.status}</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Statement Period</p>
              <p className="text-sm">{currentStatement.period}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Due</p>
              <p className="text-xl">${currentStatement.totalDue.toFixed(2)}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Minimum Due</p>
              <p className="text-xl">${currentStatement.minimumDue.toFixed(2)}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Due Date</p>
              <p className="text-sm">{new Date(currentStatement.dueDate).toLocaleDateString()}</p>
            </div>
          </div>
          <div className="flex gap-2 flex-wrap">
            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  <DollarSign className="h-4 w-4 mr-2" />
                  Make Payment
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>Make a Payment</DialogTitle>
                  <DialogDescription>Choose payment amount and method</DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Payment Amount</Label>
                    <div className="flex gap-2">
                      <Button variant="outline" className="flex-1" size="sm">
                        Minimum (${currentStatement.minimumDue})
                      </Button>
                      <Button variant="outline" className="flex-1" size="sm">
                        Total (${currentStatement.totalDue})
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="amount">Custom Amount</Label>
                    <Input id="amount" type="number" placeholder="0.00" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="method">Payment Method</Label>
                    <Select>
                      <SelectTrigger id="method">
                        <SelectValue placeholder="Select payment method" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="upi">UPI</SelectItem>
                        <SelectItem value="netbanking">Net Banking</SelectItem>
                        <SelectItem value="debit">Debit Card</SelectItem>
                        <SelectItem value="cash">Cash</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button className="w-full" onClick={handlePayment}>
                    Confirm Payment
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Download Statement
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Past Statements */}
      <Card>
        <CardHeader>
          <CardTitle>Past Statements</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {pastStatements.map((statement) => (
              <div
                key={statement.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <FileText className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm">{statement.id}</p>
                    <p className="text-xs text-muted-foreground">{statement.period}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <p className="text-sm">${statement.totalDue.toFixed(2)}</p>
                    <p className="text-xs text-muted-foreground">
                      Due: {new Date(statement.dueDate).toLocaleDateString()}
                    </p>
                  </div>
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    {statement.status}
                  </Badge>
                  <Button variant="ghost" size="icon">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
