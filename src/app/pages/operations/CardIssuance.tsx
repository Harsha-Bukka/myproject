import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table";
import { CreditCard, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";

export function CardIssuance() {
  const cardsToIssue = [
    {
      applicationId: "APP125",
      customerId: "CUST789",
      name: "Sarah Johnson",
      cardType: "Platinum",
      creditLimit: 15000,
      approvedDate: "2026-03-15",
      status: "Approved - Pending Issue",
    },
    {
      applicationId: "APP128",
      customerId: "CUST792",
      name: "David Lee",
      cardType: "Gold",
      creditLimit: 10000,
      approvedDate: "2026-03-14",
      status: "Card Generated",
    },
    {
      applicationId: "APP129",
      customerId: "CUST793",
      name: "Lisa Wang",
      cardType: "Platinum",
      creditLimit: 18000,
      approvedDate: "2026-03-14",
      status: "Printed",
    },
    {
      applicationId: "APP130",
      customerId: "CUST794",
      name: "Robert Brown",
      cardType: "Standard",
      creditLimit: 5000,
      approvedDate: "2026-03-13",
      status: "Ready to Ship",
    },
  ];

  const handleGenerateCard = (name: string) => {
    toast.success(`Card generated for ${name}`);
  };

  const handleShipCard = (name: string) => {
    toast.success(`Card shipped to ${name}`);
  };

  const getStatusBadge = (status: string) => {
    if (status.includes("Pending")) return <Badge variant="secondary">{status}</Badge>;
    if (status.includes("Generated")) return <Badge>{status}</Badge>;
    if (status.includes("Printed")) return <Badge variant="outline">{status}</Badge>;
    return <Badge className="bg-green-100 text-green-700">{status}</Badge>;
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl mb-2">Card Issuance</h1>
        <p className="text-muted-foreground">Generate and issue credit cards to approved customers</p>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">Pending Issue</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl">42</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">Generated Today</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl">18</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">Shipped Today</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl">25</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">Activated</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl">12</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Cards Queue</CardTitle>
            <Button size="sm">
              <CreditCard className="h-4 w-4 mr-2" />
              Bulk Generate
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Application ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Card Type</TableHead>
                  <TableHead>Credit Limit</TableHead>
                  <TableHead>Approved Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {cardsToIssue.map((card) => (
                  <TableRow key={card.applicationId}>
                    <TableCell>{card.applicationId}</TableCell>
                    <TableCell>
                      <div>
                        <p className="text-sm">{card.name}</p>
                        <p className="text-xs text-muted-foreground">{card.customerId}</p>
                      </div>
                    </TableCell>
                    <TableCell>{card.cardType}</TableCell>
                    <TableCell>${card.creditLimit.toLocaleString()}</TableCell>
                    <TableCell>{new Date(card.approvedDate).toLocaleDateString()}</TableCell>
                    <TableCell>{getStatusBadge(card.status)}</TableCell>
                    <TableCell className="text-right">
                      {card.status.includes("Pending") && (
                        <Button size="sm" onClick={() => handleGenerateCard(card.name)}>
                          Generate Card
                        </Button>
                      )}
                      {card.status === "Ready to Ship" && (
                        <Button size="sm" onClick={() => handleShipCard(card.name)}>
                          <Send className="h-4 w-4 mr-2" />
                          Ship
                        </Button>
                      )}
                      {card.status === "Card Generated" && (
                        <Button size="sm" variant="outline">
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Print
                        </Button>
                      )}
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
