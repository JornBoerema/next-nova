import { Button } from "@repo/design-system/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@repo/design-system/components/ui/dropdown-menu";

const HomePage = () => {
	return (
		<div className="text-red-500 p-10 flex gap-5 items-center">
			<p>This is the home page</p>
			<Button>Sign up</Button>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button>Open</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuLabel>Jorn Boerema</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuItem>Profile</DropdownMenuItem>
					<DropdownMenuItem>Account settings</DropdownMenuItem>
					<DropdownMenuSeparator />
					<DropdownMenuItem>Sign out</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
};

export default HomePage;
