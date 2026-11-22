import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Kind} from './Kind';
import {Hydrogen} from './Hydrogen';
import {Speed} from './Speed';
import {Sacrifice} from './Sacrifice';
import {Current} from './Current';
import {Check} from './Check';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['kind', Kind],
	['hydrogen', Hydrogen],
	['speed', Speed],
	['sacrifice', Sacrifice],
	['current', Current],
	['check', Check],
	['review', Review],
];
