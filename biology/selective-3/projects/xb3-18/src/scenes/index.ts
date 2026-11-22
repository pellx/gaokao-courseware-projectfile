import React from 'react';
import type {T} from '../timeline';
import {Attitude} from './Attitude';
import {Ban} from './Ban';
import {Clone} from './Clone';
import {Ethics} from './Ethics';
import {Intro} from './Intro';
import {Ivf} from './Ivf';
import {Review} from './Review';
import {Weapon} from './Weapon';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['clone', Clone],
	['attitude', Attitude],
	['ivf', Ivf],
	['weapon', Weapon],
	['ban', Ban],
	['ethics', Ethics],
	['review', Review],
];
