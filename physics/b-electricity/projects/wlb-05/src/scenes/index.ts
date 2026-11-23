import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Diff} from './Diff';
import {WorkU} from './WorkU';
import {Equi} from './Equi';
import {Perp} from './Perp';
import {Common} from './Common';
import {Ued} from './Ued';
import {Meaning} from './Meaning';
import {NonUni} from './NonUni';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['diff', Diff],
	['workU', WorkU],
	['equi', Equi],
	['perp', Perp],
	['common', Common],
	['ued', Ued],
	['meaning', Meaning],
	['nonuni', NonUni],
	['review', Review],
];
