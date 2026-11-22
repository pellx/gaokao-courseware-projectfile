import React from 'react';
import type {T} from '../timeline';
import {AlgaScene} from './Alga';
import {Amphibian} from './Amphibian';
import {Chromatin} from './Chromatin';
import {Func} from './Func';
import {Intro} from './Intro';
import {Model} from './Model';
import {Review} from './Review';
import {Structure} from './Structure';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['func', Func],
	['amphibian', Amphibian],
	['alga', AlgaScene],
	['structure', Structure],
	['chromatin', Chromatin],
	['model', Model],
	['review', Review],
];
