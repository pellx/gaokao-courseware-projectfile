import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Feature} from './Feature';
import {Classify} from './Classify';
import {Inorganic} from './Inorganic';
import {Metal} from './Metal';
import {Polymer} from './Polymer';
import {Energy} from './Energy';
import {Method} from './Method';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['feature', Feature],
	['class', Classify],
	['inorganic', Inorganic],
	['metal', Metal],
	['polymer', Polymer],
	['energy', Energy],
	['method', Method],
	['review', Review],
];
