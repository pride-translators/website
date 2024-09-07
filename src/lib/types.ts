export enum Category {
	Transgender = 'transgender',
	Sexuality = 'sexuality',
	Videos = 'videos',
	Others = 'others'
}

export interface TranslatedDocument {
	title: string;
	titleURL: string | null;
	source: string;
	sourceURL: string | null;
}

export interface FullList {
	transgender: TranslatedDocument[];
	sexuality: TranslatedDocument[];
	videos: TranslatedDocument[];
	others: TranslatedDocument[];
}
