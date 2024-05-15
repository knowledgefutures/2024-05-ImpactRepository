'use client';

import { useState } from 'react';
import AddForm from '~/_components/AddForm';


export default function Home() {
	const [email, setEmail] = useState('');

	return (
		<div className="px-8">
			<div className="mt-8 prose max-w-screen-md m-auto">
				<h2 className=" text-3xl">Submit your work</h2>
				<div className="prose prose-lg  my-8">
					We invite you to submit your research to our repository.
				</div>

				<AddForm />
			</div>
		</div>
	);
}
