import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem } from "@/types";
import { Head, useForm, usePage } from "@inertiajs/react";
import { Separator } from "@/components/ui/separator";
import PlayerSkeletonDotted from "@/components/player-skeleton";
import { Team } from "@/types/types";
import { PageProps as InertiaPageProps } from "@inertiajs/core";
import { toast } from "react-hot-toast";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: "Manage Team",
        href: "/teams",
    }
];

interface PageProps extends InertiaPageProps {
    team: Team;
}

const ManageTeam = () => {

    const { props } = usePage<PageProps>();
    const { data, setData, post, put, processing, errors } = useForm({
        name: props.team?.name ?? "",
    });
    
    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    
        put(route("teams.update", props.team.id), {
            onSuccess: () => toast.success("Team updated successfully!"),
            onError: () => toast.error("Update failed. Please try again."),
        });
    };    

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Manage Team" />
            <div className="mx-4 mt-6">
                <form onSubmit={onSubmit} className="space-y-8">
                    <div className="space-y-6 max-w-lg w-full md:w-1/2">
                        <div className="flex items-end gap-3 w-full max-w-lg">
                            <div className="w-full flex-grow">
                                <label htmlFor="name" className="block font-medium mb-1">
                                    Team Name <span className="text-red-500">*</span>
                                </label>

                                <Input
                                    id="name"
                                    placeholder="Enter your team name..."
                                    value={data.name}
                                    onChange={(e) => setData("name", e.target.value)}
                                />

                                {errors.name && (
                                    <p className="text-sm font-medium text-destructive mt-2">
                                        {errors.name}
                                    </p>
                                )}
                            </div>

                            <div className="shrink-0">
                                <Button
                                    type="submit"
                                    className="h-10"
                                    disabled={processing}
                                >
                                    {processing ? "Saving..." : "Update"}
                                </Button>
                            </div>
                        </div>
                    </div>
                </form>
                <Separator className="my-8" />
                <div className="grid md:grid-cols-4 grid-cols-2 gap-3 text-center">
                    {
                        Array.from({ length: 15 }).map((_, index) => (
                            <PlayerSkeletonDotted key={index} />
                        ))
                    }
                </div>
            </div>
        </AppLayout >
    );
}

export default ManageTeam;