import NewTeamDialog from "@/components/new-team-dialog";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem } from "@/types";
import { Team } from "@/types/types";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
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

  const { data, setData, post, processing, errors, reset } = useForm({
    name: (props.name as string) ?? "",
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(e);

    post(route("teams.store"), {
      preserveScroll: true,
      onSuccess: () => {
        reset();
      },
    });
  };
  
  useEffect(() => {

  }, []);

  console.log("Teams:", teams);

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="My Teams" />
      <div className="w-full flex justify-end mt-4 px-4">
        <NewTeamDialog
          title="Create Team"
          onSubmit={onSubmit}
          data={data}
          setData={setData}
          errors={errors}
        />
      </div>
      <div className="mt-2 space-y-4">
        {teams.length === 0 && (
          <div className="text-center text-gray-500">No Teams available.</div>
        )}
        <div className="grid md:grid-cols-2 grid-cols-1 items-center p-4 gap-3">
          {teams.map((team) => (
            // ... inside the grid structure
            <Link href={route("teams.edit", team.id)} key={team.id}>
              <div
                className="
                  p-4 border border-gray-100 rounded-lg
                  bg-white flex items-center justify-between
                  hover:shadow-md transition-shadow duration-200
                "
              >
                {/* Left Side: Avatar/Icon + Info */}
                <div className="flex items-start space-x-3">
                  {/* 1. Icon/Avatar */}
                  <div className="mt-1">
                      {/* <Avatar /> or <Icon className="text-indigo-500" /> */}
                  </div>
                  {/* 2. Team Name and Description */}
                  <div>
                    <div className="text-xl font-semibold text-gray-800">{team.name}</div>
                    <p className="text-sm text-gray-500 mt-0.5">
                      Click to manage team details
                    </p>
                  </div>
                </div>
                
                {/* Right Side: Member Count */}
                <div className="text-right flex-shrink-0">
                  <div className="text-2xl font-bold text-indigo-600">
                    {team.players?.length || 0}
                    <span className="text-lg font-normal text-gray-400"> / 15</span>
                  </div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">
                    MEMBERS
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}

export default TeamPage;