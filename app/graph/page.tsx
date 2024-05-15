'use client';

import Image from 'next/image';
import Graph from '~/_components/Graph';

export default function Explore() {
	return (
		<div className="-mt-12 relative bg-[#131313] min-h-[calc(100vh-49px)]">
			<Graph />
		</div>
	);
}
