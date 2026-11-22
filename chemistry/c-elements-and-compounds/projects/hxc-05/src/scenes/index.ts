import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Fe} from './Fe';
import {Acid} from './Acid';
import {Oxide} from './Oxide';
import {Feohtwo} from './Feohtwo';
import {Feohthree} from './Feohthree';
import {Vt} from './Vt';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['fe', Fe],
	['acid', Acid],
	['oxide', Oxide],
	['feoh2', Feohtwo],
	['feoh3', Feohthree],
	['vt', Vt],
	['review', Review],
];
