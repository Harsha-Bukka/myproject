import { createBrowserRouter } from "react-router";
import { Login } from "./pages/Login";
import { DashboardLayout } from "./layouts/DashboardLayout";
import { CustomerDashboard } from "./pages/customer/CustomerDashboard";
import { CustomerCards } from "./pages/customer/CustomerCards";
import { CustomerTransactions } from "./pages/customer/CustomerTransactions";
import { CustomerStatements } from "./pages/customer/CustomerStatements";
import { CustomerRewards } from "./pages/customer/CustomerRewards";
import { BranchDashboard } from "./pages/branch/BranchDashboard";
import { ApplicationCapture } from "./pages/branch/ApplicationCapture";
import { UnderwriterDashboard } from "./pages/underwriter/UnderwriterDashboard";
import { UnderwriterApplications } from "./pages/underwriter/UnderwriterApplications";
import { OperationsDashboard } from "./pages/operations/OperationsDashboard";
import { CardIssuance } from "./pages/operations/CardIssuance";
import { StatementGeneration } from "./pages/operations/StatementGeneration";
import { RiskDashboard } from "./pages/risk/RiskDashboard";
import { RiskAlerts } from "./pages/risk/RiskAlerts";
import { AdminDashboard } from "./pages/admin/AdminDashboard";
import { ProductManagement } from "./pages/admin/ProductManagement";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      // Customer Routes
      { path: "customer", element: <CustomerDashboard /> },
      { path: "customer/cards", element: <CustomerCards /> },
      { path: "customer/transactions", element: <CustomerTransactions /> },
      { path: "customer/statements", element: <CustomerStatements /> },
      { path: "customer/rewards", element: <CustomerRewards /> },
      
      // Branch Officer Routes
      { path: "branch", element: <BranchDashboard /> },
      { path: "branch/applications", element: <ApplicationCapture /> },
      
      // Underwriter Routes
      { path: "underwriter", element: <UnderwriterDashboard /> },
      { path: "underwriter/applications", element: <UnderwriterApplications /> },
      
      // Operations Routes
      { path: "operations", element: <OperationsDashboard /> },
      { path: "operations/issuance", element: <CardIssuance /> },
      { path: "operations/statements", element: <StatementGeneration /> },
      
      // Risk Analyst Routes
      { path: "risk", element: <RiskDashboard /> },
      { path: "risk/alerts", element: <RiskAlerts /> },
      
      // Admin Routes
      { path: "admin", element: <AdminDashboard /> },
      { path: "admin/products", element: <ProductManagement /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
