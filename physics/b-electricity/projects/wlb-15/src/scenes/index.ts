import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Motion} from './Motion';
import {Force} from './Force';
import {Radius} from './Radius';
import {Period} from './Period';
import {Demo} from './Demo';
import {Picture} from './Picture';
import {Helix} from './Helix';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['motion', Motion],
	['force', Force],
	['radius', Radius],
	['period', Period],
	['demo', Demo],
	['picture', Picture],
	['helix', Helix],
	['review', Review],
];
