import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Both} from './Both';
import {Law} from './Law';
import {Index} from './Index';
import {Speed} from './Speed';
import {Rev} from './Rev';
import {Change} from './Change';
import {Color} from './Color';
import {Prism} from './Prism';
import {Life} from './Life';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['both', Both],
	['law', Law],
	['index', Index],
	['speed', Speed],
	['rev', Rev],
	['change', Change],
	['color', Color],
	['prism', Prism],
	['life', Life],
	['review', Review],
];
