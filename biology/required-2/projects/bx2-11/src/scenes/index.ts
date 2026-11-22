import React from 'react';
import type {T} from '../timeline';
import {Calc} from './Calc';
import {Feature} from './Feature';
import {Guess} from './Guess';
import {Intro} from './Intro';
import {Label} from './Label';
import {Meselson} from './Meselson';
import {Method} from './Method';
import {Process} from './Process';
import {Review} from './Review';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['guess', Guess],
	['meselson', Meselson],
	['method', Method],
	['process', Process],
	['feature', Feature],
	['calc', Calc],
	['label', Label],
	['review', Review],
];
