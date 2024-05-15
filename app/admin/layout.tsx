'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { LayoutPanelTop, Settings, SquareGanttChart, Users } from 'lucide-react';
import acmeLogo from '~/_assets/acmeLogo.svg';

export default function AdminLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	const pathname = usePathname();
	return (
		<div className="flex -mt-12 min-h-[calc(100vh-49px)] w-full flex-col bg-muted/40">
			<aside className="fixed top-[49px] inset-y-0 left-0 z-1 flex-col border-r bg-background flex w-[250px]">
				<div className="flex h-full max-h-screen flex-col gap-2">
					<div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
						<Link href="/" className="flex items-center gap-2 font-semibold">
							<Image className="h-7 w-7" src={acmeLogo} alt="Acme Logo" />
							<span className="">Acme Inc.</span>
						</Link>
					</div>
					<div className="flex-1">
						<nav className="grid items-start px-2 text-sm font-medium lg:px-4">
							<Link
								href="/admin/types"
								className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
									pathname.includes('/types')
										? 'bg-muted text-primary'
										: 'text-muted-foreground'
								} transition-all hover:text-primary`}
							>
								<LayoutPanelTop className="h-4 w-4" />
								Types
							</Link>
							<Link
								href="/admin/pubs"
								className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
									pathname.includes('/pubs')
										? 'bg-muted text-primary'
										: 'text-muted-foreground'
								} transition-all hover:text-primary`}
							>
								<SquareGanttChart className="h-4 w-4" />
								Pubs
							</Link>
							<Link
								href="/admin/members"
								className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
									pathname.includes('/members')
										? 'bg-muted text-primary'
										: 'text-muted-foreground'
								} transition-all hover:text-primary`}
							>
								<Users className="h-4 w-4" />
								Members
							</Link>
							<Link
								href="/admin/settings"
								className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
									pathname.includes('/settings')
										? 'bg-muted text-primary'
										: 'text-muted-foreground'
								} transition-all hover:text-primary`}
							>
								<Settings className="h-4 w-4" />
								Settings
							</Link>
						</nav>
					</div>
				</div>
			</aside>
			<main className="ml-[250px] flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
				{children}
			</main>
		</div>
	);
}
