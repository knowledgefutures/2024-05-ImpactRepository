import Link from 'next/link';
import linkIcon from '~/_assets/link.svg';
import type { Pub } from '~/_store/data';
import { getAuthorsByPubId } from '~/_utils/pubs';
import { slugifyString } from '~/_utils/strings';
import { Card } from '~/_components/ui/card';
import { Button } from '~/_components/ui/button';
import { Workflow } from 'lucide-react';

export default function PubExploreCard(props: Partial<Pub> & { connections: Array<any> }) {
	// @ts-ignore
	const { id = '', title, pubType, referenceId, url, connections } = props;
	const contributors = getAuthorsByPubId(id).join(', ');
	return (
		<Card className="my-4  max-w-xl flex items-top">
			<Link className="flex-auto no-underline group p-4 " href={`/pubs/${slugifyString(id)}`}>
				<h3 className="group-hover:underline font-bold">{title || referenceId}</h3>

				<div>
					{contributors || url}
					<span className="text-muted-foreground">
						{(contributors || url) && ' · '}
						{pubType && `${pubType}`}
					</span>
				</div>
			</Link>

			<Link href={`?focus=${slugifyString(id)}`} scroll={false} className="m-2">
				<Button variant="ghost">
					<Workflow className="mr-2 h-4 w-4" /> {connections.length}
				</Button>
			</Link>
		</Card>
	);
}
