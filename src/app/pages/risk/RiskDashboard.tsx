import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { AlertTriangle, ShieldAlert, CheckCircle, TrendingDown } from "lucide-react";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router";
import { Badge } from "../../components/ui/badge";

export function RiskDashboard() {
  const navigate = useNavigate();

  const stats = [
    { title: "Active Alerts", value: "23", icon: AlertTriangle, color: "text-red-600" },
    { title: "High Risk Cases", value: "8", icon: ShieldAlert, color: "text-orange-600" },
    { title: "Resolved Today", value: "15", icon: CheckCircle, color: "text-green-600" },
    { title: "Fraud Rate", value: "0.12%", icon: TrendingDown, color: "text-blue-600" },
  ];

  const recentAlerts = [
    {
      id: "ALERT001",
      transactionId: "TXN5678",
      customerId: "CUST456",
      name: "Unknown Customer",
      amount: 8500.0,
      merchant: "Electronics Store",
      reason: "Unusually High Amount",
      severity: "High",
      timestamp: "2026-03-17 14:30",
      status: "Under Investigation",
    },
    {
      id: "ALERT002",
      transactionId: "TXN5679",
      customerId: "CUST123",
      name: "John Smith",
      amount: 1200.0,
      merchant: "Online Retailer",
      reason: "Multiple Attempts",
      severity: "Medium",
      timestamp: "2026-03-17 13:15",
      status: "Pending Review",
    },
    {
      id: "ALERT003",
      transactionId: "TXN5680",
      customerId: "CUST789",
      name: "Sarah Johnson",
      amount: 450.0,
      merchant: "Foreign Vendor",
      reason: "Unusual Location",
      severity: "Low",
      timestamp: "2026-03-17 12:00",
      status: "Pending Review",
    },
  ];

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
        <h1 className="text-3xl mb-2">Risk Management Dashboard</h1>
        <p className="text-muted-foreground">Monitor fraud alerts and suspicious activities</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm">{stat.title}</CardTitle>
                <Icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl">{stat.value}</div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          <Button onClick={() => navigate("/dashboard/risk/alerts")}>
            <AlertTriangle className="h-4 w-4 mr-2" />
            Review Alerts
          </Button>
          <Button variant="outline">
            <ShieldAlert className="h-4 w-4 mr-2" />
            Active Cases
          </Button>
          <Button variant="outline">View Analytics</Button>
        </CardContent>
      </Card>

      {/* Recent Alerts */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Risk Alerts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentAlerts.map((alert) => (
              <Card key={alert.id} className="border-l-4 border-l-red-500">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-lg">Transaction Alert - {alert.id}</h3>
                        {getSeverityBadge(alert.severity)}
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                        <p>Customer: {alert.name}</p>
                        <p>Amount: ${alert.amount.toLocaleString()}</p>
                        <p>Merchant: {alert.merchant}</p>
                        <p>Reason: {alert.reason}</p>
                        <p className="col-span-2">Time: {alert.timestamp}</p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Badge variant="outline">{alert.status}</Badge>
                      <Button size="sm" onClick={() => navigate("/dashboard/risk/alerts")}>
                        Investigate
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
