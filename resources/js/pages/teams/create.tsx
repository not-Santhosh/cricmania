import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem } from "@/types";
import { Head, useForm } from "@inertiajs/react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Separator } from "@/components/ui/separator";
import PlayerSkeleton from "@/components/player-skeleton";

export const formSchema = z.object({
    name: z.string()
        .min(2, {
            message: "Username must be at least 2 characters.",
        })
        .max(50, {
            message: "Username cannot exceed 50 characters.",
        }),
});

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: "Create Team",
        href: "/teams",
    }
];

const CreateTeam = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
    });

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        post(route("teams.store"), {
            preserveScroll: true,
            onSuccess: () => {
                reset(); // optional: reset form after success
            },
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create Team" />
            <div className="mx-4 mt-6">
                <form onSubmit={onSubmit} className="space-y-8">
                    <div className="space-y-6 max-w-lg w-full md:w-1/2">
                        <div className="flex items-end gap-3 w-full max-w-lg">

                            {/* INPUT */}
                            <div className="w-full flex-grow">
                                <label
                                    htmlFor="name"
                                    className="block font-medium mb-1"
                                >
                                    Team Name <span className="text-red-500">*</span>
                                </label>

                                <Input
                                    id="name"
                                    placeholder="Enter your team name..."
                                    value={data.name}
                                    onChange={(e) => setData("name", e.target.value)}
                                />

                                {/* ERROR MESSAGE */}
                                {errors.name && (
                                    <p className="text-sm font-medium text-destructive mt-2">
                                        {errors.name}
                                    </p>
                                )}
                            </div>

                            {/* BUTTON */}
                            <div className="shrink-0">
                                <Button
                                    type="submit"
                                    className="h-10"
                                    disabled={processing}
                                >
                                    {processing ? "Saving..." : "Create Team"}
                                </Button>
                            </div>
                        </div>
                    </div>
                </form>
                <Separator className="my-8"/>
                <div className="grid md:grid-cols-4 grid-cols-2 gap-3 text-center">
                    {
                        Array.from({ length: 15 }).map((_, index) => (
                            <PlayerSkeleton key={index} />
                        ))
                    }
                </div>
            </div>
        </AppLayout>
    );
}

export default CreateTeam;