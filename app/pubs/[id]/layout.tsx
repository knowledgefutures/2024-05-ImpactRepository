export default function ExternalPubLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<div className="-mt-12 relative  min-h-[calc(100vh-49px)]">
			<div className="p-12 space-y-12">{children}</div>
		</div>
	);
}
