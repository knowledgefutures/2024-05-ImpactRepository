'use client';

import { type Pub } from '~/_store/data';
import { Button } from '~/_components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '~/_components/ui/dropdown-menu';
import { Alert, AlertDescription, AlertTitle } from '~/_components/ui/alert';
import { getAuthorsByPubId, getPubById, getPubHeaderText } from '~/_utils/pubs';
import { slugifyString } from '~/_utils/strings';
import { Textarea } from '~/_components/ui/textarea';
import AddFormInput from './AddFormInput';
import { useState } from 'react';
import { CircleCheck } from 'lucide-react';

type Props = {
	projectId: string;
};

export default function AddFormDropdown({ projectId }: Props) {
	const [success, setSuccess] = useState(false);
	if (!projectId) {
		return null;
	}
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline">Add</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" className="p-4 max-w-4xl">
				<AddFormInput
					projectId={projectId}
					onSuccess={(value: boolean) => {
						setSuccess(value);
					}}
				/>
				{success && (
					<>
						<hr />
						<Alert className="my-4">
							<CircleCheck className="h-4 w-4" color="#198754" />
							<AlertTitle>
								New work added to {getPubById(projectId)?.title}
							</AlertTitle>
						</Alert>
					</>
				)}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
