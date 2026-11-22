import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Entropy} from './Entropy';
import {Gibbs} from './Gibbs';
import {Happen} from './Happen';
import {Ammonia} from './Ammonia';
import {Real} from './Real';
import {Choose} from './Choose';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['entropy', Entropy],
	['dg', Gibbs],
	['happen', Happen],
	['nh3', Ammonia],
	['real', Real],
	['choose', Choose],
	['review', Review],
];
