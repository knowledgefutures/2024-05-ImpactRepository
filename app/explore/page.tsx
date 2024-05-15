'use client';

import { useStore } from '@nanostores/react';
import { useState } from 'react';
import Explore from '~/_components/Explore';
import { $pubTypeLibrary, $pubs } from '~/_store/data';
import { Tabs, TabsList, TabsTrigger } from '~/_components/ui/tabs';
import Image from 'next/image';

export default function InternalLanding() {
	const [tabValue, setTabValue] = useState('Project');
	const pubs = useStore($pubs);
	const pubTypes = useStore($pubTypeLibrary);

	return (
		<div className="-mt-12 relative min-h-[calc(100vh-49px)]">
			<div className="p-12 space-y-12">
				<div className="text-[3rem] leading-[3rem]">Explore the Repository</div>

				<Tabs
					value={tabValue}
					onValueChange={(newValue) => {
						setTabValue(newValue);
					}}
					className="w-[400px] my-6"
				>
					<TabsList>
						<TabsTrigger value="All">All</TabsTrigger>
						{pubTypes.map((pubType) => {
							return (
								<TabsTrigger key={pubType.name} value={pubType.name}>
									{pubType.name}
								</TabsTrigger>
							);
						})}
					</TabsList>
				</Tabs>

				<Explore pubs={pubs} typeFilter={tabValue} />
			</div>
		</div>
	);
}
