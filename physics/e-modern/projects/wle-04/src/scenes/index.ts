import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Compton} from './Compton';
import {Momentum} from './Momentum';
import {Particle} from './Particle';
import {Duality} from './Duality';
import {DeBroglie} from './DeBroglie';
import {Verify} from './Verify';
import {Macro} from './Macro';
import {Quantum} from './Quantum';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['compton', Compton],
	['momentum', Momentum],
	['particle', Particle],
	['duality', Duality],
	['debroglie', DeBroglie],
	['verify', Verify],
	['macro', Macro],
	['quantum', Quantum],
	['review', Review],
];
