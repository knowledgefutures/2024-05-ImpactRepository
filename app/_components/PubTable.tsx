'use client';
import { MoreVertical } from 'lucide-react';
import { Button } from '~/_components/ui/button';
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
import { $pubs, type PubLibrary } from '~/_store/data';
import { getAuthorsByPubId, getPubHeaderText } from '~/_utils/pubs';
import Link from 'next/link';
import { slugifyString } from '~/_utils/strings';

type Props = {
	pubs: PubLibrary;
};
export default function PubTable({ pubs }: Props) {
	const togglePublish = (pubId: string) => {
		$pubs.set(
			pubs.map((pub) => {
				if (pub.id === pubId) {
					return { ...pub, published: !pub.published };
				}
				return pub;
			})
		);
	};
	return (
		<Table>
			<TableHeader>
				<TableRow className="pointer-events-none">
					<TableHead>Title</TableHead>
					<TableHead className="table-cell">Type</TableHead>
					<TableHead className="table-cell">Status</TableHead>
					<TableHead className="text-right">Actions</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{pubs.map((pub) => {
					return (
						<TableRow key={pub.id} className="">
							<TableCell className="max-w-48">
								<div className="font-medium">
									<Link
										href={`/admin/pubs/${slugifyString(pub.id)}`}
										className="hover:underline"
									>
										{getPubHeaderText(pub)}
									</Link>
								</div>
								{/* <div className="hidden text-sm text-muted-foreground md:inline">
									{getAuthorsByPubId(pub.id).join(', ')}
								</div> */}
							</TableCell>
							<TableCell className="hidden sm:table-cell">{pub.pubType}</TableCell>
							<TableCell className="hidden sm:table-cell">
								{pub.published ? 'Published' : 'Not Published'}
							</TableCell>
							<TableCell className="text-right">
								<DropdownMenu>
									<DropdownMenuTrigger asChild>
										<Button size="icon" variant="outline" className="h-8 w-8">
											<MoreVertical className="h-3.5 w-3.5" />
											<span className="sr-only">More</span>
										</Button>
									</DropdownMenuTrigger>
									<DropdownMenuContent align="end">
										<DropdownMenuItem>Edit</DropdownMenuItem>
										<DropdownMenuItem>Export</DropdownMenuItem>
										<DropdownMenuItem
											onClick={() => {
												togglePublish(pub.id);
											}}
										>
											{pub.published ? 'Unpublish' : 'Publish'}
										</DropdownMenuItem>
										<DropdownMenuSeparator />
										<DropdownMenuItem>Delete</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>
							</TableCell>
						</TableRow>
					);
				})}
			</TableBody>
		</Table>
	);
}
