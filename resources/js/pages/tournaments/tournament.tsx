import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem } from "@/types";
import { Tournament } from "@/types/types";
import { Head, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";

const breadcrumbs: BreadcrumbItem[] = [
    {
      title: "Tournaments",
      href: "/tournaments",
    },
];

const GamePage = () => {
    const { props } = usePage();
    const [tournaments, setTournaments] = useState<Tournament[]>((props.tournaments as Tournament[]) || []);
    
    useEffect(() => {
        
    }, []);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
          <Head title="Tournaments" />
          <div className="max-w-4xl mx-auto mt-6 space-y-4">
            {tournaments.length === 0 && (
              <div className="text-center text-gray-500">No Tournaments available.</div>
            )}
            {tournaments.map((tournament) => (
              <div
                key={tournament.id}
                className="flex items-center justify-between bg-white shadow-md rounded-xl px-4 py-3"
              >
                <div className="flex items-center space-x-4">
                </div>
              </div>
            ))}
          </div>
        </AppLayout>
    );
}

export default GamePage;