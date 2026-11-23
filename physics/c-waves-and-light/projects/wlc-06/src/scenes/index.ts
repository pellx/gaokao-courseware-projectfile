import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Diff} from './Diff';
import {Slit} from './Slit';
import {Hole} from './Hole';
import {Grat} from './Grat';
import {Vs} from './Vs';
import {Mean} from './Mean';
import {Pol} from './Pol';
import {Trans} from './Trans';
import {Puse} from './Puse';
import {Laser} from './Laser';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['diff', Diff],
	['slit', Slit],
	['hole', Hole],
	['grat', Grat],
	['vs', Vs],
	['mean', Mean],
	['pol', Pol],
	['trans', Trans],
	['puse', Puse],
	['laser', Laser],
	['review', Review],
];
