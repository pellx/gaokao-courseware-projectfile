import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Four} from './Four';
import {Prod} from './Prod';
import {Env} from './Env';
import {Info} from './Info';
import {Disp} from './Disp';
import {Organic} from './Organic';
import {Convert} from './Convert';
import {Pitfall} from './Pitfall';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['four', Four],
	['prod', Prod],
	['env', Env],
	['info', Info],
	['disp', Disp],
	['organic', Organic],
	['convert', Convert],
	['pitfall', Pitfall],
	['review', Review],
];
