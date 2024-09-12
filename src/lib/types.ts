export enum Category {
	Gender = 'gender',
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
	gender: TranslatedDocument[];
	sexuality: TranslatedDocument[];
	videos: TranslatedDocument[];
	others: TranslatedDocument[];
}
