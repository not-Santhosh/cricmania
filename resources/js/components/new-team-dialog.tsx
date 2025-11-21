import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Plus } from "lucide-react";

interface NewTeamDialogProps {
    title: string;
    onSubmit: (e: React.FormEvent) => void;
    data: {
        name: string;
    };
    setData: (field: string, value: any) => void;
    errors: {
        name?: string;
    };
}

const NewTeamDialog = ({ title, onSubmit, data, setData, errors }: NewTeamDialogProps) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Plus 
                    className="
                    text-gray-500 dark:text-gray-400 
                    animate-pulse 
                    transition-colors 
                    "
                    size={40}
                    strokeWidth={2}
                />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <form onSubmit={onSubmit}>
                    <DialogHeader>
                        <DialogTitle>{title}</DialogTitle>
                        <DialogDescription>
                            Give your team a name. Click save when you're done.
                        </DialogDescription>
                    </DialogHeader>

                    <div className="grid gap-4">
                        <div className="grid gap-3">
                            <label htmlFor="name" className="block font-medium mb-1">
                                Name <span className="text-red-500">*</span>
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
                    </div>

                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline" type="button">Cancel</Button>
                        </DialogClose>

                        <Button type="submit">Save changes</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog >
    );
}

export default NewTeamDialog;