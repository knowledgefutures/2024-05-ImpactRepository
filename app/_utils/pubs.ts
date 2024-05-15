import { $connections, $people, $pubs, Connection, Person, Pub, PubLibrary } from '~/_store/data';

export const getProjects = (pubs: PubLibrary): PubLibrary => {
	return pubs.filter((pub) => {
		return pub.pubType === 'Project';
	});
};

export const getPubById = (id: string): Pub | undefined => {
	return $pubs.get().find((pub) => {
		return pub.id === id;
	});
};

export const getAuthorsByPubId = (pubId: string): Array<string> => {
	const connections = $connections.get();
	const people = $people.get();
	const authors = connections
		.filter((connection) => {
			return connection.sourceId === pubId;
		})
		.map((connection) => {
			const authorObject = people.find((person) => {
				return person.id === connection.destinationId;
			});
			if (!authorObject) {
				return '';
			}
			return authorObject.name;
		})
		.filter((authorName) => {
			return !!authorName;
		})
		.sort((foo, bar) => {
			if (foo < bar) {
				return -1;
			}
			if (foo > bar) {
				return 1;
			}
			return 0;
		});
	return authors;
};

export const getPubHeaderText = (pub: Pub) => {
	return pub.title || pub.url || pub.id;
};

export const connectionIsValid = (connection: Connection, pubLibrary: Array<Pub | Person>) => {
	return (
		pubLibrary.some((pub) => {
			return pub.id === connection.sourceId;
		}) &&
		pubLibrary.some((pub) => {
			return pub.id === connection.destinationId;
		})
	);
};
