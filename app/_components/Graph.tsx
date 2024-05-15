'use client';
import dynamic from 'next/dynamic';
import { useStore } from '@nanostores/react';
import { Switch } from '~/_components/ui/switch';

import { $connections, $people, $pubs, PubLibrary } from '~/_store/data';
import { useState } from 'react';

const ForceGraph3D = dynamic(() => import('react-force-graph-3d'), {
	ssr: false,
});

export default function Graph() {
	const [showAudience, setShowAudience] = useState(false);
	const pubs = useStore($pubs);
	const contributors = useStore($people);
	const connections = useStore($connections);
	const allNodes = [...pubs, ...contributors].filter((pub) => {
		if (pub.pubType === 'Audience') {
			return showAudience;
		}
		return true;
	});
	const graph = {
		nodes: allNodes,
		links: connections.filter((link) => {
			if (link.sourceId.includes('audience')) {
				return showAudience;
			}
			return true;
		}),
	};
	return (
		<div className="">
			<ForceGraph3D
				graphData={graph}
				backgroundColor="#131313"
				showNavInfo={false}
				height={700}
				linkSource="sourceId"
				linkTarget="destinationId"
				nodeAutoColorBy="pubType"
				enableNodeDrag={false}
				nodeLabel={(node) => {
					return `${node.pubType || 'Contributor'}: ${
						node.title || node.name || node.id
					}`;
				}}
				nodeVal={(node) => {
					if (node.pubType === 'Project') {
						return 3;
					}
					return 1;
				}}
			/>
			{/* <div>
				<div className="dark prose text-gray-400" >
					<div>Audience</div>
					<Switch
						checked={showAudience}
						onCheckedChange={(evt) => {
							setShowAudience(evt);
						}}
					/>
				</div>
			</div> */}
		</div>
	);
}
