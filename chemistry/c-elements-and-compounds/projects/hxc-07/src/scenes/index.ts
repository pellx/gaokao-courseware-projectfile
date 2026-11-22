import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Alloy} from './Alloy';
import {Steel} from './Steel';
import {Al} from './Al';
import {Newalloy} from './Newalloy';
import {Flow} from './Flow';
import {Calc} from './Calc';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['alloy', Alloy],
	['steel', Steel],
	['al', Al],
	['newalloy', Newalloy],
	['flow', Flow],
	['calc', Calc],
	['review', Review],
];
