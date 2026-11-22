import React from 'react';
import type {T} from '../timeline';
import {Autonomic} from './Autonomic';
import {Cns} from './Cns';
import {Dual} from './Dual';
import {Glia} from './Glia';
import {Intro} from './Intro';
import {Neuron} from './Neuron';
import {Pns} from './Pns';
import {Review} from './Review';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['cns', Cns],
	['pns', Pns],
	['autonomic', Autonomic],
	['dual', Dual],
	['neuron', Neuron],
	['glia', Glia],
	['review', Review],
];
