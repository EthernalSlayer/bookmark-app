import React, { useState } from 'react';

export const Context = React.createContext(null);

export const ContextProvider = (props) => {
	const [actualTag, setActualTag] = useState('');
	const [filteredVideos, setFilteredVideos] = useState([]);
	const [filteredPictures, setFilteredPictures] = useState([]);
	const [tags, setTags] = useState(['chat', 'sniper', 'cameltoe']);
	const [videos, setVideos] = useState([
		{
			type: 'video',
			version: '1.0',
			provider_name: 'Vimeo',
			provider_url: 'https://vimeo.com/',
			title: 'Le chat',
			author_name: 'Julien Piau',
			author_url: 'https://vimeo.com/julienpiau',
			is_plus: '0',
			account_type: 'basic',
			html:
				'<iframe src="https://player.vimeo.com/video/168927807?app_id=122963" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Le chat"></iframe>',
			width: 640,
			height: 360,
			duration: 64,
			description:
				'Un chat, un hippopotame et des ronces.\nA cat, a hippopotamus, and brambles.\n\nDirection & animation: Julien Piau\nhttps://julienpiau.com/\njulienandpiau@gmail.com',
			thumbnail_url: 'https://i.vimeocdn.com/video/573520156_640.webp',
			thumbnail_width: 640,
			thumbnail_height: 360,
			thumbnail_url_with_play_button:
				'https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F573520156_640.webp&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png',
			upload_date: '2016-06-01 07:54:16',
			video_id: 168927807,
			uri: '/videos/168927807',
			tag: 'chat',
		},
		{
			type: 'video',
			version: '1.0',
			provider_name: 'Vimeo',
			provider_url: 'https://vimeo.com/',
			title: 'CHAT',
			author_name: 'Ilan J. Cohen',
			author_url: 'https://vimeo.com/ilan',
			is_plus: '1',
			account_type: 'plus',
			html:
				'<iframe src="https://player.vimeo.com/video/70699729?app_id=122963" width="480" height="270" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="CHAT"></iframe>',
			width: 480,
			height: 270,
			duration: 895,
			description:
				"The complete mini-series TAG , produced by Small Bang and ARTE France Web for the Cinemacity app, is now available with English subtitles!\n\nDiscover it on http://cinemacity.arte.tv/balade/chat/\n\nLa mini-série CHAT, produite par Small Bang et ARTE France Web pour l'application Cinemacity, est désormais disponible en un bloc, avec sous titres !\n\nDécouvrez-la sur http://cinemacity.arte.tv/balade/chat/",
			thumbnail_url: 'https://i.vimeocdn.com/video/444069980_295x166.webp',
			thumbnail_width: 295,
			thumbnail_height: 166,
			thumbnail_url_with_play_button:
				'https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F444069980_295x166.webp&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png',
			upload_date: '2013-07-20 16:15:22',
			video_id: 70699729,
			uri: '/videos/70699729',
			tag: '',
		},
		{
			type: 'video',
			version: '1.0',
			provider_name: 'Vimeo',
			provider_url: 'https://vimeo.com/',
			title: 'Le Sniper',
			author_name: 'Yoann Garel',
			author_url: 'https://vimeo.com/yoanngarel',
			is_plus: '0',
			account_type: 'basic',
			html:
				'<iframe src="https://player.vimeo.com/video/25123854?app_id=122963" width="480" height="272" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Le Sniper"></iframe>',
			width: 480,
			height: 272,
			duration: 187,
			description:
				"SELECTION OFFICIELLE 2014 The Optical Theatre Festival (ITALY)\nSELECTION OFFICIELLE 2012 Shot on RED Film Festival (LOS ANGELES) / FIRST PRIZE WINNER\nSELECTION OFFICIELLE 2012 Short Short Story Film Festival (USA)\nSELECTION OFFICIELLE Open To Court 2012 (FRANCE)\nSELECTION OFFICIELLE FESTIVAL PTIT CLAP 2012 (FRANCE)\nSELECTION OFFICIELLE SESIFF 2011 (Seoul international Extreme-Short Image & Film Festival)\nSELECTION OFFICIELLE FESTIVAL FENETRE SUR COURTS 2011 (FRANCE)\nSELECTION OFFICIELLE PENICHE CINEMA 2011 (Court Bouillon / FRANCE) \n\n\nUn sniper mélomane s'installe sur le toit d'un immeuble parisien pour y attendre sa cible.\nAu travers de son objectif, le tireur se déguise en voyeur, épiant chaque appartement. \n\n\nDAVID D’INGEO - Acteur / Le sniper\nJULIE DELAUNAY - Actrice / La danseuse \n\nTOM YANG - Figurant / Le chef mafia / Chorégraphe\nAXEL AIME - Figurant / Homme de main\nJONATHAN CLEMENT - Figurant / Homme de main\nCELINE DROGOUL (ET SA FILLE) - Figurantes / La maman et sa fille\n\nYOANN GAREL - Réalisateur / Producteur / Monteur / Scénariste / FX\nMARINE MONNICHON - Assistante réalisateur\nFRED VALLET - Chef opérateur\nPAUL CHAUVIN - Assistant caméra\nTHIBAULT MARSAN - Opérateur steadycam\nPACO CUEVAS - Chef décorateur\nANTHONY TOUMI - Maquilleur\nALYSSE HALLALI - Assistante lumière\nMICKAEL COMMEREUC - Etalonneur\nVALERY PELLEGRINI & PIERRE LOUIS GUETTA - Sound Design\n\nwebsite : www.yoanngarel.com\n\nShot on Red One.\n2011 © All Rights Reserved.",
			thumbnail_url: 'https://i.vimeocdn.com/video/630756106_295x166.webp',
			thumbnail_width: 295,
			thumbnail_height: 166,
			thumbnail_url_with_play_button:
				'https://i.vimeocdn.com/filter/overlay?src0=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F630756106_295x166.webp&src1=http%3A%2F%2Ff.vimeocdn.com%2Fp%2Fimages%2Fcrawler_play.png',
			upload_date: '2011-06-15 04:10:03',
			video_id: 25123854,
			uri: '/videos/25123854',
			tag: 'sniper',
		},
	]);
	const [pictures, setPictures] = useState([
		{
			type: 'photo',
			flickr_type: 'photo',
			title: 'ZB8T0193',
			author_name: '‮‭‬bees‬',
			author_url: 'https://www.flickr.com/photos/bees/',
			width: 1024,
			height: 683,
			url: 'https://live.staticflickr.com/3123/2341623661_7c99f48bbf_b.jpg',
			web_page: 'https://www.flickr.com/photos/bees/2341623661/',
			thumbnail_url:
				'https://live.staticflickr.com/3123/2341623661_7c99f48bbf_q.jpg',
			thumbnail_width: 150,
			thumbnail_height: 150,
			web_page_short_url: 'https://flic.kr/p/4yVr8K',
			license: 'All Rights Reserved',
			license_id: 0,
			html:
				'<a data-flickr-embed="true" href="https://www.flickr.com/photos/bees/2341623661/" title="ZB8T0193 by ‮‭‬bees‬, on Flickr"><img src="https://live.staticflickr.com/3123/2341623661_7c99f48bbf_b.jpg" width="1024" height="683" alt="ZB8T0193"></a><script async src="https://embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>',
			version: '1.0',
			cache_age: 3600,
			provider_name: 'Flickr',
			provider_url: 'https://www.flickr.com/',
			tag: '',
		},
		{
			type: 'photo',
			flickr_type: 'photo',
			title: 'Escargots',
			author_name: 'herve.charpentier',
			author_url: 'https://www.flickr.com/photos/137190256@N02/',
			width: 1024,
			height: 768,
			url: 'https://live.staticflickr.com/4778/39184665550_c2160b6cda_b.jpg',
			web_page: 'https://www.flickr.com/photos/137190256@N02/39184665550/',
			thumbnail_url:
				'https://live.staticflickr.com/4778/39184665550_c2160b6cda_q.jpg',
			thumbnail_width: 150,
			thumbnail_height: 150,
			web_page_short_url: 'https://flic.kr/p/22GBDTU',
			license: 'All Rights Reserved',
			license_id: 0,
			html:
				'<a data-flickr-embed="true" href="https://www.flickr.com/photos/137190256@N02/39184665550/" title="Escargots by herve.charpentier, on Flickr"><img src="https://live.staticflickr.com/4778/39184665550_c2160b6cda_b.jpg" width="1024" height="768" alt="Escargots"></a><script async src="https://embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>',
			version: '1.0',
			cache_age: 3600,
			provider_name: 'Flickr',
			provider_url: 'https://www.flickr.com/',
			tag: '',
		},
		{
			type: 'photo',
			flickr_type: 'photo',
			title: 'Camel toe !',
			author_name: '0_______o',
			author_url: 'https://www.flickr.com/photos/64845172@N05/',
			width: 500,
			height: 400,
			url: 'https://live.staticflickr.com/6018/5914337750_123dd4ddcd.jpg',
			web_page: 'https://www.flickr.com/photos/64845172@N05/5914337750/',
			thumbnail_url:
				'https://live.staticflickr.com/6018/5914337750_123dd4ddcd_q.jpg',
			thumbnail_width: 150,
			thumbnail_height: 150,
			web_page_short_url: 'https://flic.kr/p/a1Cwyw',
			license: 'All Rights Reserved',
			license_id: 0,
			html:
				'<a data-flickr-embed="true" href="https://www.flickr.com/photos/64845172@N05/5914337750/" title="Camel toe ! by 0_______o, on Flickr"><img src="https://live.staticflickr.com/6018/5914337750_123dd4ddcd.jpg" width="500" height="400" alt="Camel toe !"></a><script async src="https://embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>',
			version: '1.0',
			cache_age: 3600,
			provider_name: 'Flickr',
			provider_url: 'https://www.flickr.com/',
			tag: 'cameltoe',
		},
	]);

	return (
		<Context.Provider
			value={{
				actualTag,
				setActualTag,
				tags,
				setTags,
				videos,
				setVideos,
				pictures,
				setPictures,
				filteredVideos,
				setFilteredVideos,
				filteredPictures,
				setFilteredPictures,
			}}
		>
			{props.children}
		</Context.Provider>
	);
};
