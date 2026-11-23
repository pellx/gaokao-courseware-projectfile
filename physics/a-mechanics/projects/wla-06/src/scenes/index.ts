import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Force} from './Force';
import {Grav} from './Grav';
import {Cg} from './Cg';
import {Elastic} from './Elastic';
import {Tiny} from './Tiny';
import {Dir} from './Dir';
import {Hooke} from './Hooke';
import {Source} from './Source';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['force', Force],
	['grav', Grav],
	['cg', Cg],
	['elastic', Elastic],
	['tiny', Tiny],
	['dir', Dir],
	['hooke', Hooke],
	['source', Source],
	['review', Review],
];
