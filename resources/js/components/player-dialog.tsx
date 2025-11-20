import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Plus } from "lucide-react";

const PlayerDialog = () => {

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>
                    <Plus />Create Team
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <form onSubmit={onSubmit}>
                    <DialogHeader>
                        <DialogTitle>Add a player</DialogTitle>
                        <DialogDescription>
                            Give your team a name. Click save when you're done.
                        </DialogDescription>
                    </DialogHeader>

                    <div className="grid gap-4">
                        <div className="grid gap-3">
                            <label htmlFor="name" className="block font-medium mb-1">
                                Name <span className="text-red-500">*</span>
                            </label>

                           
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

export default PlayerDialog;
