import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Uniform} from './Uniform';
import {Linear} from './Linear';
import {Angular} from './Angular';
import {Period} from './Period';
import {Relation} from './Relation';
import {Drive} from './Drive';
import {Centri} from './Centri';
import {Size} from './Size';
import {Ratio} from './Ratio';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['uniform', Uniform],
	['linear', Linear],
	['angular', Angular],
	['period', Period],
	['relation', Relation],
	['drive', Drive],
	['centri', Centri],
	['size', Size],
	['ratio', Ratio],
	['review', Review],
];
