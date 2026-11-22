import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Unstable} from './Unstable';
import {Oxid} from './Oxid';
import {Calc} from './Calc';
import {Industry} from './Industry';
import {Rain} from './Rain';
import {Treat} from './Treat';
import {Cycle} from './Cycle';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['unstable', Unstable],
	['oxid', Oxid],
	['calc', Calc],
	['industry', Industry],
	['rain', Rain],
	['treat', Treat],
	['cycle', Cycle],
	['review', Review],
];
