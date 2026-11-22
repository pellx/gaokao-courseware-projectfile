import React from 'react';
import type {T} from '../timeline';
import {Calc1} from './Calc1';
import {Calc2} from './Calc2';
import {Diversity} from './Diversity';
import {Helix} from './Helix';
import {History} from './History';
import {Intro} from './Intro';
import {Pairing} from './Pairing';
import {Review} from './Review';
import {Unit} from './Unit';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['history', History],
	['unit', Unit],
	['helix', Helix],
	['pairing', Pairing],
	['calc1', Calc1],
	['calc2', Calc2],
	['diversity', Diversity],
	['review', Review],
];
