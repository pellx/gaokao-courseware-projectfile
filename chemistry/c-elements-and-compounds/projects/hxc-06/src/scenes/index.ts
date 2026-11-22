import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Ferric} from './Ferric';
import {Ferrous} from './Ferrous';
import {Detthree} from './Detthree';
import {Dettwo} from './Dettwo';
import {Purify} from './Purify';
import {Hydro} from './Hydro';
import {Explore} from './Explore';
import {Color} from './Color';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['fe3', Ferric],
	['fe2', Ferrous],
	['det3', Detthree],
	['det2', Dettwo],
	['purify', Purify],
	['hydro', Hydro],
	['explore', Explore],
	['color', Color],
	['review', Review],
];
