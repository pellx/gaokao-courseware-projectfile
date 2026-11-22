import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Tool} from './Tool';
import {Step} from './Step';
import {Indicator} from './Indicator';
import {Error} from './Error';
import {Curve} from './Curve';
import {Key} from './Key';
import {Neutral} from './Neutral';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['tool', Tool],
	['step', Step],
	['indicator', Indicator],
	['error', Error],
	['curve', Curve],
	['key', Key],
	['neutral', Neutral],
	['review', Review],
];
