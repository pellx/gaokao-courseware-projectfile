import React from 'react';
import type {T} from '../timeline';
import {Concept} from './Concept';
import {Fate} from './Fate';
import {Feature} from './Feature';
import {Intro} from './Intro';
import {Lake} from './Lake';
import {Level1} from './Level1';
import {Level2} from './Level2';
import {Pyramid} from './Pyramid';
import {Review} from './Review';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['concept', Concept],
	['level1', Level1],
	['level2', Level2],
	['fate', Fate],
	['lake', Lake],
	['feature', Feature],
	['pyramid', Pyramid],
	['review', Review],
];
