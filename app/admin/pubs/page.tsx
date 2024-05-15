'use client';
import { useStore } from '@nanostores/react';
import { ListFilter, MoreVertical } from 'lucide-react';
import { useState } from 'react';
import { Button } from '~/_components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '~/_components/ui/tabs';
import { Card, CardContent } from '~/_components/ui/card';
import { $pubTypeLibrary, $pubs } from '~/_store/data';
// import { getAuthorsByPubId } from '~/_utils/pubs';
import PubTable from '~/_components/PubTable';

export default function AdminPubs() {
	const [tabValue, setTabValue] = useState('Project');
	const pubs = useStore($pubs);
	const pubTypes = useStore($pubTypeLibrary);
	const activePubs = pubs.filter((pub) => {
		if (tabValue === 'All') {
			return true;
		}
		return pub.pubType === tabValue;
	});
	return (
		<div>
			<div className="flex items-center">
				<h1 className="text-lg font-semibold md:text-2xl">Pubs</h1>
			</div>
			<div className="flex items-center justify-between">
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
				<Button variant="outline" size="sm" className="h-8 gap-1">
					<ListFilter className="h-3.5 w-3.5" />
					<span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Filter</span>
				</Button>
			</div>
			<Card>
				<CardContent className="py-4">
					<PubTable pubs={activePubs} />
				</CardContent>
			</Card>
			{/* tabs by type */}
			{/* List (table?) of pubs, with some fields, action button dropdown */}
		</div>
	);
}
