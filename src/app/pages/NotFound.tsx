import { Button } from "../components/ui/button";
import { useNavigate } from "react-router";
import { AlertCircle } from "lucide-react";

export function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <div className="bg-red-100 p-4 rounded-full">
            <AlertCircle className="h-16 w-16 text-red-600" />
          </div>
        </div>
        <h1 className="text-4xl">404</h1>
        <p className="text-xl text-muted-foreground">Page Not Found</p>
        <p className="text-muted-foreground">The page you are looking for doesn't exist.</p>
        <Button onClick={() => navigate("/")}>Go to Login</Button>
      </div>
    </div>
  );
}
