import React from 'react';
import type {T} from '../timeline';
import {Cross1} from './Cross1';
import {Explain} from './Explain';
import {Intro} from './Intro';
import {Method} from './Method';
import {Pea} from './Pea';
import {Pollinate} from './Pollinate';
import {Review} from './Review';
import {Simulate} from './Simulate';
import {Terms} from './Terms';
import {Testcross} from './Testcross';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['pea', Pea],
	['pollinate', Pollinate],
	['terms', Terms],
	['cross', Cross1],
	['explain', Explain],
	['simulate', Simulate],
	['testcross', Testcross],
	['method', Method],
	['review', Review],
];
