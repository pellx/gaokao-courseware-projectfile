import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {SeriesIU} from './SeriesIU';
import {ParIU} from './ParIU';
import {SeriesR} from './SeriesR';
import {ParR} from './ParR';
import {Compare} from './Compare';
import {MeterG} from './MeterG';
import {VoltM} from './VoltM';
import {AmpM} from './AmpM';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['seriesIU', SeriesIU],
	['parIU', ParIU],
	['seriesR', SeriesR],
	['parR', ParR],
	['compare', Compare],
	['meterG', MeterG],
	['volt', VoltM],
	['amp', AmpM],
	['review', Review],
];
