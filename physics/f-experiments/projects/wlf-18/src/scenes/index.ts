import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Aim} from './Aim';
import {Principle} from './Principle';
import {Reed} from './Reed';
import {Alarm} from './Alarm';
import {Ldr} from './Ldr';
import {LightSwitch} from './LightSwitch';
import {Parts} from './Parts';
import {Build} from './Build';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['aim', Aim],
	['principle', Principle],
	['reed', Reed],
	['alarm', Alarm],
	['ldr', Ldr],
	['lightswitch', LightSwitch],
	['parts', Parts],
	['build', Build],
	['review', Review],
];
