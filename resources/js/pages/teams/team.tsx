import { Button } from "@/components/ui/button";
import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem } from "@/types";
import { Team } from "@/types/types";
import { Head, Link, usePage } from "@inertiajs/react";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";

const breadcrumbs: BreadcrumbItem[] = [
    {
      title: "My Teams",
      href: "/teams",
    },
];

const TeamPage = () => {
  const { props } = usePage();
  const [teams, setTeams] = useState<Team[]>((props.teams as Team[]) || []);
  
  useEffect(() => {

  }, []);


  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="My Teams" />
      <div className="w-full flex justify-end my-4 px-4">
        <Link href="/teams/create">
          <Button>
            <Plus />Create Team
          </Button>
        </Link>
      </div>
      <div className="max-w-4xl mx-auto mt-6 space-y-4">
        {teams.length === 0 && (
          <div className="text-center text-gray-500">No Teams available.</div>
        )}
        {teams.map((team) => (
          <div
            key={team.id}
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

export default TeamPage;