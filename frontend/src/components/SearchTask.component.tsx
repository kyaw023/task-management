import { Input } from "@/components/ui/input.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Search } from "lucide-react";
import React, { useState } from "react";
import { Task } from "@/types/task.types.ts";

interface SearchTaskProps {
  mockTasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const SearchTaskComponent = ({ mockTasks, setTasks }: SearchTaskProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const filteredTasks = mockTasks.filter((task) =>
      task.title.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    setTasks(filteredTasks);
  };
  return (
    <form onSubmit={handleSearch} className="flex w-full md:w-auto">
      <Input
        type="text"
        placeholder="Search tasks..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="mr-2 bg-white/20 text-white placeholder-white/60 border-none"
      />
      <Button
        type="submit"
        variant="secondary"
        className="bg-white text-teal-500 hover:bg-white/90"
      >
        <Search className="w-4 h-4 mr-2" />
        Search
      </Button>
    </form>
  );
};
export default SearchTaskComponent;
