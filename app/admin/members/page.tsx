'use client';
import { MoreVertical } from 'lucide-react';
import { Button } from '~/_components/ui/button';
import { Card, CardContent } from '~/_components/ui/card';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '~/_components/ui/dropdown-menu';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '~/_components/ui/table';
import { useStore } from '@nanostores/react';
import { $people } from '~/_store/data';

export default function AdminMembers() {
	const members = useStore($people);
	return (
		<div>
			<div className="flex items-center">
				<h1 className="text-lg font-semibold md:text-2xl">Members</h1>
			</div>
			<Card className="my-6">
				<CardContent className="py-4">
					<Table>
						<TableHeader>
							<TableRow className="pointer-events-none">
								<TableHead>Name</TableHead>
								<TableHead className="table-cell">Permissions</TableHead>
								<TableHead className="text-right">Options</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{members.map((member) => {
								return (
									<TableRow key={member.id} className="">
										<TableCell className="max-w-48">
											<div className="font-medium">{member.name}</div>
										</TableCell>
										<TableCell className="hidden sm:table-cell">
											Admin
										</TableCell>

										<TableCell className="text-right">
											<DropdownMenu>
												<DropdownMenuTrigger asChild>
													<Button
														size="icon"
														variant="outline"
														className="h-8 w-8"
													>
														<MoreVertical className="h-3.5 w-3.5" />
														<span className="sr-only">More</span>
													</Button>
												</DropdownMenuTrigger>
												<DropdownMenuContent align="end">
													<DropdownMenuItem>Edit</DropdownMenuItem>
													<DropdownMenuItem>Export</DropdownMenuItem>
													<DropdownMenuSeparator />
													<DropdownMenuItem>Trash</DropdownMenuItem>
												</DropdownMenuContent>
											</DropdownMenu>
										</TableCell>
									</TableRow>
								);
							})}
						</TableBody>
					</Table>
				</CardContent>
			</Card>
		</div>
	);
}
