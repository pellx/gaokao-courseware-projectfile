import React from 'react';
import type {T} from '../timeline';
import {Chromosome} from './Chromosome';
import {Chrys} from './Chrys';
import {Conditions} from './Conditions';
import {Culture} from './Culture';
import {Fusion} from './Fusion';
import {Intro} from './Intro';
import {Meaning} from './Meaning';
import {Protoplast} from './Protoplast';
import {Review} from './Review';
import {Totipotency} from './Totipotency';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['totipotency', Totipotency],
	['culture', Culture],
	['conditions', Conditions],
	['chrys', Chrys],
	['protoplast', Protoplast],
	['fusion', Fusion],
	['chromosome', Chromosome],
	['meaning', Meaning],
	['review', Review],
];
