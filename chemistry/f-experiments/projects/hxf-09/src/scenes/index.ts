import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Template} from './Template';
import {Redox} from './Redox';
import {Precip} from './Precip';
import {Complex} from './Complex';
import {Kinetic} from './Kinetic';
import {Cell} from './Cell';
import {Reflect} from './Reflect';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['template', Template],
	['redox', Redox],
	['precip', Precip],
	['complex', Complex],
	['kinetic', Kinetic],
	['cell', Cell],
	['reflect', Reflect],
	['review', Review],
];
