import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Alkane} from './Alkane';
import {Add} from './Add';
import {Diene} from './Diene';
import {Oxid} from './Oxid';
import {Poly} from './Poly';
import {Acetylene} from './Acetylene';
import {Identify} from './Identify';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['alkane', Alkane],
	['add', Add],
	['diene', Diene],
	['oxid', Oxid],
	['poly', Poly],
	['acetylene', Acetylene],
	['identify', Identify],
	['review', Review],
];
