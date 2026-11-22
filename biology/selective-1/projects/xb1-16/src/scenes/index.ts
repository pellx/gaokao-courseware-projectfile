import React from 'react';
import type {T} from '../timeline';
import {Allergy} from './Allergy';
import {Autoimmune} from './Autoimmune';
import {Compare} from './Compare';
import {Deficiency} from './Deficiency';
import {Feature} from './Feature';
import {Hiv} from './Hiv';
import {Intro} from './Intro';
import {Review} from './Review';
import {Spread} from './Spread';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['allergy', Allergy],
	['feature', Feature],
	['autoimmune', Autoimmune],
	['deficiency', Deficiency],
	['hiv', Hiv],
	['spread', Spread],
	['compare', Compare],
	['review', Review],
];
