import type { FullList, TranslatedDocument } from './types';

const gender: TranslatedDocument[] = [
	{
		title: '트랜스젠더들 이해하기: 기초',
		titleURL: '/documents/gender/understanding_transgender_people_the_basics',
		source: 'National Center for Transgender Equality',
		sourceURL: 'https://transequality.org/'
	},
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
	},
	{
		title: '어린 시기부터 트랜스젠더의 뇌는 갈망하는 젠더의 뇌와 더 유사하다',
		titleURL:
			'/documents/gender/transgender_brains_are_more_like_their_desired_gender_from_an_early_age',
		source: 'Science Daily',
		sourceURL: 'https://www.sciencedaily.com'
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
		title: '양성애 이해하기',
		titleURL: '/documents/sexuality/understanding_bisexuality',
		source: 'The Trevor Project',
		sourceURL: 'https://www.thetrevorproject.org/'
	},
	{
		title: '무성애 이해하기',
		titleURL: '/documents/sexuality/understanding_asexuality',
		source: 'The Trevor Project',
		sourceURL: 'https://www.thetrevorproject.org/'
	},
	{
		title: '무성애자인 것이 무슨 의미인가요?',
		titleURL: '/documents/sexuality/what_does_it_mean_to_be_asexual',
		source: 'Cleveland Clinic',
		sourceURL: 'https://health.clevelandclinic.org/'
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
		title: '무성애자들에 관해 사람들이 가지는 10가지 오해',
		titleURL: '/documents/videos/10_things_people_get_wrong_about_asexual_people',
		source: 'Psych2Go',
		sourceURL: 'https://www.youtube.com/@Psych2go'
	},
	{
		title: '트랜스젠더로서 커밍아웃하는 것은 어려운 일이야',
		titleURL: '/documents/videos/coming_out_as_transgender_is_hard',
		source: 'Scribbs',
		sourceURL: 'https://www.youtube.com/@ScribblyHoots'
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
	},
	{
		title: '왜 셀레스트의 주인공이 트랜스젠더라고 확정되는 것이 중요한가',
		titleURL: '/documents/others/celeste-madeline-transgender-confirmed-important',
		source: 'CBR',
		sourceURL: 'https://www.cbr.com/'
	},
	{
		title:
			"그래미 시상 동안 레이디 가가는 '트랜스젠더들은 투명인간이 아니다'라고 말한다: '트랜스젠더들은 사랑받을 자격이 있습니다.'",
		titleURL: '/documents/others/lady-gaga-says-trans-rights',
		source: 'Variety',
		sourceURL: 'https://variety.com/'
	},
	{
		title: '친구모아 아일랜드 두근두근 라이프"는 동성 관계와 논바이너리 미를 허용한다',
		titleURL: '/documents/others/tomodachi-life-same-sex-relationships-and-non-binary-miis',
		source: 'nintendolife',
		sourceURL: 'https://www.nintendolife.com/'
	},
	{
		title: 'Node.js LGBTQIA+ 서사: Emelia Smith',
		titleURL: '/documents/others/nodejs-lgbtqia-stories-emelia-smith',
		source: 'Node.js Blog',
		sourceURL: 'https://nodejs.org/en/blog/'
	}
];

export const fullList: FullList = {
	gender,
	sexuality,
	videos,
	others
};
