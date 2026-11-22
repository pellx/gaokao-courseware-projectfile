import React from 'react';
import {CoverLayout} from './components/CoverLayout';
import {EP} from './episode';

export const Cover: React.FC<{w: number; h: number}> = ({w, h}) => (
	<CoverLayout
		c={{
			subject: EP.subject,
			badge: EP.cover.badge,
			book: EP.book,
			title: EP.cover.title,
			kicker: EP.cover.kicker,
			sub: `${EP.points.length}大考点·每点讲透怎么考`,
			points: EP.points,
			photo: EP.cover.photo,
			photoPos: EP.cover.photoPos,
			photoTag: EP.cover.photoTag,
			credit: EP.cover.credit,
		}}
		w={w}
		h={h}
	/>
);
