import React from 'react';
import type {T} from '../timeline';
import {Cancer} from './Cancer';
import {Compare} from './Compare';
import {Concept} from './Concept';
import {Effect} from './Effect';
import {Feature} from './Feature';
import {Intro} from './Intro';
import {Meaning} from './Meaning';
import {Recomb} from './Recomb';
import {Review} from './Review';
import {Sickle} from './Sickle';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['sickle', Sickle],
	['concept', Concept],
	['effect', Effect],
	['cancer', Cancer],
	['feature', Feature],
	['meaning', Meaning],
	['recomb', Recomb],
	['compare', Compare],
	['review', Review],
];
