import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Period} from './Period';
import {Valence} from './Valence';
import {Metal} from './Metal';
import {Nonmetal} from './Nonmetal';
import {Exp3} from './Exp3';
import {Nonmet3} from './Nonmet3';
import {Cannot} from './Cannot';
import {Apply} from './Apply';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['period', Period],
	['valence', Valence],
	['metal', Metal],
	['nonmetal', Nonmetal],
	['exp3', Exp3],
	['nonmet3', Nonmet3],
	['cannot', Cannot],
	['apply', Apply],
	['review', Review],
];
