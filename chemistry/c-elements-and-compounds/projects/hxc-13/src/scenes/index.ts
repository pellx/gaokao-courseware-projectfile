import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Essence} from './Essence';
import {Method} from './Method';
import {Electro} from './Electro';
import {Reduce} from './Reduce';
import {Bromine} from './Bromine';
import {Magnesium} from './Magnesium';
import {Iodine} from './Iodine';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['essence', Essence],
	['method', Method],
	['electro', Electro],
	['reduce', Reduce],
	['bromine', Bromine],
	['magnesium', Magnesium],
	['iodine', Iodine],
	['review', Review],
];
