import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Size} from './Size';
import {Avo} from './Avo';
import {Micro} from './Micro';
import {Diff} from './Diff';
import {Brown} from './Brown';
import {Therm} from './Therm';
import {Force} from './Force';
import {Clarify} from './Clarify';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['size', Size],
	['avo', Avo],
	['micro', Micro],
	['diff', Diff],
	['brown', Brown],
	['therm', Therm],
	['force', Force],
	['clarify', Clarify],
	['review', Review],
];
