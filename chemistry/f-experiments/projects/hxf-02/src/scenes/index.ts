import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Four} from './Four';
import {Generate} from './Generate';
import {Collect} from './Collect';
import {Dry} from './Dry';
import {Separate} from './Separate';
import {Verify} from './Verify';
import {Traps} from './Traps';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['four', Four],
	['generate', Generate],
	['collect', Collect],
	['dry', Dry],
	['separate', Separate],
	['verify', Verify],
	['traps', Traps],
	['review', Review],
];
