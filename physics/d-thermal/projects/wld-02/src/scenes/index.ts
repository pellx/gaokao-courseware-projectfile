import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Gas} from './Gas';
import {Stat} from './Stat';
import {Dist} from './Dist';
import {Press} from './Press';
import {Ke} from './Ke';
import {Pe} from './Pe';
import {Inner} from './Inner';
import {Factor} from './Factor';
import {Clarify} from './Clarify';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['gas', Gas],
	['stat', Stat],
	['dist', Dist],
	['press', Press],
	['ke', Ke],
	['pe', Pe],
	['inner', Inner],
	['factor', Factor],
	['clarify', Clarify],
	['review', Review],
];
