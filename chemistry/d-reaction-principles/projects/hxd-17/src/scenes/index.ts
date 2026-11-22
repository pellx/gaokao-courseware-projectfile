import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Chloralkali} from './Chloralkali';
import {Plate} from './Plate';
import {Refine} from './Refine';
import {Metal} from './Metal';
import {Membrane} from './Membrane';
import {Bipolar} from './Bipolar';
import {Conc} from './Conc';
import {Method} from './Method';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['chloralkali', Chloralkali],
	['plate', Plate],
	['refine', Refine],
	['metal', Metal],
	['membrane', Membrane],
	['bipolar', Bipolar],
	['conc', Conc],
	['method', Method],
	['review', Review],
];
