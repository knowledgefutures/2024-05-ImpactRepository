import type { Metadata } from 'next';
import './globals.css';
import Header from '~/_components/Header';

export const metadata: Metadata = {
	title: 'ds004 - Impact Repository',
	description: '',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<head>
				<link rel="stylesheet" href="https://use.typekit.net/hsu7aek.css" />
			</head>
			<body className="">
				<Header />
				{children}
			</body>
		</html>
	);
}
