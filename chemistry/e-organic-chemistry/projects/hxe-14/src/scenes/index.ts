import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Bond} from './Bond';
import {Diff} from './Diff';
import {Aldol} from './Aldol';
import {Ozone} from './Ozone';
import {Grignard} from './Grignard';
import {Ring} from './Ring';
import {Steps} from './Steps';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['bond', Bond],
	['diff', Diff],
	['aldol', Aldol],
	['ozone', Ozone],
	['grignard', Grignard],
	['ring', Ring],
	['steps', Steps],
	['review', Review],
];
