import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Aim} from './Aim';
import {Rail} from './Rail';
import {Level} from './Level';
import {Cases} from './Cases';
import {Chute} from './Chute';
import {Req} from './Req';
import {Points} from './Points';
import {End} from './End';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['aim', Aim],
	['rail', Rail],
	['level', Level],
	['cases', Cases],
	['chute', Chute],
	['req', Req],
	['points', Points],
	['end', End],
	['review', Review],
];
