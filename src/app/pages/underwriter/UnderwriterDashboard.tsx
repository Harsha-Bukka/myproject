import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { ClipboardCheck, Clock, CheckCircle, XCircle, TrendingUp } from "lucide-react";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router";
import { Badge } from "../../components/ui/badge";

export function UnderwriterDashboard() {
  const navigate = useNavigate();

  const stats = [
    { title: "Pending Review", value: "23", icon: Clock, color: "text-orange-600" },
    { title: "Approved Today", value: "12", icon: CheckCircle, color: "text-green-600" },
    { title: "Declined Today", value: "3", icon: XCircle, color: "text-red-600" },
    { title: "Avg. Score", value: "725", icon: TrendingUp, color: "text-blue-600" },
  ];

  const pendingApplications = [
    {
      id: "APP125",
      name: "Sarah Johnson",
      cardType: "Platinum",
      requestedLimit: 15000,
      bureauScore: 780,
      internalScore: 745,
      riskLevel: "Low",
      submittedDate: "2026-03-17",
    },
    {
      id: "APP126",
      name: "Michael Chen",
      cardType: "Gold",
      requestedLimit: 8000,
      bureauScore: 720,
      internalScore: 710,
      riskLevel: "Medium",
      submittedDate: "2026-03-17",
    },
    {
      id: "APP127",
      name: "James Wilson",
      cardType: "Platinum",
      requestedLimit: 20000,
      bureauScore: 650,
      internalScore: 640,
      riskLevel: "High",
      submittedDate: "2026-03-16",
    },
  ];

  const getRiskBadge = (risk: string) => {
    const variants: Record<string, { variant: "default" | "secondary" | "destructive"; color: string }> = {
      Low: { variant: "default", color: "bg-green-100 text-green-700 border-green-300" },
      Medium: { variant: "secondary", color: "bg-yellow-100 text-yellow-700 border-yellow-300" },
      High: { variant: "destructive", color: "bg-red-100 text-red-700 border-red-300" },
    };
    return (
      <Badge className={variants[risk]?.color || ""} variant="outline">
        {risk} Risk
      </Badge>
    );
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl mb-2">Underwriter Console</h1>
        <p className="text-muted-foreground">Review and assess credit card applications</p>
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
          <Button onClick={() => navigate("/dashboard/underwriter/applications")}>
            <ClipboardCheck className="h-4 w-4 mr-2" />
            Review Applications
          </Button>
          <Button variant="outline">
            <TrendingUp className="h-4 w-4 mr-2" />
            Risk Analytics
          </Button>
          <Button variant="outline">View Decision History</Button>
        </CardContent>
      </Card>

      {/* Pending Applications */}
      <Card>
        <CardHeader>
          <CardTitle>Applications Pending Review</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {pendingApplications.map((app) => (
              <Card key={app.id}>
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-lg">{app.name}</h3>
                        {getRiskBadge(app.riskLevel)}
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                        <p>Application: {app.id}</p>
                        <p>Card: {app.cardType}</p>
                        <p>Requested: ${app.requestedLimit.toLocaleString()}</p>
                        <p>Submitted: {new Date(app.submittedDate).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">Bureau Score</p>
                          <p className="text-xl text-center">{app.bureauScore}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Internal Score</p>
                          <p className="text-xl text-center">{app.internalScore}</p>
                        </div>
                      </div>
                      <Button
                        size="sm"
                        onClick={() => navigate("/dashboard/underwriter/applications")}
                      >
                        Review Application
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
