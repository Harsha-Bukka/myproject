import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { CreditCard, TrendingUp, DollarSign, Gift, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router";

export function CustomerDashboard() {
  const navigate = useNavigate();

  const stats = [
    {
      title: "Available Credit",
      value: "$8,450",
      total: "of $10,000",
      icon: CreditCard,
      trend: "+2.5%",
      positive: true,
    },
    {
      title: "Current Balance",
      value: "$1,550",
      total: "Due Apr 15",
      icon: DollarSign,
      trend: "-12%",
      positive: true,
    },
    {
      title: "Reward Points",
      value: "12,450",
      total: "points",
      icon: Gift,
      trend: "+450",
      positive: true,
    },
    {
      title: "Monthly Spend",
      value: "$2,340",
      total: "This month",
      icon: TrendingUp,
      trend: "+8.2%",
      positive: false,
    },
  ];

  const recentTransactions = [
    { merchant: "Amazon.com", amount: -89.99, date: "Mar 15, 2026", category: "Shopping" },
    { merchant: "Starbucks", amount: -12.45, date: "Mar 14, 2026", category: "Food & Dining" },
    { merchant: "Payment Received", amount: 500.0, date: "Mar 13, 2026", category: "Payment" },
    { merchant: "Shell Gas Station", amount: -45.30, date: "Mar 12, 2026", category: "Gas" },
    { merchant: "Netflix", amount: -15.99, date: "Mar 10, 2026", category: "Entertainment" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl mb-2">Welcome back, John</h1>
        <p className="text-muted-foreground">Here's your credit card overview</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
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
                <p className="text-xs text-muted-foreground mt-1">{stat.total}</p>
                <div className="flex items-center mt-2">
                  {stat.positive ? (
                    <ArrowUpRight className="h-4 w-4 text-green-600" />
                  ) : (
                    <ArrowDownRight className="h-4 w-4 text-red-600" />
                  )}
                  <span className={`text-xs ${stat.positive ? "text-green-600" : "text-red-600"}`}>
                    {stat.trend}
                  </span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Quick Actions and Recent Transactions */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button className="w-full justify-start" variant="outline" onClick={() => navigate("/dashboard/customer/cards")}>
              <CreditCard className="h-4 w-4 mr-2" />
              View My Cards
            </Button>
            <Button className="w-full justify-start" variant="outline" onClick={() => navigate("/dashboard/customer/statements")}>
              <DollarSign className="h-4 w-4 mr-2" />
              Pay Bill
            </Button>
            <Button className="w-full justify-start" variant="outline" onClick={() => navigate("/dashboard/customer/rewards")}>
              <Gift className="h-4 w-4 mr-2" />
              Redeem Rewards
            </Button>
            <Button className="w-full justify-start" variant="outline" onClick={() => navigate("/dashboard/customer/transactions")}>
              <TrendingUp className="h-4 w-4 mr-2" />
              View All Transactions
            </Button>
          </CardContent>
        </Card>

        {/* Recent Transactions */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentTransactions.map((transaction, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm">{transaction.merchant}</p>
                    <p className="text-xs text-muted-foreground">{transaction.date}</p>
                  </div>
                  <div className="text-right">
                    <p className={`text-sm ${transaction.amount > 0 ? "text-green-600" : ""}`}>
                      {transaction.amount > 0 ? "+" : ""}${Math.abs(transaction.amount).toFixed(2)}
                    </p>
                    <p className="text-xs text-muted-foreground">{transaction.category}</p>
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
