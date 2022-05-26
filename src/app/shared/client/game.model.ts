export interface Game {
	id: string;
	description?: string;
	providerName: string;
	slug: string;
	startUrl: string;
	tag?: string;
	title: string;
	thumb: {
		url: string;
		title: string;
	};
}
