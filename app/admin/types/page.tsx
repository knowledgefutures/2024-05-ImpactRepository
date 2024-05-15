'use client';

import { useStore } from '@nanostores/react';
import { $pubTypeLibrary } from '~/_store/data';
import TypeBlock from './TypeBlock';

export default function AdminTypes() {
	const types = useStore($pubTypeLibrary);
	return (
		<div>
			<div className="flex items-center">
				<h1 className="text-lg font-semibold md:text-2xl">Types</h1>
			</div>
			<div className="grid grid-cols-3 gap-6 my-8">
				{types.map((type) => {
					return <TypeBlock key={type.name} type={type} />;
				})}
			</div>
		</div>
	);
}
