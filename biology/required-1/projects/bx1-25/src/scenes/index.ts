import React from 'react';
import type {T} from '../timeline';
import {Aging} from './Aging';
import {Apoptosis} from './Apoptosis';
import {Autophagy} from './Autophagy';
import {Feature} from './Feature';
import {Intro} from './Intro';
import {Necrosis} from './Necrosis';
import {Review} from './Review';
import {Theory} from './Theory';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['aging', Aging],
	['feature', Feature],
	['theory', Theory],
	['apoptosis', Apoptosis],
	['necrosis', Necrosis],
	['autophagy', Autophagy],
	['review', Review],
];
