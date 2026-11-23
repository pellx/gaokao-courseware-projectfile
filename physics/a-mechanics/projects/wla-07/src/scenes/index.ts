import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {FDef} from './FDef';
import {Cond} from './Cond';
import {KDir} from './KDir';
import {KMag} from './KMag';
import {SFric} from './SFric';
import {SMag} from './SMag';
import {Rel} from './Rel';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['fdef', FDef],
	['cond', Cond],
	['kdir', KDir],
	['kmag', KMag],
	['sfric', SFric],
	['smag', SMag],
	['rel', Rel],
	['review', Review],
];
