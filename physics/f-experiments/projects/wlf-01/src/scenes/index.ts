import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Basic} from './Basic';
import {Err} from './Err';
import {Rand} from './Rand';
import {Sys} from './Sys';
import {Rel} from './Rel';
import {Sig} from './Sig';
import {Read} from './Read';
import {Data} from './Data';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['basic', Basic],
	['err', Err],
	['rand', Rand],
	['sys', Sys],
	['rel', Rel],
	['sig', Sig],
	['read', Read],
	['data', Data],
	['review', Review],
];
