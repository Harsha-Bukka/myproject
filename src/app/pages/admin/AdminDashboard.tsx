import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Users, CreditCard, TrendingUp, DollarSign, BarChart3 } from "lucide-react";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from "recharts";

export function AdminDashboard() {
  const navigate = useNavigate();

  const stats = [
    { title: "Total Customers", value: "12,450", icon: Users, trend: "+12.5%" },
    { title: "Active Cards", value: "18,230", icon: CreditCard, trend: "+8.3%" },
    { title: "Monthly Revenue", value: "$2.4M", icon: DollarSign, trend: "+15.2%" },
    { title: "Portfolio Value", value: "$125M", icon: TrendingUp, trend: "+6.8%" },
  ];

  const monthlyData = [
    { month: "Oct", applications: 320, approvals: 280, revenue: 1.8 },
    { month: "Nov", applications: 380, approvals: 320, revenue: 2.0 },
    { month: "Dec", applications: 420, approvals: 360, revenue: 2.2 },
    { month: "Jan", applications: 450, approvals: 380, revenue: 2.3 },
    { month: "Feb", applications: 480, approvals: 410, revenue: 2.5 },
    { month: "Mar", applications: 510, approvals: 440, revenue: 2.7 },
  ];

  const productDistribution = [
    { name: "Standard", value: 8500 },
    { name: "Gold", value: 6200 },
    { name: "Platinum", value: 3530 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl mb-2">Admin Console</h1>
        <p className="text-muted-foreground">System-wide analytics and configuration</p>
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
                <p className="text-xs text-green-600 mt-1">{stat.trend} from last month</p>
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
          <Button onClick={() => navigate("/dashboard/admin/products")}>
            <CreditCard className="h-4 w-4 mr-2" />
            Manage Products
          </Button>
          <Button variant="outline">
            <Users className="h-4 w-4 mr-2" />
            User Management
          </Button>
          <Button variant="outline">
            <BarChart3 className="h-4 w-4 mr-2" />
            Reports
          </Button>
          <Button variant="outline">System Settings</Button>
        </CardContent>
      </Card>

      {/* Charts */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Application Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="applications" stroke="#3b82f6" name="Applications" />
                <Line type="monotone" dataKey="approvals" stroke="#10b981" name="Approvals" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Card Distribution by Type</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={productDistribution}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#3b82f6" name="Active Cards" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* System Health */}
      <Card>
        <CardHeader>
          <CardTitle>System Health</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 border rounded-lg">
              <p className="text-sm text-muted-foreground mb-1">API Uptime</p>
              <p className="text-2xl text-green-600">99.9%</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <p className="text-sm text-muted-foreground mb-1">Avg Response Time</p>
              <p className="text-2xl">142ms</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <p className="text-sm text-muted-foreground mb-1">Active Sessions</p>
              <p className="text-2xl">1,234</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <p className="text-sm text-muted-foreground mb-1">Error Rate</p>
              <p className="text-2xl text-green-600">0.02%</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
