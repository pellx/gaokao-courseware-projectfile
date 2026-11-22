import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Pole} from './Pole';
import {Move} from './Move';
import {Anode} from './Anode';
import {Cathode} from './Cathode';
import {Types} from './Types';
import {Restore} from './Restore';
import {Calc} from './Calc';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['pole', Pole],
	['move', Move],
	['anode', Anode],
	['cathode', Cathode],
	['types', Types],
	['restore', Restore],
	['calc', Calc],
	['review', Review],
];
