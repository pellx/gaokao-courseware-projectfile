import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Rel} from './Rel';
import {Elec} from './Elec';
import {Atom} from './Atom';
import {Titr} from './Titr';
import {Expr} from './Expr';
import {Err} from './Err';
import {Norm} from './Norm';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['rel', Rel],
	['elec', Elec],
	['atom', Atom],
	['titr', Titr],
	['expr', Expr],
	['err', Err],
	['norm', Norm],
	['review', Review],
];
