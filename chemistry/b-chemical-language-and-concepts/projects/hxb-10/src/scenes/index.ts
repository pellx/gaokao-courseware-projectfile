import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Type} from './Type';
import {Occur} from './Occur';
import {Split} from './Split';
import {Conserve} from './Conserve';
import {Amount} from './Amount';
import {Order} from './Order';
import {Electro} from './Electro';
import {Hydro} from './Hydro';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['type', Type],
	['react', Occur],
	['split', Split],
	['conserve', Conserve],
	['amount', Amount],
	['order', Order],
	['electro', Electro],
	['hydro', Hydro],
	['review', Review],
];
