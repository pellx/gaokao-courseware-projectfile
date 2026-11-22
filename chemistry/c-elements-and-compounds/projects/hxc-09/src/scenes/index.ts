import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Dry} from './Dry';
import {Oxid} from './Oxid';
import {Cuexp} from './Cuexp';
import {Sofour} from './Sofour';
import {Vt} from './Vt';
import {Sulfite} from './Sulfite';
import {Thio} from './Thio';
import {Explore} from './Explore';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['dry', Dry],
	['oxid', Oxid],
	['cuexp', Cuexp],
	['so4', Sofour],
	['vt', Vt],
	['sulfite', Sulfite],
	['thio', Thio],
	['explore', Explore],
	['review', Review],
];
