import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Ionic} from './Ionic';
import {Covalent} from './Covalent';
import {Lewis} from './Lewis';
import {Formation} from './Formation';
import {Models} from './Models';
import {Category} from './Category';
import {Imf} from './Imf';
import {Essence} from './Essence';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['ionic', Ionic],
	['covalent', Covalent],
	['lewis', Lewis],
	['formation', Formation],
	['models', Models],
	['category', Category],
	['imf', Imf],
	['essence', Essence],
	['review', Review],
];
