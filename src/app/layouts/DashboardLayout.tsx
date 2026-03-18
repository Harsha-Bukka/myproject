import { Outlet, useNavigate, useLocation } from "react-router";
import { Button } from "../components/ui/button";
import {
  CreditCard,
  LayoutDashboard,
  FileText,
  DollarSign,
  Gift,
  Users,
  ClipboardCheck,
  AlertTriangle,
  TrendingUp,
  Settings,
  LogOut,
  Menu,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";
import { useState } from "react";

export function DashboardLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    navigate("/");
  };

  // Determine current role from path
  const currentPath = location.pathname;
  const role = currentPath.split("/")[2] || "customer";

  const navigationItems = {
    customer: [
      { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard/customer" },
      { icon: CreditCard, label: "My Cards", path: "/dashboard/customer/cards" },
      { icon: FileText, label: "Transactions", path: "/dashboard/customer/transactions" },
      { icon: DollarSign, label: "Statements", path: "/dashboard/customer/statements" },
      { icon: Gift, label: "Rewards", path: "/dashboard/customer/rewards" },
    ],
    branch: [
      { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard/branch" },
      { icon: Users, label: "Applications", path: "/dashboard/branch/applications" },
    ],
    underwriter: [
      { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard/underwriter" },
      { icon: ClipboardCheck, label: "Applications", path: "/dashboard/underwriter/applications" },
    ],
    operations: [
      { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard/operations" },
      { icon: CreditCard, label: "Card Issuance", path: "/dashboard/operations/issuance" },
      { icon: FileText, label: "Statements", path: "/dashboard/operations/statements" },
    ],
    risk: [
      { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard/risk" },
      { icon: AlertTriangle, label: "Risk Alerts", path: "/dashboard/risk/alerts" },
    ],
    admin: [
      { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard/admin" },
      { icon: Settings, label: "Products", path: "/dashboard/admin/products" },
      { icon: TrendingUp, label: "Analytics", path: "/dashboard/admin" },
    ],
  };

  const currentNavItems = navigationItems[role as keyof typeof navigationItems] || navigationItems.customer;

  const getRoleTitle = () => {
    const titles: Record<string, string> = {
      customer: "Customer Portal",
      branch: "Branch Officer Portal",
      underwriter: "Underwriter Console",
      operations: "Operations Dashboard",
      risk: "Risk Management Console",
      admin: "Admin Console",
    };
    return titles[role] || "CardMaster";
  };

  const NavContent = () => (
    <>
      <div className="flex items-center gap-2 p-6 border-b">
        <div className="bg-blue-600 p-2 rounded-lg">
          <CreditCard className="h-6 w-6 text-white" />
        </div>
        <div>
          <h2 className="text-lg">CardMaster</h2>
          <p className="text-sm text-muted-foreground">{getRoleTitle()}</p>
        </div>
      </div>
      <nav className="flex-1 p-4 space-y-1">
        {currentNavItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Button
              key={item.path}
              variant={isActive ? "secondary" : "ghost"}
              className="w-full justify-start"
              onClick={() => {
                navigate(item.path);
                setMobileMenuOpen(false);
              }}
            >
              <Icon className="h-5 w-5 mr-3" />
              {item.label}
            </Button>
          );
        })}
      </nav>
      <div className="p-4 border-t">
        <Button variant="ghost" className="w-full justify-start" onClick={handleLogout}>
          <LogOut className="h-5 w-5 mr-3" />
          Logout
        </Button>
      </div>
    </>
  );

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex md:w-64 bg-white border-r flex-col">
        <NavContent />
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b p-4 flex items-center justify-between md:justify-end">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-64">
              <NavContent />
            </SheetContent>
          </Sheet>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">
              {new Date().toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto bg-gray-50 p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
