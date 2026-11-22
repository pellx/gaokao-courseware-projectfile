import React from 'react';
import type {T} from '../timeline';
import {Exp} from './Exp';
import {Explain} from './Explain';
import {F2} from './F2';
import {Intro} from './Intro';
import {Law} from './Law';
import {Rediscover} from './Rediscover';
import {Review} from './Review';
import {Success} from './Success';
import {Testcross} from './Testcross';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['exp', Exp],
	['explain', Explain],
	['f2', F2],
	['testcross', Testcross],
	['law', Law],
	['success', Success],
	['rediscover', Rediscover],
	['review', Review],
];
