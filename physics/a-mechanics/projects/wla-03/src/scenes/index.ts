import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Uni} from './Uni';
import {Vlaw} from './Vlaw';
import {Area} from './Area';
import {Vx} from './Vx';
import {Vec} from './Vec';
import {Mean} from './Mean';
import {Dx} from './Dx';
import {Zero} from './Zero';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['uni', Uni],
	['vlaw', Vlaw],
	['area', Area],
	['vx', Vx],
	['vec', Vec],
	['mean', Mean],
	['dx', Dx],
	['zero', Zero],
	['review', Review],
];
