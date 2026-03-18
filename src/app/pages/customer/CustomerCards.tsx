import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { CreditCard, Lock, Unlock, Eye, EyeOff, Plus } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../../components/ui/dialog";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";
import { toast } from "sonner";

export function CustomerCards() {
  const [showCardNumber, setShowCardNumber] = useState<Record<string, boolean>>({});

  const cards = [
    {
      id: "1",
      name: "Platinum Rewards Card",
      type: "Platinum",
      maskedNumber: "**** **** **** 1234",
      fullNumber: "4532 1234 5678 1234",
      expiry: "12/28",
      cvv: "123",
      status: "Active",
      creditLimit: 10000,
      availableCredit: 8450,
      color: "from-purple-600 to-indigo-600",
    },
    {
      id: "2",
      name: "Gold Cashback Card",
      type: "Gold",
      maskedNumber: "**** **** **** 5678",
      fullNumber: "5412 7890 1234 5678",
      expiry: "06/27",
      cvv: "456",
      status: "Active",
      creditLimit: 5000,
      availableCredit: 4200,
      color: "from-yellow-500 to-orange-500",
    },
  ];

  const toggleCardNumber = (cardId: string) => {
    setShowCardNumber((prev) => ({ ...prev, [cardId]: !prev[cardId] }));
  };

  const handleBlockCard = (cardName: string) => {
    toast.success(`${cardName} has been blocked successfully`);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl mb-2">My Cards</h1>
          <p className="text-muted-foreground">Manage your credit cards</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Apply for New Card
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Apply for New Card</DialogTitle>
              <DialogDescription>Choose the card type that suits your needs</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="cardType">Card Type</Label>
                <Select>
                  <SelectTrigger id="cardType">
                    <SelectValue placeholder="Select card type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="standard">Standard Card</SelectItem>
                    <SelectItem value="gold">Gold Card</SelectItem>
                    <SelectItem value="platinum">Platinum Card</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="requestedLimit">Requested Credit Limit</Label>
                <Input id="requestedLimit" type="number" placeholder="10000" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="income">Annual Income</Label>
                <Input id="income" type="number" placeholder="50000" />
              </div>
              <Button className="w-full" onClick={() => toast.success("Application submitted successfully!")}>
                Submit Application
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {cards.map((card) => (
          <Card key={card.id} className="overflow-hidden">
            <div className={`bg-gradient-to-br ${card.color} p-6 text-white`}>
              <div className="flex justify-between items-start mb-8">
                <div>
                  <p className="text-sm opacity-90">{card.type}</p>
                  <h3 className="text-lg">{card.name}</h3>
                </div>
                <CreditCard className="h-8 w-8 opacity-80" />
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <p className="text-xl tracking-wider">
                    {showCardNumber[card.id] ? card.fullNumber : card.maskedNumber}
                  </p>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white hover:bg-white/20"
                    onClick={() => toggleCardNumber(card.id)}
                  >
                    {showCardNumber[card.id] ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
                <div className="flex justify-between text-sm">
                  <div>
                    <p className="opacity-75">Expires</p>
                    <p>{card.expiry}</p>
                  </div>
                  <div>
                    <p className="opacity-75">CVV</p>
                    <p>{showCardNumber[card.id] ? card.cvv : "***"}</p>
                  </div>
                </div>
              </div>
            </div>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Card Details</CardTitle>
                <Badge variant={card.status === "Active" ? "default" : "destructive"}>{card.status}</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-muted-foreground">Available Credit</span>
                  <span>
                    ${card.availableCredit.toLocaleString()} / ${card.creditLimit.toLocaleString()}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all"
                    style={{ width: `${(card.availableCredit / card.creditLimit) * 100}%` }}
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1" onClick={() => handleBlockCard(card.name)}>
                  <Lock className="h-4 w-4 mr-2" />
                  Block Card
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Unlock className="h-4 w-4 mr-2" />
                  Set PIN
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
