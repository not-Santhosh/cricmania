import { Skeleton } from "@/components/ui/skeleton";
import { Plus } from "lucide-react";
import PlayerDialog from "./player-dialog";

export default function PlayerSkeletonDotted() {
  return (
    <div
      className="
        md:h-72 md:w-60
        h-60 w-48
        rounded-lg 
        bg-gray-50 dark:bg-gray-800 
        flex items-center justify-center 
        p-4
        border-2 border-dashed border-gray-400 dark:border-gray-600
      "
    >
      <PlayerDialog />
    </div>
  );
}