import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Kw} from './Kw';
import {Affect} from './Affect';
import {Water} from './Water';
import {Acidity} from './Acidity';
import {Calc} from './Calc';
import {Dilute} from './Dilute';
import {Measure} from './Measure';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['kw', Kw],
	['affect', Affect],
	['water', Water],
	['acidity', Acidity],
	['calc', Calc],
	['dilute', Dilute],
	['measure', Measure],
	['review', Review],
];
