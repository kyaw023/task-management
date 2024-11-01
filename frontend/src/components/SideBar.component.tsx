import React from "react";
import {
  LayoutDashboard,
  ListTodo,
  Calendar,
  Settings,
  Users,
  BarChart,
  LogOut,
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { NavLink } from "react-router-dom";

const navItems = [
  { title: "Dashboard", icon: LayoutDashboard, path: "/" },
  { title: "Tasks", icon: ListTodo, path: "/tasks" },
  { title: "Calendar", icon: Calendar, path: "/calendar" },
  { title: "Team", icon: Users, path: "/team" },
  { title: "Reports", icon: BarChart, path: "/reports" },
  { title: "Settings", icon: Settings, path: "/settings" },
];

const SideBarComponent: React.FC = () => {
  return (
    <div className="hidden lg:flex lg:flex-col lg:w-64 h-screen bg-background border-r">
      <div className="flex items-center h-16 flex-shrink-0 px-4">
        <div className="flex items-center space-x-2">
          <h1 className="text-lg font-bold">Task Master</h1>
        </div>
      </div>
      <ScrollArea className="flex-1 px-3">
        <nav className="space-y-1 py-4">
          {navItems.map((item) => (
            <NavLink
              to={item.path}
              key={item.title}
              className={({ isActive }) =>
                `flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <item.icon
                    className={`mr-3 h-5 w-5 ${isActive ? "text-primary-foreground" : "text-muted-foreground"}`}
                  />
                  {item.title}
                  {isActive && (
                    <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary-foreground" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>
      </ScrollArea>
      <Separator className="my-4" />
      <div className="p-4">
        <div className="flex items-center space-x-3 mb-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">John Doe</p>
            <p className="text-xs text-muted-foreground">john@example.com</p>
          </div>
        </div>
        <Button variant="outline" className="w-full justify-start">
          <LogOut className="mr-2 h-4 w-4" />
          Log out
        </Button>
      </div>
    </div>
  );
};

export default SideBarComponent;
