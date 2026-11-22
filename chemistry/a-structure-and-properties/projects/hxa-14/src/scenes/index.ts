import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Crystal} from './Crystal';
import {Obtain} from './Obtain';
import {UnitCell} from './UnitCell';
import {Share} from './Share';
import {Formula} from './Formula';
import {Trap} from './Trap';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['crystal', Crystal],
	['obtain', Obtain],
	['unitcell', UnitCell],
	['share', Share],
	['formula', Formula],
	['trap', Trap],
	['review', Review],
];
