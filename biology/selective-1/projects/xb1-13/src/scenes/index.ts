import React from 'react';
import type {T} from '../timeline';
import {Antigen} from './Antigen';
import {BT} from './BT';
import {Cells} from './Cells';
import {Compare} from './Compare';
import {Functions} from './Functions';
import {Intro} from './Intro';
import {Lines3} from './Lines3';
import {Organs} from './Organs';
import {Review} from './Review';
import {Subs} from './Subs';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['organs', Organs],
	['cells', Cells],
	['bt', BT],
	['subs', Subs],
	['lines3', Lines3],
	['compare', Compare],
	['functions', Functions],
	['antigen', Antigen],
	['review', Review],
];
