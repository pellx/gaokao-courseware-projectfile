import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Max} from './Max';
import {Pred} from './Pred';
import {Feat} from './Feat';
import {Energy} from './Energy';
import {Emit} from './Emit';
import {Recv} from './Recv';
import {Spec} from './Spec';
import {Band} from './Band';
import {Xray} from './Xray';
import {Impact} from './Impact';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['max', Max],
	['pred', Pred],
	['feat', Feat],
	['energy', Energy],
	['emit', Emit],
	['recv', Recv],
	['spec', Spec],
	['band', Band],
	['xray', Xray],
	['impact', Impact],
	['review', Review],
];
