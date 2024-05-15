'use client';

import Link from 'next/link';
import { type Pub } from '~/_store/data';
import { getAuthorsByPubId, getPubHeaderText } from '~/_utils/pubs';
import { slugifyString } from '~/_utils/strings';

type Props = {
	pub: Pub;
};

export default function PubCard({ pub }: Props) {
	const contributors = getAuthorsByPubId(pub.id);
	return (
		<div className="prose my-8 border-l pl-4">
			<h4>
				<Link
					href={`/pubs/${slugifyString(pub.id)}`}
					className="no-underline hover:underline"
				>
					{getPubHeaderText(pub)}
				</Link>
			</h4>
			{contributors.length > 0 && (
				<div className="text-muted-foreground">Contributors: {contributors.join(', ')}</div>
			)}
			<div className="text-muted-foreground font-mono">
				type: {pub.pubType} · {pub.published ? 'Published' : 'Unpublished'}
			</div>
		</div>
	);
}
