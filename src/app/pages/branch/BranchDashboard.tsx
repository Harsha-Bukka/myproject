import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Users, FileCheck, Clock, CheckCircle2, TrendingUp } from "lucide-react";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router";
import { Badge } from "../../components/ui/badge";

export function BranchDashboard() {
  const navigate = useNavigate();

  const stats = [
    { title: "Total Applications", value: "48", icon: Users, trend: "+12%" },
    { title: "Pending Review", value: "15", icon: Clock, trend: "+5%" },
    { title: "Approved Today", value: "8", icon: CheckCircle2, trend: "+20%" },
    { title: "Completion Rate", value: "92%", icon: TrendingUp, trend: "+3%" },
  ];

  const recentApplications = [
    {
      id: "APP001",
      name: "Sarah Johnson",
      cardType: "Platinum",
      requestedLimit: 15000,
      date: "2026-03-17",
      status: "Submitted",
    },
    {
      id: "APP002",
      name: "Michael Chen",
      cardType: "Gold",
      requestedLimit: 8000,
      date: "2026-03-17",
      status: "Documents Pending",
    },
    {
      id: "APP003",
      name: "Emily Davis",
      cardType: "Standard",
      requestedLimit: 5000,
      date: "2026-03-16",
      status: "Under Review",
    },
    {
      id: "APP004",
      name: "James Wilson",
      cardType: "Platinum",
      requestedLimit: 20000,
      date: "2026-03-16",
      status: "Submitted",
    },
  ];

  const getStatusBadge = (status: string) => {
    const variants: Record<string, "default" | "secondary" | "outline"> = {
      Submitted: "default",
      "Documents Pending": "secondary",
      "Under Review": "outline",
    };
    return <Badge variant={variants[status] || "default"}>{status}</Badge>;
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl mb-2">Branch Officer Dashboard</h1>
        <p className="text-muted-foreground">Manage customer applications and documents</p>
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
            <Button
              className="w-full justify-start"
              onClick={() => navigate("/dashboard/branch/applications")}
            >
              <FileCheck className="h-4 w-4 mr-2" />
              New Card Application
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Users className="h-4 w-4 mr-2" />
              Customer Lookup
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Clock className="h-4 w-4 mr-2" />
              Pending Documents
            </Button>
          </CardContent>
        </Card>

        {/* Recent Applications */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Applications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentApplications.map((app) => (
                <div key={app.id} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm">{app.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {app.cardType} - ${app.requestedLimit.toLocaleString()}
                    </p>
                  </div>
                  <div className="text-right">{getStatusBadge(app.status)}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
