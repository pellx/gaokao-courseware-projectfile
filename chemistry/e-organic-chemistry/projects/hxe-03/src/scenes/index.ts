import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Bond} from './Bond';
import {Hybrid} from './Hybrid';
import {Sigma} from './Sigma';
import {Shape} from './Shape';
import {Plane} from './Plane';
import {Line} from './Line';
import {Split} from './Split';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['bond', Bond],
	['hybrid', Hybrid],
	['sigma', Sigma],
	['shape', Shape],
	['plane', Plane],
	['line', Line],
	['split', Split],
	['review', Review],
];
