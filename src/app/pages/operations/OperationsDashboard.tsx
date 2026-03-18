import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { CreditCard, FileText, DollarSign, Users, TrendingUp } from "lucide-react";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router";

export function OperationsDashboard() {
  const navigate = useNavigate();

  const stats = [
    { title: "Cards to Issue", value: "42", icon: CreditCard, trend: "+8%" },
    { title: "Active Accounts", value: "12,450", icon: Users, trend: "+12%" },
    { title: "Statements Due", value: "215", icon: FileText, trend: "-5%" },
    { title: "Payments Processed", value: "$2.4M", icon: DollarSign, trend: "+15%" },
  ];

  const recentIssuance = [
    {
      customerId: "CUST789",
      name: "Sarah Johnson",
      cardType: "Platinum",
      status: "Printed",
      date: "2026-03-17",
    },
    {
      customerId: "CUST790",
      name: "Michael Chen",
      cardType: "Gold",
      status: "Ready to Ship",
      date: "2026-03-17",
    },
    {
      customerId: "CUST791",
      name: "Emily Davis",
      cardType: "Standard",
      status: "Activated",
      date: "2026-03-16",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl mb-2">Operations Dashboard</h1>
        <p className="text-muted-foreground">Manage card issuance, accounts, and billing</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm">{stat.title}</CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl">{stat.value}</div>
                <p className="text-xs text-green-600 mt-1">{stat.trend} from last week</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button className="w-full justify-start" onClick={() => navigate("/dashboard/operations/issuance")}>
              <CreditCard className="h-4 w-4 mr-2" />
              Process Card Issuance
            </Button>
            <Button className="w-full justify-start" variant="outline" onClick={() => navigate("/dashboard/operations/statements")}>
              <FileText className="h-4 w-4 mr-2" />
              Generate Statements
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <DollarSign className="h-4 w-4 mr-2" />
              Process Payments
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <TrendingUp className="h-4 w-4 mr-2" />
              Account Management
            </Button>
          </CardContent>
        </Card>

        {/* Recent Issuance */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Card Issuance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentIssuance.map((item) => (
                <div key={item.customerId} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm">{item.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {item.cardType} - {item.customerId}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-blue-600">{item.status}</p>
                    <p className="text-xs text-muted-foreground">{new Date(item.date).toLocaleDateString()}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
