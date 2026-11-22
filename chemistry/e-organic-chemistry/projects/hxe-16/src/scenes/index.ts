import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Sugar} from './Sugar';
import {Glucose} from './Glucose';
import {Polysac} from './Polysac';
import {Amino} from './Amino';
import {Salt} from './Salt';
import {Color} from './Color';
import {Nucleic} from './Nucleic';
import {Trap} from './Trap';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['sugar', Sugar],
	['glucose', Glucose],
	['poly', Polysac],
	['amino', Amino],
	['salt', Salt],
	['color', Color],
	['nucleic', Nucleic],
	['trap', Trap],
	['review', Review],
];
