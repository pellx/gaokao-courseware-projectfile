import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Electron} from './Electron';
import {Hydrogen} from './Hydrogen';
import {Flow} from './Flow';
import {Metalair} from './Metalair';
import {Synthesis} from './Synthesis';
import {Microbe} from './Microbe';
import {Four} from './Four';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['electron', Electron],
	['hydrogen', Hydrogen],
	['flow', Flow],
	['metalair', Metalair],
	['synthesis', Synthesis],
	['microbe', Microbe],
	['four', Four],
	['review', Review],
];
