'use client';
import Image from 'next/image';
import Link from 'next/link';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '~/_components/ui/dropdown-menu';
import kfDoc from '~/_assets/kfDoc.svg';
import { clearLocalAtoms } from '~/_store/data';

export default function Header() {
	return (
		<nav className="sticky top-0 border-b border-slate-800 px-8 py-3 font-mono mb-12 bg-white z-10">
			<a
				className="absolute left-2 top-[10px] "
				href="https://www.knowledgefutures.org/rd/ds004"
			>
				<Image src={kfDoc} width={24} height={24} alt="KF Demo Documentation" />
			</a>
			<div className="max-w-screen-xl m-auto flex justify-between">
				<h1>
					<Link href="/">Impact Repository</Link>
				</h1>
				<div className="flex space-x-8">
					<Link href="/submit">Submit</Link>
					<Link href="/admin/pubs">Admin</Link>
					<Link href="/explore">Explore</Link>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<div className="rounded-full bg-slate-300 ml-2 h-6 w-6 cursor-pointer" />
						</DropdownMenuTrigger>
						<DropdownMenuContent align="end">
							<DropdownMenuItem onClick={clearLocalAtoms}>
								Reset Demo
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</div>
		</nav>
	);
}
