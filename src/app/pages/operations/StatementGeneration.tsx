import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table";
import { FileText, Send, Download } from "lucide-react";
import { toast } from "sonner";

export function StatementGeneration() {
  const accounts = [
    {
      accountId: "ACC1001",
      customerId: "CUST789",
      name: "Sarah Johnson",
      cardType: "Platinum",
      periodStart: "2026-02-15",
      periodEnd: "2026-03-14",
      totalDue: 1850.0,
      minimumDue: 185.0,
      status: "Pending Generation",
    },
    {
      accountId: "ACC1002",
      customerId: "CUST790",
      name: "Michael Chen",
      cardType: "Gold",
      periodStart: "2026-02-15",
      periodEnd: "2026-03-14",
      totalDue: 1200.0,
      minimumDue: 120.0,
      status: "Generated",
    },
    {
      accountId: "ACC1003",
      customerId: "CUST791",
      name: "Emily Davis",
      cardType: "Standard",
      periodStart: "2026-02-15",
      periodEnd: "2026-03-14",
      totalDue: 890.5,
      minimumDue: 89.05,
      status: "Sent",
    },
  ];

  const handleGenerateStatement = (name: string) => {
    toast.success(`Statement generated for ${name}`);
  };

  const handleSendStatement = (name: string) => {
    toast.success(`Statement sent to ${name}`);
  };

  const getStatusBadge = (status: string) => {
    if (status === "Pending Generation") return <Badge variant="secondary">{status}</Badge>;
    if (status === "Generated") return <Badge>{status}</Badge>;
    return <Badge className="bg-green-100 text-green-700">{status}</Badge>;
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl mb-2">Statement Generation</h1>
        <p className="text-muted-foreground">Generate and distribute billing statements</p>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">Pending Generation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl">215</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">Generated Today</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl">142</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">Sent Today</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl">98</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">Total Amount Due</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl">$1.2M</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Statement Queue</CardTitle>
            <Button size="sm">
              <FileText className="h-4 w-4 mr-2" />
              Bulk Generate
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Account ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Card Type</TableHead>
                  <TableHead>Period</TableHead>
                  <TableHead>Total Due</TableHead>
                  <TableHead>Minimum Due</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {accounts.map((account) => (
                  <TableRow key={account.accountId}>
                    <TableCell>{account.accountId}</TableCell>
                    <TableCell>
                      <div>
                        <p className="text-sm">{account.name}</p>
                        <p className="text-xs text-muted-foreground">{account.customerId}</p>
                      </div>
                    </TableCell>
                    <TableCell>{account.cardType}</TableCell>
                    <TableCell className="text-sm">
                      {new Date(account.periodStart).toLocaleDateString()} -{" "}
                      {new Date(account.periodEnd).toLocaleDateString()}
                    </TableCell>
                    <TableCell>${account.totalDue.toFixed(2)}</TableCell>
                    <TableCell>${account.minimumDue.toFixed(2)}</TableCell>
                    <TableCell>{getStatusBadge(account.status)}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex gap-2 justify-end">
                        {account.status === "Pending Generation" && (
                          <Button size="sm" onClick={() => handleGenerateStatement(account.name)}>
                            Generate
                          </Button>
                        )}
                        {account.status === "Generated" && (
                          <Button size="sm" onClick={() => handleSendStatement(account.name)}>
                            <Send className="h-4 w-4 mr-2" />
                            Send
                          </Button>
                        )}
                        {account.status === "Sent" && (
                          <Button size="sm" variant="outline">
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
