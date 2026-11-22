import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Acid} from './Acid';
import {Ester} from './Ester';
import {Prep} from './Prep';
import {Hydro} from './Hydro';
import {Phenyl} from './Phenyl';
import {Fat} from './Fat';
import {Amide} from './Amide';
import {Formic} from './Formic';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['acid', Acid],
	['ester', Ester],
	['prep', Prep],
	['hydro', Hydro],
	['phenyl', Phenyl],
	['fat', Fat],
	['amide', Amide],
	['formic', Formic],
	['review', Review],
];
