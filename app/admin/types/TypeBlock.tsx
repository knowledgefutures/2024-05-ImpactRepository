import Image from 'next/image';
import Link from 'next/link';
import {
	ChevronLeft,
	ChevronRight,
	Copy,
	CreditCard,
	Edit,
	Edit2,
	File,
	Home,
	LineChart,
	ListFilter,
	MoreVertical,
	Package,
	Package2,
	PanelLeft,
	Search,
	Settings,
	ShoppingCart,
	Truck,
	Users2,
} from 'lucide-react';

import { Button } from '~/_components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '~/_components/ui/card';
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '~/_components/ui/dropdown-menu';
import { Input } from '~/_components/ui/input';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/_components/ui/tabs';

import { PubType } from '~/_store/data';
import { Separator } from '~/_components/ui/separator';
import { slugifyString } from '~/_utils/strings';

type Props = {
	type: PubType;
};
export default function TypeBlock({ type }: Props) {
	const basefields = ['id', 'title'];
	return (
		<Card className="overflow-hidden">
			<CardHeader className="flex flex-row items-start bg-muted/50">
				<div className="grid gap-0.5">
					<CardTitle className="group flex items-center gap-2 text-lg">
						{type.name}
					</CardTitle>
					<CardDescription>acme/{slugifyString(type.name)}</CardDescription>
				</div>
				<div className="ml-auto flex items-center gap-1">
					<Button size="icon" variant="outline" className="h-8 gap-1">
						<Edit2 className="h-3.5 w-3.5" />
					</Button>
				</div>
			</CardHeader>
			<CardContent className="p-6 text-sm">
				<div className="grid gap-3 font-mono">
					<ul className="grid gap-3">
						{[...basefields, ...type.fields].map((field) => {
							return (
								<li className="flex items-center justify-between">
									<span>{field}</span>
									<span className="text-muted-foreground">string</span>
								</li>
							);
						})}
					</ul>
				</div>
			</CardContent>
		</Card>
	);
}
