import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem } from "@/types";
import { Head } from "@inertiajs/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

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
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema), // Connects Zod to React Hook Form
        defaultValues: {
            name: "",
        },
    });

    const onSubmit = () => {}

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create Team" />
            <div className="max-w-4xl mx-4 mt-6">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <div className="md:w-1/2 sm:w-100">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name <span className="text-red-400">*</span></FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter your team name..." {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-3 w-[100%]">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name <span className="text-red-400">*</span></FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter your team name..." {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name <span className="text-red-400">*</span></FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter your team name..." {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <Button type="submit">Submit</Button>
                    </form>
                </Form>
            </div>
        </AppLayout>
    );
}

export default CreateTeam;