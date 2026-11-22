import React from 'react';
import type {T} from '../timeline';
import {Bond} from './Bond';
import {Convert} from './Convert';
import {Intro} from './Intro';
import {Reaction} from './Reaction';
import {Review} from './Review';
import {Source} from './Source';
import {Structure} from './Structure';
import {Traps} from './Traps';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['structure', Structure],
	['bond', Bond],
	['convert', Convert],
	['source', Source],
	['reaction', Reaction],
	['traps', Traps],
	['review', Review],
];
