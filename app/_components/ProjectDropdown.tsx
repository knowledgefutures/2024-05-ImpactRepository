'use client';
import { useState } from 'react';
import { useStore } from '@nanostores/react';
import { cn } from '~/_utils/ui';
import { Check, ChevronsUpDown } from 'lucide-react';
import { Button } from '~/_components/ui/button';
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
} from '~/_components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '~/_components/ui/popover';
import { $pubs } from '~/_store/data';
import { getProjects } from '~/_utils/pubs';
import { genPubId } from '~/_utils/strings';

type Props = {
	value: string;
	setValue: (value: string) => void;
};

export default function ProjectDropDown({ value, setValue }: Props) {
	const [open, setOpen] = useState(false);
	const [input, setInput] = useState('');

	const pubs = useStore($pubs);
	const projects = getProjects(pubs);
	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					size="lg"
					role="combobox"
					aria-expanded={open}
					className="w-full justify-between"
				>
					{value
						? projects.find((project) => project.id === value)?.title
						: 'Select project...'}
					<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-[--radix-popover-trigger-width] p-0">
				<Command>
					<CommandInput
						placeholder="Search project..."
						value={input}
						onInput={(evt) => {
							// @ts-ignore
							setInput(evt.target.value);
						}}
					/>
					{/* <CommandEmpty>No project found.</CommandEmpty> */}
					<CommandGroup>
						{projects.map((project) => (
							<CommandItem
								key={project.id}
								value={project.id}
								onSelect={(currentValue) => {
									setValue(currentValue === value ? '' : currentValue);
									setOpen(false);
								}}
							>
								<Check
									className={cn(
										'mr-2 h-4 w-4',
										value === project.id ? 'opacity-100' : 'opacity-0'
									)}
								/>
								{project.title}
							</CommandItem>
						))}
						{input && (
							<CommandItem
								onSelect={() => {
									const newId = genPubId();
									$pubs.set([
										...pubs,
										{ id: newId, pubType: 'Project', title: input, published: false },
									]);
									setValue(newId);
									setOpen(false);
									setInput('');
								}}
							>
								Create {input}
							</CommandItem>
						)}
					</CommandGroup>
				</Command>
			</PopoverContent>
		</Popover>
	);
}
