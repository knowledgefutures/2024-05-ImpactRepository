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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/_components/ui/card';
import Link from 'next/link';
import { getAuthorsByPubId, getPubHeaderText } from '~/_utils/pubs';
import PubTable from '~/_components/PubTable';

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

	const connectedConnectionIds = connections
		.filter((connection) => {
			return connection.destinationId === activePub.id;
		})
		.map((connection) => {
			return connection.sourceId;
		});
	const connectedPubs = pubs.filter((pub) => {
		return connectedConnectionIds.some((connectionId) => {
			return connectionId === pub.id;
		});
	});

	return (
		<div>
			<Breadcrumb className="hidden md:flex">
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink asChild>
							<Link href="/admin/pubs">Pubs</Link>
						</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbPage>{getPubHeaderText(activePub)}</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>
			<div className="my-4 items-center">
				<h1 className="text-lg font-semibold md:text-2xl">{getPubHeaderText(activePub)}</h1>
				{/* <div className="text-muted-foreground">
					{getAuthorsByPubId(activePub.id || '').join(', ')}
				</div> */}
			</div>

			<div className="grid auto-rows-max items-start gap-4">
				<Card className="overflow-scroll">
					<CardHeader>
						<CardTitle>Details</CardTitle>
						<CardDescription>Pub metadata</CardDescription>
					</CardHeader>
					<CardContent>
						<pre>{JSON.stringify(activePub, null, 2)}</pre>
					</CardContent>
				</Card>

				{!!childPubs.length && (
					<Card>
						<CardHeader>
							<CardTitle>Children</CardTitle>
						</CardHeader>
						<CardContent>
							<PubTable pubs={childPubs} />
						</CardContent>
					</Card>
				)}

				{!!connectedPubs.length && (
					<Card>
						<CardHeader>
							<CardTitle>Connections</CardTitle>
						</CardHeader>
						<CardContent>
							<PubTable pubs={connectedPubs} />
						</CardContent>
					</Card>
				)}

				{!!activePub.content && activePub.pubType === 'Google Doc' && (
					<Card>
						<CardHeader className="bg-muted/50">
							<CardTitle>Content</CardTitle>
						</CardHeader>
						<CardContent className="py-4">
							<div
								className="prose"
								dangerouslySetInnerHTML={{ __html: activePub.content }}
							></div>
						</CardContent>
					</Card>
				)}
			</div>
		</div>
	);
}
