'use client';

import { useState } from 'react';
import ProjectDropDown from './ProjectDropdown';
import { getPubById } from '~/_utils/pubs';
import { slugifyString } from '~/_utils/strings';
import { Alert, AlertDescription, AlertTitle } from '~/_components/ui/alert';
import { CircleCheck } from 'lucide-react';
import Link from 'next/link';
import AddFormInput from './AddFormInput';

export default function AddForm() {
	const [projectId, setProjectId] = useState('');
	const [success, setSuccess] = useState(false);

	return (
		<>
			<ProjectDropDown value={projectId} setValue={setProjectId} />
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
						<AlertTitle>New work added to {getPubById(projectId)?.title}</AlertTitle>
						<AlertDescription>
							<Link
								href={`/admin/pubs/${slugifyString(projectId)}`}
								className="underline"
							>
								Click here to manage project.
							</Link>
						</AlertDescription>
					</Alert>
				</>
			)}
		</>
	);
}
