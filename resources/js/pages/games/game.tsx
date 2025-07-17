import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem } from "@/types";
import { Game } from "@/types/types";
import { Head, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";

const breadcrumbs: BreadcrumbItem[] = [
    {
      title: "Games",
      href: "/games",
    },
];

const GamePage = () => {
    const { props } = usePage();
    const [games, setGames] = useState<Game[]>((props.games as Game[]) || []);
    
    useEffect(() => {
        
    }, []);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
          <Head title="Games" />
          <div className="max-w-4xl mx-auto mt-6 space-y-4">
            {games.length === 0 && (
              <div className="text-center text-gray-500">No games available.</div>
            )}
            {games.map((game) => (
              <div
                key={game.id}
                className="flex items-center justify-between bg-white shadow-md rounded-xl px-4 py-3"
              >
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <img src={game.team_1.logo} alt={game.team_1.name} className="h-8 w-8 rounded-full" />
                    <span className="font-semibold">{game.team_1.name}</span>
                  </div>
    
                  <span className="text-gray-400 font-bold">vs</span>
    
                  <div className="flex items-center space-x-2">
                    <img src={game.team_2.logo} alt={game.team_2.name} className="h-8 w-8 rounded-full" />
                    <span className="font-semibold">{game.team_2.name}</span>
                  </div>
                </div>
    
                <div className="text-right">
                  <div className="text-sm text-gray-600">{game.time}</div>
                  <div className="text-xs text-gray-400">{game.venue}</div>
                </div>
              </div>
            ))}
          </div>
        </AppLayout>
    );
}

export default GamePage;