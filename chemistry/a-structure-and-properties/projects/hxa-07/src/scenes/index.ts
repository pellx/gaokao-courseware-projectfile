import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Radius} from './Radius';
import {IeDef} from './IeDef';
import {IeTrend} from './IeTrend';
import {IeAnom} from './IeAnom';
import {IeSeq} from './IeSeq';
import {En} from './En';
import {EnUse} from './EnUse';
import {Template} from './Template';
import {Trap} from './Trap';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['radius', Radius],
	['ie1def', IeDef],
	['ietrend', IeTrend],
	['ieanom', IeAnom],
	['ieseq', IeSeq],
	['en', En],
	['enuse', EnUse],
	['template', Template],
	['trap', Trap],
	['review', Review],
];
