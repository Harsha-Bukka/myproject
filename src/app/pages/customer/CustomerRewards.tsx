import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { Gift, Star, TrendingUp, ShoppingBag, Plane, Smartphone } from "lucide-react";
import { Progress } from "../../components/ui/progress";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../../components/ui/dialog";
import { toast } from "sonner";

export function CustomerRewards() {
  const rewardsSummary = {
    totalPoints: 12450,
    pointsToExpire: 1200,
    expiryDate: "2026-06-30",
    earnedThisMonth: 450,
    redeemedTotal: 8500,
  };

  const rewardCategories = [
    {
      icon: ShoppingBag,
      name: "Shopping Vouchers",
      items: [
        { name: "Amazon $50 Gift Card", points: 5000, available: true },
        { name: "Walmart $25 Gift Card", points: 2500, available: true },
        { name: "Target $50 Gift Card", points: 5000, available: true },
      ],
    },
    {
      icon: Plane,
      name: "Travel & Hotels",
      items: [
        { name: "5000 Airline Miles", points: 10000, available: true },
        { name: "$100 Hotel Credit", points: 8000, available: true },
        { name: "Airport Lounge Access", points: 3000, available: true },
      ],
    },
    {
      icon: Smartphone,
      name: "Electronics",
      items: [
        { name: "Apple AirPods", points: 15000, available: false },
        { name: "Smart Watch", points: 20000, available: false },
        { name: "Wireless Charger", points: 4000, available: true },
      ],
    },
  ];

  const recentActivity = [
    { date: "2026-03-15", description: "Shopping at Amazon", points: 90, type: "earned" },
    { date: "2026-03-14", description: "Starbucks purchase", points: 12, type: "earned" },
    { date: "2026-03-10", description: "Redeemed Amazon Gift Card", points: -5000, type: "redeemed" },
    { date: "2026-03-08", description: "Gas purchase", points: 45, type: "earned" },
    { date: "2026-03-05", description: "Grocery shopping", points: 127, type: "earned" },
  ];

  const handleRedeem = (itemName: string, points: number) => {
    if (points > rewardsSummary.totalPoints) {
      toast.error("Insufficient points for this redemption");
    } else {
      toast.success(`Successfully redeemed ${itemName}`);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl mb-2">Rewards & Loyalty</h1>
        <p className="text-muted-foreground">Manage your reward points and redeem exciting offers</p>
      </div>

      {/* Points Summary */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h-5 w-5" />
              Total Points
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl">{rewardsSummary.totalPoints.toLocaleString()}</p>
            <p className="text-sm opacity-90 mt-2">Available for redemption</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-green-600" />
              Earned This Month
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl">{rewardsSummary.earnedThisMonth}</p>
            <p className="text-sm text-muted-foreground mt-2">Keep spending to earn more!</p>
          </CardContent>
        </Card>

        <Card className="border-orange-200 bg-orange-50/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Gift className="h-5 w-5 text-orange-600" />
              Expiring Soon
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl">{rewardsSummary.pointsToExpire}</p>
            <p className="text-sm text-muted-foreground mt-2">
              Expires on {new Date(rewardsSummary.expiryDate).toLocaleDateString()}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Redemption Categories */}
      <div className="space-y-4">
        <h2 className="text-2xl">Redeem Your Points</h2>
        {rewardCategories.map((category, idx) => {
          const Icon = category.icon;
          return (
            <Card key={idx}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon className="h-5 w-5" />
                  {category.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                  {category.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="border rounded-lg p-4 space-y-3">
                      <div>
                        <p className="text-sm">{item.name}</p>
                        <p className="text-lg text-blue-600 mt-1">{item.points.toLocaleString()} points</p>
                      </div>
                      {item.available ? (
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button className="w-full" size="sm">
                              Redeem
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-md">
                            <DialogHeader>
                              <DialogTitle>Confirm Redemption</DialogTitle>
                              <DialogDescription>
                                You are about to redeem {item.points.toLocaleString()} points for {item.name}
                              </DialogDescription>
                            </DialogHeader>
                            <div className="space-y-4">
                              <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                                <div className="flex justify-between">
                                  <span className="text-sm text-muted-foreground">Current Points</span>
                                  <span className="text-sm">{rewardsSummary.totalPoints.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-sm text-muted-foreground">Points to Redeem</span>
                                  <span className="text-sm">-{item.points.toLocaleString()}</span>
                                </div>
                                <div className="border-t pt-2 flex justify-between">
                                  <span className="text-sm">Remaining Points</span>
                                  <span className="text-sm">
                                    {(rewardsSummary.totalPoints - item.points).toLocaleString()}
                                  </span>
                                </div>
                              </div>
                              <Button
                                className="w-full"
                                onClick={() => handleRedeem(item.name, item.points)}
                              >
                                Confirm Redemption
                              </Button>
                            </div>
                          </DialogContent>
                        </Dialog>
                      ) : (
                        <Button className="w-full" size="sm" variant="outline" disabled>
                          Insufficient Points
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentActivity.map((activity, idx) => (
              <div key={idx} className="flex items-center justify-between py-2 border-b last:border-b-0">
                <div>
                  <p className="text-sm">{activity.description}</p>
                  <p className="text-xs text-muted-foreground">
                    {new Date(activity.date).toLocaleDateString()}
                  </p>
                </div>
                <Badge variant={activity.type === "earned" ? "default" : "outline"}>
                  {activity.points > 0 ? "+" : ""}
                  {activity.points} pts
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
