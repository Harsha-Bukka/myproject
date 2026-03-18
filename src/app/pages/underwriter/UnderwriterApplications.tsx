import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { Textarea } from "../../components/ui/textarea";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { CheckCircle, XCircle, Clock, User, Briefcase, DollarSign, FileText } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";

export function UnderwriterApplications() {
  const [selectedApp, setSelectedApp] = useState<string | null>("APP125");
  const [decision, setDecision] = useState("");
  const [approvedLimit, setApprovedLimit] = useState("");
  const [remarks, setRemarks] = useState("");

  const applications = [
    {
      id: "APP125",
      customerId: "CUST789",
      name: "Sarah Johnson",
      email: "sarah.j@example.com",
      phone: "+1 (555) 234-5678",
      dob: "1988-05-15",
      address: "123 Oak Street, New York, NY 10001",
      income: 85000,
      employmentType: "Full-time",
      cardType: "Platinum",
      requestedLimit: 15000,
      bureauScore: 780,
      internalScore: 745,
      riskLevel: "Low",
      submittedDate: "2026-03-17",
      documents: [
        { type: "Identity Proof", status: "Verified" },
        { type: "Address Proof", status: "Verified" },
        { type: "Income Proof", status: "Verified" },
      ],
    },
    {
      id: "APP126",
      customerId: "CUST790",
      name: "Michael Chen",
      email: "m.chen@example.com",
      phone: "+1 (555) 345-6789",
      dob: "1992-08-22",
      address: "456 Pine Avenue, Los Angeles, CA 90001",
      income: 62000,
      employmentType: "Full-time",
      cardType: "Gold",
      requestedLimit: 8000,
      bureauScore: 720,
      internalScore: 710,
      riskLevel: "Medium",
      submittedDate: "2026-03-17",
      documents: [
        { type: "Identity Proof", status: "Verified" },
        { type: "Address Proof", status: "Verified" },
        { type: "Income Proof", status: "Pending" },
      ],
    },
  ];

  const currentApp = applications.find((app) => app.id === selectedApp);

  const handleDecision = (decisionType: "approve" | "reject" | "conditional") => {
    if (!approvedLimit && decisionType === "approve") {
      toast.error("Please enter approved credit limit");
      return;
    }
    toast.success(`Application ${decisionType}d successfully`);
    setDecision("");
    setApprovedLimit("");
    setRemarks("");
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl mb-2">Application Review</h1>
        <p className="text-muted-foreground">Assess creditworthiness and make approval decisions</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Application List */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Pending Applications</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {applications.map((app) => (
              <Button
                key={app.id}
                variant={selectedApp === app.id ? "default" : "outline"}
                className="w-full justify-start"
                onClick={() => setSelectedApp(app.id)}
              >
                <div className="text-left">
                  <p className="text-sm">{app.name}</p>
                  <p className="text-xs opacity-70">{app.id}</p>
                </div>
              </Button>
            ))}
          </CardContent>
        </Card>

        {/* Application Details */}
        {currentApp && (
          <div className="md:col-span-2 space-y-4">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>{currentApp.name}</CardTitle>
                  <Badge
                    className={
                      currentApp.riskLevel === "Low"
                        ? "bg-green-100 text-green-700"
                        : currentApp.riskLevel === "Medium"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }
                  >
                    {currentApp.riskLevel} Risk
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="personal" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="personal">Personal</TabsTrigger>
                    <TabsTrigger value="financial">Financial</TabsTrigger>
                    <TabsTrigger value="credit">Credit</TabsTrigger>
                    <TabsTrigger value="documents">Documents</TabsTrigger>
                  </TabsList>

                  <TabsContent value="personal" className="space-y-4 mt-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label className="text-muted-foreground">Customer ID</Label>
                        <p>{currentApp.customerId}</p>
                      </div>
                      <div>
                        <Label className="text-muted-foreground">Date of Birth</Label>
                        <p>{new Date(currentApp.dob).toLocaleDateString()}</p>
                      </div>
                      <div>
                        <Label className="text-muted-foreground">Email</Label>
                        <p>{currentApp.email}</p>
                      </div>
                      <div>
                        <Label className="text-muted-foreground">Phone</Label>
                        <p>{currentApp.phone}</p>
                      </div>
                      <div className="col-span-2">
                        <Label className="text-muted-foreground">Address</Label>
                        <p>{currentApp.address}</p>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="financial" className="space-y-4 mt-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-start gap-3">
                        <div className="bg-blue-100 p-2 rounded-lg">
                          <DollarSign className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <Label className="text-muted-foreground">Annual Income</Label>
                          <p className="text-xl">${currentApp.income.toLocaleString()}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-purple-100 p-2 rounded-lg">
                          <Briefcase className="h-5 w-5 text-purple-600" />
                        </div>
                        <div>
                          <Label className="text-muted-foreground">Employment</Label>
                          <p className="text-xl">{currentApp.employmentType}</p>
                        </div>
                      </div>
                      <div>
                        <Label className="text-muted-foreground">Requested Card Type</Label>
                        <p className="text-lg">{currentApp.cardType}</p>
                      </div>
                      <div>
                        <Label className="text-muted-foreground">Requested Limit</Label>
                        <p className="text-lg">${currentApp.requestedLimit.toLocaleString()}</p>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="credit" className="space-y-4 mt-4">
                    <div className="grid grid-cols-2 gap-4">
                      <Card className="bg-blue-50 border-blue-200">
                        <CardContent className="pt-6 text-center">
                          <p className="text-sm text-muted-foreground mb-2">Bureau Score</p>
                          <p className="text-4xl">{currentApp.bureauScore}</p>
                          <p className="text-xs text-muted-foreground mt-2">External Credit Score</p>
                        </CardContent>
                      </Card>
                      <Card className="bg-green-50 border-green-200">
                        <CardContent className="pt-6 text-center">
                          <p className="text-sm text-muted-foreground mb-2">Internal Score</p>
                          <p className="text-4xl">{currentApp.internalScore}</p>
                          <p className="text-xs text-muted-foreground mt-2">Bank Assessment</p>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="text-sm mb-2">Risk Assessment</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Credit History:</span>
                          <span className="text-green-600">Excellent</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Debt-to-Income Ratio:</span>
                          <span className="text-green-600">25%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Payment History:</span>
                          <span className="text-green-600">100% On-time</span>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="documents" className="space-y-3 mt-4">
                    {currentApp.documents.map((doc, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-3 border rounded-lg"
                      >
                        <div className="flex items-center gap-3">
                          <FileText className="h-5 w-5 text-muted-foreground" />
                          <span>{doc.type}</span>
                        </div>
                        <Badge variant={doc.status === "Verified" ? "default" : "secondary"}>
                          {doc.status}
                        </Badge>
                      </div>
                    ))}
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Decision Panel */}
            <Card>
              <CardHeader>
                <CardTitle>Underwriting Decision</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="approvedLimit">Approved Credit Limit</Label>
                  <Input
                    id="approvedLimit"
                    type="number"
                    placeholder="Enter approved limit"
                    value={approvedLimit}
                    onChange={(e) => setApprovedLimit(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="remarks">Remarks</Label>
                  <Textarea
                    id="remarks"
                    placeholder="Enter your decision remarks..."
                    value={remarks}
                    onChange={(e) => setRemarks(e.target.value)}
                    rows={4}
                  />
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
                    onClick={() => handleDecision("reject")}
                  >
                    <XCircle className="h-4 w-4 mr-2" />
                    Reject
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => handleDecision("conditional")}
                  >
                    <Clock className="h-4 w-4 mr-2" />
                    Conditional
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
