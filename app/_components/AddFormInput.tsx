'use client';

import { useState } from 'react';
import ProjectDropDown from './ProjectDropdown';
import { Textarea } from '~/_components/ui/textarea';
import PendingItem from './PendingItem';
import { Button } from '~/_components/ui/button';
import { getPubById } from '~/_utils/pubs';
import { $connections, $people, $pubs, ConnectionLibrary, PubLibrary } from '~/_store/data';
import { genPubId, slugifyString } from '~/_utils/strings';
import { Alert, AlertDescription, AlertTitle } from '~/_components/ui/alert';
import { CircleCheck } from 'lucide-react';
import Link from 'next/link';
import { useStore } from '@nanostores/react';
// import { getGoogleDocById } from '~/_utils/gdocs';

type Props = {
	projectId: string;
	onSuccess: (value: boolean) => void
};
export default function AddFormInput({ projectId, onSuccess }: Props) {
	const [items, setItems] = useState<PubLibrary>([]);
	const [input, setInput] = useState('');
	// const [success, setSuccess] = useState(false);
	// const pubs = useStore($pubs);
	// const connections = useStore($connections);
	// console.log(JSON.stringify(pubs));
	// console.log(JSON.stringify(connections));
	const handleKeyDown = async (evt: any) => {
		if (evt.keyCode == 13 && evt.shiftKey == false) {
			evt.preventDefault();
			let pubTypeGuess = '';
			let additionalFields = {};
			if (input.includes('github.com')) {
				pubTypeGuess = 'Git Repo';
				const parts = input.split('github.com/')[1].split('/');
				const org = parts[0];
				const repo = parts[1];
				const res = await fetch(`https://api.github.com/repos/${org}/${repo}`);
				const apiData = await res.json();
				additionalFields = {
					title: apiData.full_name,
					stars: apiData.stargazers_count,
					url: input,
					content: undefined,
				};
			}
			// if (input.includes('docs.google.com')) {
			// 	pubTypeGuess = 'Google Doc';
			// 	const parts = input.split('document/d/')[1].split('/');
			// 	const docId = parts[0];
			// 	const [docTitle, docContent] = await getGoogleDocById(docId);
			// 	additionalFields = {
			// 		title: docTitle,
			// 		content: docContent,
			// 		url: input,
			// 	};
			// }
			if (input.includes('twitter.com')) {
				pubTypeGuess = 'Tweet';
			}
			console.log('pubTypeGuess', pubTypeGuess);
			// setSuccess(false);
			onSuccess(false)
			setItems([
				...items,
				{
					id: genPubId(),
					pubType: pubTypeGuess,
					published: false,
					content: input,
					...additionalFields,
				},
			]);
			setInput('');
		}
	};
	const onItemDelete = (id: string) => {
		setItems(
			items.filter((item) => {
				return item.id !== id;
			})
		);
	};
	const onItemSetType = (id: string, pubType: string) => {
		setItems(
			items.map((item) => {
				if (item.id === id) {
					return { ...item, pubType: pubType };
				} else {
					return item;
				}
			})
		);
	};
	const addItems = () => {
		$pubs.set([...$pubs.get(), ...items]);
		const newConnections = items.reduce((prev: ConnectionLibrary, item) => {
			return [
				...prev,
				{ sourceId: item.id, destinationId: $people.get()[0].id },
				{ sourceId: projectId, destinationId: item.id },
			];
		}, []);
		$connections.set([...$connections.get(), ...newConnections]);
		setItems([]);
		onSuccess(true);
		// setSuccess(true);
	};
	return (
		<>
			<Textarea
				placeholder="Add text, links, or files..."
				className="resize-none my-8 text-"
				value={input}
				onChange={(evt) => {
					setInput(evt.target.value);
				}}
				onKeyDown={handleKeyDown}
			/>

			{items.length > 0 && (
				<>
					<hr />
					{items.map((item) => {
						return (
							<PendingItem
								key={item.id}
								item={item}
								onItemDelete={onItemDelete}
								onItemSetType={onItemSetType}
							/>
						);
					})}
					<div className="text-right my-12">
						<Button onClick={addItems}>Add to {getPubById(projectId)?.title}</Button>
					</div>
				</>
			)}
		</>
	);
}
