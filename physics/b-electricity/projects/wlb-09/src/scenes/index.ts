import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Work} from './Work';
import {Power} from './Power';
import {Joule} from './Joule';
import {Pure} from './Pure';
import {NonPure} from './NonPure';
import {Motor} from './Motor';
import {Rated} from './Rated';
import {Home} from './Home';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['work', Work],
	['power', Power],
	['joule', Joule],
	['pure', Pure],
	['nonpure', NonPure],
	['motor', Motor],
	['rated', Rated],
	['home', Home],
	['review', Review],
];
