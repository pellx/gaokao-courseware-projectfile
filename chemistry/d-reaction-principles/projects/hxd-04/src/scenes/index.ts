import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Collide} from './Collide';
import {Explain} from './Explain';
import {Barrier} from './Barrier';
import {Catalyst} from './Catalyst';
import {Cycle} from './Cycle';
import {Bond} from './Bond';
import {Trap} from './Trap';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['collide', Collide],
	['explain', Explain],
	['barrier', Barrier],
	['cat', Catalyst],
	['cycle', Cycle],
	['bond', Bond],
	['trap', Trap],
	['review', Review],
];
