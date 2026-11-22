import React from 'react';
import type {T} from '../timeline';
import {Curve} from './Curve';
import {Intro} from './Intro';
import {Nature} from './Nature';
import {Plasma} from './Plasma';
import {Process} from './Process';
import {Recog} from './Recog';
import {Recognize} from './Recognize';
import {Review} from './Review';
import {Second} from './Second';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['recog', Recog],
	['process', Process],
	['plasma', Plasma],
	['recognize', Recognize],
	['second', Second],
	['curve', Curve],
	['nature', Nature],
	['review', Review],
];
