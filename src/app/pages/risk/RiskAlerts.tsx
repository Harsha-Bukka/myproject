import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { Textarea } from "../../components/ui/textarea";
import { Label } from "../../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";
import { AlertTriangle, CheckCircle, XCircle, Flag } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";

export function RiskAlerts() {
  const [selectedAlert, setSelectedAlert] = useState<string | null>("ALERT001");
  const [investigationNotes, setInvestigationNotes] = useState("");
  const [decision, setDecision] = useState("");

  const alerts = [
    {
      id: "ALERT001",
      transactionId: "TXN5678",
      accountId: "ACC1234",
      customerId: "CUST456",
      name: "Robert Thompson",
      cardType: "Platinum",
      amount: 8500.0,
      merchant: "Electronics Mega Store",
      location: "Las Vegas, NV",
      channel: "POS",
      timestamp: "2026-03-17 14:30:00",
      reason: "Unusually High Amount",
      severity: "High",
      status: "Under Investigation",
      riskScore: 85,
      transactionHistory: [
        { date: "2026-03-15", merchant: "Gas Station", amount: 45.0 },
        { date: "2026-03-14", merchant: "Grocery Store", amount: 127.0 },
        { date: "2026-03-12", merchant: "Restaurant", amount: 68.0 },
      ],
      rules: [
        { rule: "Amount > $5000", triggered: true },
        { rule: "Different State", triggered: true },
        { rule: "High Risk Merchant", triggered: false },
      ],
    },
    {
      id: "ALERT002",
      transactionId: "TXN5679",
      accountId: "ACC2345",
      customerId: "CUST123",
      name: "John Smith",
      cardType: "Gold",
      amount: 1200.0,
      merchant: "Online Fashion Store",
      location: "Online",
      channel: "Online",
      timestamp: "2026-03-17 13:15:00",
      reason: "Multiple Attempts",
      severity: "Medium",
      status: "Pending Review",
      riskScore: 65,
      transactionHistory: [
        { date: "2026-03-16", merchant: "Coffee Shop", amount: 12.0 },
        { date: "2026-03-15", merchant: "Gas Station", amount: 52.0 },
        { date: "2026-03-14", merchant: "Pharmacy", amount: 38.0 },
      ],
      rules: [
        { rule: "Multiple Failed Attempts", triggered: true },
        { rule: "New Merchant", triggered: true },
        { rule: "Velocity Check", triggered: false },
      ],
    },
  ];

  const currentAlert = alerts.find((alert) => alert.id === selectedAlert);

  const handleDecision = (action: "approve" | "decline" | "block") => {
    if (action === "approve") {
      toast.success("Transaction approved");
    } else if (action === "decline") {
      toast.success("Transaction declined");
    } else {
      toast.success("Card blocked successfully");
    }
    setInvestigationNotes("");
  };

  const getSeverityBadge = (severity: string) => {
    if (severity === "High")
      return <Badge className="bg-red-100 text-red-700 border-red-300">{severity}</Badge>;
    if (severity === "Medium")
      return <Badge className="bg-yellow-100 text-yellow-700 border-yellow-300">{severity}</Badge>;
    return <Badge className="bg-blue-100 text-blue-700 border-blue-300">{severity}</Badge>;
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl mb-2">Risk Alert Investigation</h1>
        <p className="text-muted-foreground">Review and investigate suspicious transactions</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Alert List */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Active Alerts</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {alerts.map((alert) => (
              <Button
                key={alert.id}
                variant={selectedAlert === alert.id ? "default" : "outline"}
                className="w-full justify-start"
                onClick={() => setSelectedAlert(alert.id)}
              >
                <div className="text-left w-full">
                  <div className="flex items-center justify-between">
                    <p className="text-sm">{alert.name}</p>
                    <AlertTriangle
                      className={`h-4 w-4 ${
                        alert.severity === "High"
                          ? "text-red-600"
                          : alert.severity === "Medium"
                          ? "text-yellow-600"
                          : "text-blue-600"
                      }`}
                    />
                  </div>
                  <p className="text-xs opacity-70">${alert.amount.toLocaleString()}</p>
                </div>
              </Button>
            ))}
          </CardContent>
        </Card>

        {/* Alert Details */}
        {currentAlert && (
          <div className="md:col-span-2 space-y-4">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>{currentAlert.name}</CardTitle>
                  {getSeverityBadge(currentAlert.severity)}
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="transaction" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="transaction">Transaction</TabsTrigger>
                    <TabsTrigger value="history">History</TabsTrigger>
                    <TabsTrigger value="rules">Rules</TabsTrigger>
                  </TabsList>

                  <TabsContent value="transaction" className="space-y-4 mt-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label className="text-muted-foreground">Alert ID</Label>
                        <p>{currentAlert.id}</p>
                      </div>
                      <div>
                        <Label className="text-muted-foreground">Transaction ID</Label>
                        <p>{currentAlert.transactionId}</p>
                      </div>
                      <div>
                        <Label className="text-muted-foreground">Customer ID</Label>
                        <p>{currentAlert.customerId}</p>
                      </div>
                      <div>
                        <Label className="text-muted-foreground">Account ID</Label>
                        <p>{currentAlert.accountId}</p>
                      </div>
                      <div>
                        <Label className="text-muted-foreground">Card Type</Label>
                        <p>{currentAlert.cardType}</p>
                      </div>
                      <div>
                        <Label className="text-muted-foreground">Transaction Amount</Label>
                        <p className="text-lg text-red-600">${currentAlert.amount.toLocaleString()}</p>
                      </div>
                      <div>
                        <Label className="text-muted-foreground">Merchant</Label>
                        <p>{currentAlert.merchant}</p>
                      </div>
                      <div>
                        <Label className="text-muted-foreground">Location</Label>
                        <p>{currentAlert.location}</p>
                      </div>
                      <div>
                        <Label className="text-muted-foreground">Channel</Label>
                        <p>{currentAlert.channel}</p>
                      </div>
                      <div>
                        <Label className="text-muted-foreground">Timestamp</Label>
                        <p>{currentAlert.timestamp}</p>
                      </div>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                      <div className="flex items-start gap-3">
                        <Flag className="h-5 w-5 text-red-600 mt-0.5" />
                        <div>
                          <p className="text-sm">Risk Reason</p>
                          <p className="text-lg">{currentAlert.reason}</p>
                          <p className="text-sm text-muted-foreground mt-1">
                            Risk Score: {currentAlert.riskScore}/100
                          </p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="history" className="space-y-3 mt-4">
                    <h4 className="text-sm">Recent Transaction History</h4>
                    {currentAlert.transactionHistory.map((txn, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-3 border rounded-lg"
                      >
                        <div>
                          <p className="text-sm">{txn.merchant}</p>
                          <p className="text-xs text-muted-foreground">{txn.date}</p>
                        </div>
                        <p className="text-sm">${txn.amount.toFixed(2)}</p>
                      </div>
                    ))}
                  </TabsContent>

                  <TabsContent value="rules" className="space-y-3 mt-4">
                    <h4 className="text-sm">Triggered Rules</h4>
                    {currentAlert.rules.map((rule, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-3 border rounded-lg"
                      >
                        <p className="text-sm">{rule.rule}</p>
                        {rule.triggered ? (
                          <Badge className="bg-red-100 text-red-700">Triggered</Badge>
                        ) : (
                          <Badge variant="outline">Not Triggered</Badge>
                        )}
                      </div>
                    ))}
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Investigation Panel */}
            <Card>
              <CardHeader>
                <CardTitle>Investigation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="notes">Investigation Notes</Label>
                  <Textarea
                    id="notes"
                    placeholder="Enter your investigation notes..."
                    value={investigationNotes}
                    onChange={(e) => setInvestigationNotes(e.target.value)}
                    rows={4}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="action">Action</Label>
                  <Select value={decision} onValueChange={setDecision}>
                    <SelectTrigger id="action">
                      <SelectValue placeholder="Select action" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="approve">Approve Transaction</SelectItem>
                      <SelectItem value="decline">Decline Transaction</SelectItem>
                      <SelectItem value="block">Block Card</SelectItem>
                      <SelectItem value="contact">Contact Customer</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex gap-2">
                  <Button
                    className="flex-1 bg-green-600 hover:bg-green-700"
                    onClick={() => handleDecision("approve")}
                  >
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Approve
                  </Button>
                  <Button
                    className="flex-1 bg-red-600 hover:bg-red-700"
                    onClick={() => handleDecision("decline")}
                  >
                    <XCircle className="h-4 w-4 mr-2" />
                    Decline
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => handleDecision("block")}
                  >
                    <AlertTriangle className="h-4 w-4 mr-2" />
                    Block Card
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
