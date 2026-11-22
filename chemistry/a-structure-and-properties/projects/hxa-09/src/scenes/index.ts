import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Feature} from './Feature';
import {SigmaPi} from './SigmaPi';
import {Count} from './Count';
import {Polar} from './Polar';
import {Params} from './Params';
import {Energy} from './Energy';
import {Trap} from './Trap';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['feature', Feature],
	['sigmapi', SigmaPi],
	['count', Count],
	['polar', Polar],
	['params', Params],
	['energy', Energy],
	['trap', Trap],
	['review', Review],
];
