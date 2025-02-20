import type { FullList, TranslatedDocument } from './types';

const gender: TranslatedDocument[] = [
	{
		title: '트랜스젠더에 대해 자주 질문되는 내용들',
		titleURL: '/documents/gender/frequently_asked_questions_about_transgender_people',
		source: 'National Center for Transgender Equality',
		sourceURL: 'https://transequality.org/'
	},
	{
		title: '젠더 정체성 이해하기',
		titleURL: '/documents/gender/understanding_gender_identities',
		source: 'The Trevor Project',
		sourceURL: 'https://www.thetrevorproject.org/'
	},
	{
		title: '논바이너리들 이해하기: 존중하고 지지해주는 방법',
		titleURL:
			'/documents/gender/understanding_nonbinary_people_how_to_be_respectful_and_supportive',
		source: 'National Center for Transgender Equality',
		sourceURL: 'https://transequality.org/'
	},
	{
		title: '트랜스젠더, 젠더 정체성, 그리고 젠더 표현에 대해 이해하기',
		titleURL: '/documents/gender/transgender_people_gender_identity_gender_expression',
		source: 'American Psychological Association',
		sourceURL: 'https://www.apa.org/'
	}
];

const sexuality: TranslatedDocument[] = [
	{
		title: '섹슈얼리티에 대해 설명해보겠습니다',
		titleURL: '/documents/sexuality/sexuality_explained',
		source: 'Better Health Channel',
		sourceURL: 'https://www.betterhealth.vic.gov.au/'
	},
	{
		title: '무성애 이해하기',
		titleURL: '/documents/sexuality/understanding_asexuality',
		source: 'The Trevor Project',
		sourceURL: 'https://www.thetrevorproject.org/'
	},
	{
		title: '무성애가 마침내 의료적 낙인에서 벗어나고 있다',
		titleURL: '/documents/sexuality/asexuality_is_finally_breaking_free_from_medical_stigma',
		source: 'Scientific American',
		sourceURL: 'https://www.scientificamerican.com/'
	},
	{
		title: '무성애자 공동체 이해하기',
		titleURL: '/documents/sexuality/understanding_the_asexual_community',
		source: 'Human Rights Campaign',
		sourceURL: 'https://www.hrc.org/'
	},
	{
		title: '양성애 이해하기',
		titleURL: '/documents/sexuality/understanding_bisexuality',
		source: 'The Trevor Project',
		sourceURL: 'https://www.thetrevorproject.org/'
	}
];

const videos: TranslatedDocument[] = [
	{
		title: '성별 VS 젠더 VS 지향성',
		titleURL: '/documents/videos/sex_vs_gender_orientation',
		source: 'Psych2Go',
		sourceURL: 'https://www.youtube.com/@Psych2go'
	},
	{
		title: '팀쿡: 아이들에게 게이가 되어도 괜찮다고 보여주고 싶었다',
		titleURL: '/documents/videos/wanted_to_show_kids_it_is_ok_to_be_gay',
		source: 'CNN',
		sourceURL: 'https://www.youtube.com/@CNN'
	},
	{
		title: '트랜스젠더인 것에 대한 과학',
		titleURL: '/documents/videos/the_science_of_being_transgender',
		source: 'Powered By Rainbows™',
		sourceURL: 'https://www.youtube.com/@PoweredByRainbows'
	},
	{
		title: '트랜스젠더, 젠더 불쾌감, 그리고 젠더 확정 치료에 대해 학계는 어떻게 말하는가',
		titleURL:
			'/documents/videos/what-studies-say-about-transgender-gender-dysphoria-and-gender-affirming-care',
		source: 'Doctor Youn',
		sourceURL: 'https://www.youtube.com/@DoctorYoun'
	},
	{
		title: '저는 트랜스젠더에요',
		titleURL: '/documents/videos/im_transgender',
		source: 'storybooth',
		sourceURL: 'https://www.youtube.com/@Storybooth'
	}
];
const others: TranslatedDocument[] = [
	{
		title: '커밍아웃 핸드북',
		titleURL: '/documents/others/the-coming-out-handbook',
		source: 'The Trevor Project',
		sourceURL: 'https://www.thetrevorproject.org/'
	},
	{
		title: 'LGBTIQ 공동체 깃발',
		titleURL: '/documents/others/flags-of-the-lgbtqia-community',
		source: 'Outright International',
		sourceURL: 'https://outrightinternational.org/'
	}
];

export const fullList: FullList = {
	gender,
	sexuality,
	videos,
	others
};
