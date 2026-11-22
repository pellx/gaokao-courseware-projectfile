import React from 'react';
import type {T} from '../timeline';
import {Content} from './Content';
import {Design} from './Design';
import {Free} from './Free';
import {Intro} from './Intro';
import {Ratio} from './Ratio';
import {Review} from './Review';
import {Salt1} from './Salt1';
import {Salt2} from './Salt2';
import {Solvent} from './Solvent';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['content', Content],
	['solvent', Solvent],
	['free', Free],
	['ratio', Ratio],
	['salt1', Salt1],
	['salt2', Salt2],
	['design', Design],
	['review', Review],
];
