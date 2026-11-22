import React from 'react';
import type {T} from '../timeline';
import {Chemo} from './Chemo';
import {Dark} from './Dark';
import {History} from './History';
import {Intro} from './Intro';
import {Light} from './Light';
import {Link} from './Link';
import {Review} from './Review';
import {Sudden} from './Sudden';
import {Total} from './Total';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['history', History],
	['total', Total],
	['light', Light],
	['dark', Dark],
	['link', Link],
	['sudden', Sudden],
	['chemo', Chemo],
	['review', Review],
];
