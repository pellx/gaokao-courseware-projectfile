import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Feat} from './Feat';
import {Kind} from './Kind';
import {Stick} from './Stick';
import {Elastic} from './Elastic';
import {Disc} from './Disc';
import {Ek} from './Ek';
import {Oblique} from './Oblique';
import {Scat} from './Scat';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['feat', Feat],
	['kind', Kind],
	['stick', Stick],
	['elastic', Elastic],
	['disc', Disc],
	['ek', Ek],
	['oblique', Oblique],
	['scat', Scat],
	['review', Review],
];
