import NewTeamDialog from "@/components/new-team-dialog";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem } from "@/types";
import { Team } from "@/types/types";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
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
        <div className="grid md:grid-cols-3 grid-cols-2 items-center p-4 gap-3">
          {teams.map((team) => (
            <Link href={route("teams.edit", team.id)} key={team.id}>
              <div
                className="
                  p-4 border rounded-lg
                  flex flex-col items-center justify-center
                  hover:shadow-md transition-shadow duration-200
                "
              >
                <div className="flex flex-col space-y-3">
                  <div className="mt-1">
                    <img
                      src={"https://github.com/shadcn.png"}
                      alt={team.name}
                      className="w-20 h-20 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-xl font-semibold text-gray-400 text-center">{team.name}</div>
                  </div>
                </div>
                
                {/* This inner div contains the member count */}
                <div className="flex flex-col mt-4 space-y-1">
                  <p className="text-xs text-gray-500 uppercase tracking-wider">
                    MEMBERS
                  </p>
                  <div className="text-2xl font-bold text-indigo-600 ms-2">
                    {team.players?.length || 0}
                    <span className="text-lg font-normal text-gray-400"> / 15</span>
                  </div>
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