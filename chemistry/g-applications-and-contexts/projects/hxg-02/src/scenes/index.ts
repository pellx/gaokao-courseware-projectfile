import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Change} from './Change';
import {Operation} from './Operation';
import {Craft} from './Craft';
import {Substance} from './Substance';
import {Food} from './Food';
import {Life} from './Life';
import {Trap} from './Trap';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['change', Change],
	['operation', Operation],
	['craft', Craft],
	['substance', Substance],
	['food', Food],
	['life', Life],
	['trap', Trap],
	['review', Review],
];
