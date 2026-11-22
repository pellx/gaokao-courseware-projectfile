import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Cn} from './Cn';
import {Packing} from './Packing';
import {Density} from './Density';
import {Unit} from './Unit';
import {Reverse} from './Reverse';
import {Distance} from './Distance';
import {Radius} from './Radius';
import {Trap} from './Trap';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['cn', Cn],
	['packing', Packing],
	['density', Density],
	['unit', Unit],
	['reverse', Reverse],
	['distance', Distance],
	['radius', Radius],
	['trap', Trap],
	['review', Review],
];
