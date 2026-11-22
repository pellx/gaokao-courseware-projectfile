import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Type} from './Type';
import {Lewis} from './Lewis';
import {Form} from './Form';
import {Diag} from './Diag';
import {Nuc} from './Nuc';
import {Model} from './Model';
import {Orb} from './Orb';
import {Struct} from './Struct';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['type', Type],
	['lewis', Lewis],
	['form', Form],
	['diag', Diag],
	['nuc', Nuc],
	['model', Model],
	['orb', Orb],
	['struct', Struct],
	['review', Review],
];
