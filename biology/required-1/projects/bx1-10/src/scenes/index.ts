import React from 'react';
import type {T} from '../timeline';
import {Curve} from './Curve';
import {Intro} from './Intro';
import {Label} from './Label';
import {Review} from './Review';
import {Route} from './Route';
import {Secrete} from './Secrete';
import {System} from './System';
import {Traps} from './Traps';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['secrete', Secrete],
	['label', Label],
	['route', Route],
	['curve', Curve],
	['system', System],
	['traps', Traps],
	['review', Review],
];
