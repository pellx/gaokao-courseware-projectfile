import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Disp} from './Disp';
import {Prep} from './Prep';
import {Colloid} from './Colloid';
import {Conv} from './Conv';
import {Apply} from './Apply';
import {Change} from './Change';
import {Culture} from './Culture';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['disp', Disp],
	['prep', Prep],
	['colloid', Colloid],
	['conv', Conv],
	['apply', Apply],
	['change', Change],
	['culture', Culture],
	['review', Review],
];
