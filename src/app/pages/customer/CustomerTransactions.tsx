import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Badge } from "../../components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";
import { Search, Download, Filter } from "lucide-react";
import { Button } from "../../components/ui/button";
import { useState } from "react";

export function CustomerTransactions() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const transactions = [
    {
      id: "TXN001",
      date: "2026-03-17",
      merchant: "Amazon.com",
      category: "Shopping",
      amount: -89.99,
      status: "Posted",
      channel: "Online",
    },
    {
      id: "TXN002",
      date: "2026-03-16",
      merchant: "Starbucks Coffee",
      category: "Food & Dining",
      amount: -12.45,
      status: "Posted",
      channel: "POS",
    },
    {
      id: "TXN003",
      date: "2026-03-15",
      merchant: "Payment Received",
      category: "Payment",
      amount: 500.0,
      status: "Posted",
      channel: "Online",
    },
    {
      id: "TXN004",
      date: "2026-03-15",
      merchant: "Shell Gas Station",
      category: "Gas",
      amount: -45.30,
      status: "Posted",
      channel: "POS",
    },
    {
      id: "TXN005",
      date: "2026-03-14",
      merchant: "Netflix",
      category: "Entertainment",
      amount: -15.99,
      status: "Posted",
      channel: "Online",
    },
    {
      id: "TXN006",
      date: "2026-03-14",
      merchant: "Whole Foods Market",
      category: "Groceries",
      amount: -127.45,
      status: "Posted",
      channel: "POS",
    },
    {
      id: "TXN007",
      date: "2026-03-13",
      merchant: "Uber",
      category: "Transportation",
      amount: -23.50,
      status: "Authorized",
      channel: "Online",
    },
    {
      id: "TXN008",
      date: "2026-03-12",
      merchant: "Best Buy",
      category: "Electronics",
      amount: -299.99,
      status: "Posted",
      channel: "POS",
    },
    {
      id: "TXN009",
      date: "2026-03-11",
      merchant: "Apple.com",
      category: "Shopping",
      amount: -49.99,
      status: "Posted",
      channel: "Online",
    },
    {
      id: "TXN010",
      date: "2026-03-10",
      merchant: "Target",
      category: "Shopping",
      amount: -67.23,
      status: "Posted",
      channel: "POS",
    },
  ];

  const filteredTransactions = transactions.filter((txn) => {
    const matchesSearch =
      txn.merchant.toLowerCase().includes(searchQuery.toLowerCase()) ||
      txn.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterStatus === "all" || txn.status.toLowerCase() === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const getStatusBadge = (status: string) => {
    const variants: Record<string, "default" | "secondary" | "outline"> = {
      Posted: "default",
      Authorized: "secondary",
      Failed: "outline",
    };
    return <Badge variant={variants[status] || "default"}>{status}</Badge>;
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl mb-2">Transactions</h1>
        <p className="text-muted-foreground">View and manage your transaction history</p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            <CardTitle>Transaction History</CardTitle>
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="relative flex-1 sm:w-64">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search transactions..."
                  className="pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="w-full sm:w-40">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="posted">Posted</SelectItem>
                  <SelectItem value="authorized">Authorized</SelectItem>
                  <SelectItem value="failed">Failed</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Merchant</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Channel</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredTransactions.length > 0 ? (
                  filteredTransactions.map((transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell>{new Date(transaction.date).toLocaleDateString()}</TableCell>
                      <TableCell>{transaction.merchant}</TableCell>
                      <TableCell>{transaction.category}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{transaction.channel}</Badge>
                      </TableCell>
                      <TableCell>{getStatusBadge(transaction.status)}</TableCell>
                      <TableCell
                        className={`text-right ${transaction.amount > 0 ? "text-green-600" : ""}`}
                      >
                        {transaction.amount > 0 ? "+" : ""}${Math.abs(transaction.amount).toFixed(2)}
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center text-muted-foreground">
                      No transactions found
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
