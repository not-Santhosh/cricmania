import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import { ChevronDownIcon, Plus } from "lucide-react";
import { Input } from "./ui/input";
import { useForm, usePage } from "@inertiajs/react";
import { PageProps as InertiaPageProps } from "@inertiajs/core";
import { Player } from "@/types/types";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover";
import { Label } from "./ui/label";
import { useState } from "react";
import { Calendar } from "./ui/calendar";

interface PlayerDialogProps {
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

interface PageProps extends InertiaPageProps {
    players: Player;
}

const PlayerDialog = () => {

    const { props } = usePage<PageProps>();
    const { data, setData, put, processing, errors } = useForm({
        name: props.players?.name ?? "",
        jersey_no: props.players?.jersey_number ?? "",
        dob: props.players?.dob ?? "",
    });

    const [open, setOpen] = useState(false)
    
    const onSubmit = (e: React.FormEvent) => {

    }
    
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
            <DialogContent className="sm:max-w-[60vw]">
                <form onSubmit={onSubmit}>
                    <DialogHeader className="mb-5">
                        <DialogTitle>Add a player</DialogTitle>
                        <DialogDescription>
                            Give your player a name. Click save when you're done.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid grid-cols-2 gap-4 my-6 space-y-4">
                        <div className="grid gap-3">
                            <label htmlFor="name" className="block font-medium mb-1">
                                Name <span className="text-red-500">*</span>
                            </label>
                            <Input
                                id="name"
                                placeholder="Enter the player name..."
                                value={data.name}
                                onChange={(e) => setData("name", e.target.value)}
                            />
                            {errors.name && (
                                <p className="text-sm font-medium text-destructive mt-2">
                                    {errors.name}
                                </p>
                            )}
                        </div>
                        <div className="grid gap-3">
                            <label htmlFor="name" className="block font-medium mb-1">
                                Jersey No <span className="text-red-500">*</span>
                            </label>
                            <Input
                                type="number"
                                id="jersey_no"
                                placeholder="Enter the jersey number..."
                                value={data.jersey_no}
                                onChange={(e) => setData("jersey_no", e.target.value)}
                                max={999}
                            />
                            {errors.name && (
                                <p className="text-sm font-medium text-destructive mt-2">
                                    {errors.name}
                                </p>
                            )}
                        </div>
                        <div className="grid gap-3">
                            <label htmlFor="name" className="block font-medium mb-1">
                                Role <span className="text-red-500">*</span>
                            </label>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a role" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="batsman">Batsman</SelectItem>
                                        <SelectItem value="bowler">Bowler</SelectItem>
                                        <SelectItem value="all-rounder">All Rounder</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            {errors.name && (
                                <p className="text-sm font-medium text-destructive mt-2">
                                    {errors.name}
                                </p>
                            )}
                        </div>
                        <div className="grid gap-3">
                                <Label htmlFor="dob" className="px-1">
                                    Date of birth
                                </Label>
                                <Popover open={open} onOpenChange={setOpen}>
                                    <PopoverTrigger asChild>
                                    <Button
                                        variant="outline"
                                        id="date"
                                        className="w-48 justify-between font-normal"
                                    >
                                        Select date
                                        <ChevronDownIcon />
                                    </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                                    <Calendar
                                        mode="single"
                                        selected={data.dob}
                                        captionLayout="dropdown"
                                        onSelect={(date) => {
                                            setData("dob", date)
                                            setOpen(false)
                                        }}
                                    />
                                    </PopoverContent>
                                </Popover>
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

export default PlayerDialog;
