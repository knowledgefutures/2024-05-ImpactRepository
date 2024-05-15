'use client';
export const runtime = 'edge';
import { notFound, useParams } from 'next/navigation';
import { useStore } from '@nanostores/react';
import { $connections, $pubs, type Pub } from '~/_store/data';
import { slugifyString } from '~/_utils/strings';
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '~/_components/ui/breadcrumb';
import Link from 'next/link';
import { getAuthorsByPubId, getPubHeaderText } from '~/_utils/pubs';
import PubCard from '~/_components/PubCard';

export default function Pub() {
	const params = useParams<{ id: string }>();
	const pubs = useStore($pubs);
	const connections = useStore($connections);
	const activePub = pubs.find((pub) => {
		return slugifyString(pub.id) === params.id;
	});
	if (!activePub) {
		return notFound();
	}
	const childConnectionIds = connections
		.filter((connection) => {
			return connection.sourceId === activePub.id;
		})
		.map((connection) => {
			return connection.destinationId;
		});
	const childPubs = pubs.filter((pub) => {
		return childConnectionIds.some((connectionId) => {
			return connectionId === pub.id;
		});
	});
	// console.log(childPubs);

	return (
		<div>
			<div className="bg-zinc-200 -my-6 p-6 rounded">
				<Breadcrumb className="hidden md:flex">
					<BreadcrumbList>
						<BreadcrumbItem>
							<BreadcrumbLink asChild>
								<Link href="/external">Pubs</Link>
							</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator />
						<BreadcrumbItem>
							<BreadcrumbPage>{getPubHeaderText(activePub)}</BreadcrumbPage>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>
				<div className="my-4 space-y-1">
					<h1 className="text-lg font-semibold md:text-2xl">
						{getPubHeaderText(activePub)}
					</h1>
					<div className="text-muted-foreground">
						{getAuthorsByPubId(activePub.id || '').join(', ')}
					</div>
				</div>
				<div className="font-mono flex justify-between">
					<div>
						{activePub.pubType} · {activePub.id}
					</div>
					<div>
						{activePub.published ? 'Published' : 'Unpublished'} ·{' '}
						{activePub.pubType === 'Google Doc' && (
							<a href={activePub.url} target="_blank">
								Go to Google Doc
							</a>
						)}
					</div>
				</div>
			</div>
			<div className="my-20 px-6">
				{['Project', 'Topic', 'Audience'].includes(activePub.pubType) && (
					<>
						<div className="prose prose-xl text-muted-foreground">
							{activePub.description}
						</div>
						<div>
							{childPubs.map((childPub) => {
								return (
									<PubCard key={childPub.id} pub={childPub}  />
								);
							})}
						</div>
					</>
				)}
				{activePub.pubType === 'Document' && (
					<div className="flex w-full">
						<div className="flex-1">
							{activePub.content && (
								<div className="prose prose-lg font-serif">{activePub.content}</div>
							)}
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
