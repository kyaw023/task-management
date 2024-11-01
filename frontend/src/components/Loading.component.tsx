import { Loader2 } from "lucide-react";

const LoadingComponent = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Loader2 className="mr-2 h-6 w-6 animate-spin" />
    </div>
  );
};

export default LoadingComponent;
