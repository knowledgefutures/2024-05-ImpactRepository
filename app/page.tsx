'use client';

import { useStore } from '@nanostores/react';

import { $people, $pubTypeLibrary, $pubs } from '~/_store/data';
import PubCard from '~/_components/PubCard';
import { useState } from 'react';
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from '~/_components/ui/pagination';

export default function Home() {
	const [tab, setTab] = useState('latest');
	const pubs = useStore($pubs);
	return (
		<div>
			<div className="bg-stone-300">
				<div className="px-8">
					<div className="max-w-screen-xl m-auto">
						<div className="-mt-12 py-16 prose max-w-screen-md italic text-3xl font-serif leading-[2.75rem]">
							A free and open community repository designed to make  research
							outputs of all shapes and sizes <br/> accessible, impactful, and useful.
						</div>
					</div>
				</div>
			</div>
			<div className="px-8">
				<div className="prose max-w-screen-xl m-auto">
					<nav className="my-4 flex space-x-4 text-lg">
						<div
							className={`hover:underline cursor-pointer ${
								tab === 'latest' ? 'underline' : ''
							}`}
							onClick={() => {
								setTab('latest');
							}}
						>
							Latest
						</div>
						<div>·</div>
						<div
							className={`hover:underline cursor-pointer ${
								tab === 'topics' ? 'underline' : ''
							}`}
							onClick={() => {
								setTab('topics');
							}}
						>
							Topics
						</div>
						<div>·</div>
						<div
							className={`hover:underline cursor-pointer ${
								tab === 'audience' ? 'underline' : ''
							}`}
							onClick={() => {
								setTab('audience');
							}}
						>
							Audience
						</div>
					</nav>

					<div className="mt-24">
						{tab === 'latest' &&
							pubs.slice(0, 15).map((pub) => {
								return <PubCard pub={pub} key={pub.id} />;
							})}
						{tab === 'topics' &&
							pubs
								.filter((pub) => {
									return pub.pubType === 'Topic';
								})
								.slice(0, 15)
								.map((pub) => {
									return <PubCard pub={pub} key={pub.id} />;
								})}
						{tab === 'audience' &&
							pubs
								.filter((pub) => {
									return pub.pubType === 'Audience';
								})
								.slice(0, 15)
								.map((pub) => {
									return <PubCard pub={pub} key={pub.id} />;
								})}
					</div>

					<Pagination>
						<PaginationContent>
							<PaginationItem>
								<PaginationPrevious href="#" />
							</PaginationItem>
							<PaginationItem>
								<PaginationLink href="#">1</PaginationLink>
							</PaginationItem>
							<PaginationItem>
								<PaginationLink href="#">2</PaginationLink>
							</PaginationItem>
							<PaginationItem>
								<PaginationLink href="#">3</PaginationLink>
							</PaginationItem>
							<PaginationItem>
								<PaginationEllipsis />
							</PaginationItem>
							<PaginationItem>
								<PaginationNext href="#" />
							</PaginationItem>
						</PaginationContent>
					</Pagination>
				</div>
			</div>
		</div>
	);
}
