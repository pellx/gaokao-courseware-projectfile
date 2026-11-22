import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Read} from './Read';
import {Five} from './Five';
import {Use} from './Use';
import {Onestep} from './Onestep';
import {Color} from './Color';
import {Gas} from './Gas';
import {Method} from './Method';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['read', Read],
	['five', Five],
	['use', Use],
	['onestep', Onestep],
	['color', Color],
	['gas', Gas],
	['method', Method],
	['review', Review],
];
