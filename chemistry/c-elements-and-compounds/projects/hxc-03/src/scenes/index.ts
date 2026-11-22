import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Phys} from './Phys';
import {Metal} from './Metal';
import {Water} from './Water';
import {Cw} from './Cw';
import {Hclo} from './Hclo';
import {Bleach} from './Bleach';
import {Cmp} from './Cmp';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['phys', Phys],
	['metal', Metal],
	['water', Water],
	['cw', Cw],
	['hclo', Hclo],
	['bleach', Bleach],
	['cmp', Cmp],
	['review', Review],
];
