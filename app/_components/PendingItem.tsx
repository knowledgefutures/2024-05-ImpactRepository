'use client';

import { useState } from 'react';
import { Button } from '~/_components/ui/button';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '~/_components/ui/select';
import { Trash } from 'lucide-react';
import { $pubTypeLibrary, Pub } from '~/_store/data';
import { useStore } from '@nanostores/react';

type Props = {
	item: Pub;
	onItemDelete: (id: string) => void;
	onItemSetType: (id: string, pubType: string) => void;
};
export default function PendingItem({ item, onItemDelete, onItemSetType }: Props) {
	const [pubType, setPubType] = useState(item.pubType);
	const pubTypeLibrary = useStore($pubTypeLibrary);
	return (
		<div key={item.content} className="flex items-center space-x-4 my-4">
			<div className="flex-1">{item.title || item.content || item.url}</div>
			<Select
				value={pubType}
				onValueChange={(newValue) => {
					setPubType(newValue);
					onItemSetType(item.id, newValue);
				}}
			>
				<SelectTrigger className="w-[180px]">
					<SelectValue placeholder="Select PubType" />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						{pubTypeLibrary.map((pubType) => {
							return (
								<SelectItem key={pubType.name} value={pubType.name}>
									{pubType.name}
								</SelectItem>
							);
						})}
					</SelectGroup>
				</SelectContent>
			</Select>
			<Button
				variant="ghost"
				size="icon"
				onClick={() => {
					onItemDelete(item.id);
				}}
			>
				<Trash className="h-4 w-4" />
			</Button>
		</div>
	);
}
