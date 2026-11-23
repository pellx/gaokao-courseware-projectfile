import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Weight} from './Weight';
import {Spin} from './Spin';
import {High} from './High';
import {Earth} from './Earth';
import {SunMass} from './SunMass';
import {Density} from './Density';
import {Neptune} from './Neptune';
import {Halley} from './Halley';
import {Center} from './Center';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['weight', Weight],
	['spin', Spin],
	['high', High],
	['earth', Earth],
	['sunm', SunMass],
	['density', Density],
	['neptune', Neptune],
	['halley', Halley],
	['center', Center],
	['review', Review],
];
