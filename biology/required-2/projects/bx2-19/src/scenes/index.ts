import React from 'react';
import type {T} from '../timeline';
import {Chromo} from './Chromo';
import {Intro} from './Intro';
import {Multi} from './Multi';
import {Pitfall} from './Pitfall';
import {Prevent} from './Prevent';
import {Review} from './Review';
import {Single} from './Single';
import {Survey} from './Survey';
import {Types} from './Types';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['types', Types],
	['single', Single],
	['multi', Multi],
	['chromo', Chromo],
	['survey', Survey],
	['prevent', Prevent],
	['pitfall', Pitfall],
	['review', Review],
];
