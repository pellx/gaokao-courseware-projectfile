import React from 'react';
import type {T} from '../timeline';
import {Anatomy} from './Anatomy';
import {Combine} from './Combine';
import {Embryo} from './Embryo';
import {Fossil} from './Fossil';
import {Intro} from './Intro';
import {Molecular} from './Molecular';
import {Review} from './Review';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['fossil', Fossil],
	['anatomy', Anatomy],
	['embryo', Embryo],
	['molecular', Molecular],
	['combine', Combine],
	['review', Review],
];
