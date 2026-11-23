import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Effect} from './Effect';
import {Setup} from './Setup';
import {Cutoff} from './Cutoff';
import {Saturate} from './Saturate';
import {Stop} from './Stop';
import {Instant} from './Instant';
import {Equation} from './Equation';
import {Explain} from './Explain';
import {Millikan} from './Millikan';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['effect', Effect],
	['setup', Setup],
	['cutoff', Cutoff],
	['saturate', Saturate],
	['stop', Stop],
	['instant', Instant],
	['equation', Equation],
	['explain', Explain],
	['millikan', Millikan],
	['review', Review],
];
