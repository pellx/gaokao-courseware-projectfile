import React from 'react';
import type {T} from '../timeline';
import {Apply} from './Apply';
import {Compare} from './Compare';
import {Concept} from './Concept';
import {Idea} from './Idea';
import {Intro} from './Intro';
import {Newprot} from './Newprot';
import {Review} from './Review';
import {Target} from './Target';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['concept', Concept],
	['idea', Idea],
	['target', Target],
	['compare', Compare],
	['apply', Apply],
	['newprot', Newprot],
	['review', Review],
];
