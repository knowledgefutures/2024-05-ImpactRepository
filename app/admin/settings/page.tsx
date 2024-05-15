'use client';
import { MoreVertical } from 'lucide-react';

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '~/_components/ui/table';
import Link from 'next/link';
import { CircleUser, Menu, Package2, Search } from 'lucide-react';

import { Button } from '~/_components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '~/_components/ui/card';
import { Checkbox } from '~/_components/ui/checkbox';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '~/_components/ui/dropdown-menu';
import { Input } from '~/_components/ui/input';
import { useStore } from '@nanostores/react';
import { $people } from '~/_store/data';

export default function AdminMembers() {
	const members = useStore($people);
	return (
		<div>
			<div className="flex items-center">
				<h1 className="text-lg font-semibold md:text-2xl">Settings</h1>
			</div>
			<main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 px-4 py-8 md:gap-8">
				<div className="mx-auto grid w-full items-start  md:grid-cols-[180px_1fr] lg:grid-cols-[200px_1fr]">
					<nav className="grid gap-4 text-sm text-muted-foreground">
						<Link href="#" className="font-semibold text-primary">
							General
						</Link>
						<Link href="#">Security</Link>
						<Link href="#">Integrations</Link>
						<Link href="#">Support</Link>
						<Link href="#">Organizations</Link>
						<Link href="#">Advanced</Link>
					</nav>
					<div className="grid gap-6">
						<Card>
							<CardHeader>
								<CardTitle>Pub Namespace</CardTitle>
								<CardDescription>
									Used to identify your pub types in the network.
								</CardDescription>
							</CardHeader>
							<CardContent>
								<form>
									<Input placeholder="Pub Namespace" />
								</form>
							</CardContent>
							<CardFooter className="border-t px-6 py-4">
								<Button>Save</Button>
							</CardFooter>
						</Card>
						<Card>
							<CardHeader>
								<CardTitle>Asset Directory</CardTitle>
								<CardDescription>
									The directory within your project, in which your assets are
									located.
								</CardDescription>
							</CardHeader>
							<CardContent>
								<form className="flex flex-col gap-4">
									<Input
										placeholder="Project Name"
										defaultValue="/content/assets"
									/>
									<div className="flex items-center space-x-2">
										<Checkbox id="include" defaultChecked />
										<label
											htmlFor="include"
											className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
										>
											Allow administrators to change the directory.
										</label>
									</div>
								</form>
							</CardContent>
							<CardFooter className="border-t px-6 py-4">
								<Button>Save</Button>
							</CardFooter>
						</Card>
					</div>
				</div>
			</main>
		</div>
	);
}
