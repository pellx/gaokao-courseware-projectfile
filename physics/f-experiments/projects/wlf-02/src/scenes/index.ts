import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Choose} from './Choose';
import {Ruler} from './Ruler';
import {VStruct} from './VStruct';
import {VPrin} from './VPrin';
import {VRead} from './VRead';
import {MPrin} from './MPrin';
import {MRead} from './MRead';
import {MUse} from './MUse';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['choose', Choose],
	['ruler', Ruler],
	['vstruct', VStruct],
	['vprin', VPrin],
	['vread', VRead],
	['mprin', MPrin],
	['mread', MRead],
	['muse', MUse],
	['review', Review],
];
