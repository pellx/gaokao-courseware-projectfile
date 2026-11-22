import React from 'react';
import type {T} from '../timeline';
import {Fluct} from './Fluct';
import {Intro} from './Intro';
import {JCurve} from './JCurve';
import {Kapp} from './Kapp';
import {Lambda} from './Lambda';
import {Model} from './Model';
import {Rate} from './Rate';
import {Review} from './Review';
import {SCurve} from './SCurve';
import {Yeast} from './Yeast';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['model', Model],
	['jcurve', JCurve],
	['scurve', SCurve],
	['rate', Rate],
	['kapp', Kapp],
	['fluct', Fluct],
	['yeast', Yeast],
	['lambda', Lambda],
	['review', Review],
];
