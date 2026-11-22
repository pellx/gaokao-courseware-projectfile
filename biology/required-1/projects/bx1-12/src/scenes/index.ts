import React from 'react';
import type {T} from '../timeline';
import {Animal} from './Animal';
import {Apply} from './Apply';
import {Device} from './Device';
import {Diffusion} from './Diffusion';
import {Intro} from './Intro';
import {Osmosis} from './Osmosis';
import {Plasmolysis} from './Plasmolysis';
import {Protein} from './Protein';
import {Protoplast} from './Protoplast';
import {Review} from './Review';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['osmosis', Osmosis],
	['device', Device],
	['animal', Animal],
	['protoplast', Protoplast],
	['plasmolysis', Plasmolysis],
	['apply', Apply],
	['diffusion', Diffusion],
	['protein', Protein],
	['review', Review],
];
