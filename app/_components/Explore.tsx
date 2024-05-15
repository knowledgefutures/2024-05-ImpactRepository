import radioactiveGift from '~/_assets/radioactiveGift.png';
import { useStore } from '@nanostores/react';
import { useSearchParams } from 'next/navigation';
import autoAnimate from '@formkit/auto-animate';
import { $connections, $people, PubLibrary } from '~/_store/data';
import { Fragment, useEffect, useRef } from 'react';
import { slugifyString } from '~/_utils/strings';
import Image from 'next/image';
import PubExploreCard from './PubExploreCard';
import { connectionIsValid } from '~/_utils/pubs';

type Props = { pubs: PubLibrary; typeFilter: string };
export default function Explore({ pubs, typeFilter }: Props) {
	const connections = useStore($connections);
	const contributors = useStore($people);
	const allNodes = [...pubs, ...contributors];
	const searchParams = useSearchParams();
	const focus = searchParams.get('focus');
	const parent = useRef(null);
	useEffect(() => {
		parent.current && autoAnimate(parent.current);
	}, [parent]);
	const typesUsed: any = {};
	return (
		<div>
			<div className="">
				<div ref={parent}>
					{allNodes
						.filter((pub) => {
							if (!focus) {
								if (typeFilter && typeFilter !== 'All') {
									return pub.pubType === typeFilter;
								}
								return true;
							} else {
								const isFocus = slugifyString(pub.id) === focus;
								if (isFocus) {
									return true;
								}
								const isAnnotationOfFocus = connections.some((annotation) => {
									return (
										(slugifyString(annotation.sourceId) === focus ||
											slugifyString(annotation.destinationId) === focus) &&
										(annotation.destinationId === pub.id ||
											annotation.sourceId === pub.id)
									);
								});
								return isAnnotationOfFocus;
							}
						})
						.sort((foo, bar) => {
							if (!focus) {
								return 0;
							} else {
								if (slugifyString(foo.id) === focus) {
									return -1;
								}
								if (slugifyString(bar.id) === focus) {
									return 1;
								}
								if (foo.pubType < bar.pubType) {
									return -1;
								}
								if (foo.pubType > bar.pubType) {
									return 1;
								}
								return 0;
							}
						})
						.map((pub) => {
							if (!focus) {
								return pub;
							}
							const isFocus = slugifyString(pub.id) === focus;
							if (isFocus) {
								return pub;
							}
							if (pub.pubType === 'article') {
								return { ...pub, pubType: 'reference' };
							}
							return pub;
						})
						.map((pub, index) => {
							const firstOfType =
								focus &&
								!typesUsed[pub.pubType] &&
								pub.pubType !== 'article' &&
								index !== 0;
							typesUsed[pub.pubType] = true;
							return (
								<Fragment key={pub.id}>
									{firstOfType ? (
										<div className="capitalize text-xl ml-16">
											{pub.pubType}
										</div>
									) : null}
									<div
										className={`transition-transform
											${focus && index > 0 ? 'ml-20' : ''}
										`}
									>
										<PubExploreCard
											id={pub.id}
											// @ts-ignore
											title={pub.title || pub.name}
											pubType={focus ? undefined : pub.pubType}
											// @ts-ignore
											// @ts-ignore
											referenceId={pub.referenceId}
											// @ts-ignore
											url={pub.url}
											connections={connections.filter((annotation) => {
												return (
													(pub.id === annotation.sourceId ||
														pub.id === annotation.destinationId) &&
													connectionIsValid(annotation, allNodes)
												);
											})}
										/>
									</div>
								</Fragment>
							);
						})}
				</div>
			</div>
			<a
				href="graph"
				className="fixed bottom-0 right-0 opacity-0 hover:opacity-100 transition-opacity"
			>
				<Image src={radioactiveGift} className="w-24" alt="Link to graph view" />
			</a>
		</div>
	);
}
