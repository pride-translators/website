import type { FullList, TranslatedDocument } from './types';

const transgender: TranslatedDocument[] = [
	{
		title: '트랜스젠더에 대해 자주 질문되는 내용들',
		titleURL: '',
		source: 'National Center for Transgender Equality',
		sourceURL: 'https://transequality.org/'
	},
	{
		title: '트랜스젠더, 젠더 정체성, 그리고 젠더 표현에 대해 이해하기',
		titleURL: '',
		source: 'American Psychological Association',
		sourceURL: 'https://www.apa.org/'
	},
	{
		title: '논바이너리들 이해하기: 존중하고 지지해주는 방법',
		titleURL: '',
		source: 'National Center for Transgender Equality',
		sourceURL: 'https://transequality.org/'
	}
];

const sexuality: TranslatedDocument[] = [
	{
		title: '섹슈얼리티에 대해 설명해보겠습니다',
		titleURL: '',
		source: 'Better Health Channel',
		sourceURL: 'https://www.betterhealth.vic.gov.au/'
	},
	{
		title: '무성애자 그룹 이해하기',
		titleURL: '',
		source: 'Human Rights Campaign',
		sourceURL: 'https://www.hrc.org/'
	},
	{
		title: '무성애 이해하기',
		titleURL: '',
		source: 'The Trevor Project',
		sourceURL: 'https://www.thetrevorproject.org/'
	},
	{
		title: '무성애가 마침내 의료적 낙인에서 벗어나고 있다',
		titleURL: '',
		source: 'Scientific American',
		sourceURL: 'https://www.scientificamerican.com/'
	}
];

const videos: TranslatedDocument[] = [
	{
		title: '팀쿡: 게이가 되어도 괜찮다고 보여주고 싶었다',
		titleURL: '',
		source: 'CNN',
		sourceURL: 'https://www.youtube.com/@CNN'
	},
	{
		title: '저는 트랜스젠더예요',
		titleURL: '',
		source: 'stodybooth',
		sourceURL: 'https://www.youtube.com/@Storybooth'
	},
	{
		title: '트랜스젠더, 젠더 불쾌감, 그리고 젠더 획일화 치료에 대해 학계는 어떻게 말하는가',
		titleURL: '',
		source: 'Doctor Youn',
		sourceURL: 'https://www.youtube.com/@DoctorYoun'
	}
];
const others: TranslatedDocument[] = [
	{
		title: '커밍아웃 핸드북',
		titleURL: '',
		source: 'The Trevor Project',
		sourceURL: 'https://www.thetrevorproject.org/'
	}
];

export const fullList: FullList = {
	transgender,
	sexuality,
	videos,
	others
};
