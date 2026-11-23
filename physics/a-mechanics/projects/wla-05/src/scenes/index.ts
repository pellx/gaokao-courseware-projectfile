import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Read} from './Read';
import {Xts} from './Xts';
import {Xti} from './Xti';
import {Vts} from './Vts';
import {Vta} from './Vta';
import {At} from './At';
import {Turn} from './Turn';
import {Trap} from './Trap';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['read', Read],
	['xts', Xts],
	['xti', Xti],
	['vts', Vts],
	['vta', Vta],
	['at', At],
	['turn', Turn],
	['trap', Trap],
	['review', Review],
];
