import React from 'react';
import type {T} from '../timeline';
import {Explain} from './Explain';
import {Intro} from './Intro';
import {Linear} from './Linear';
import {Method} from './Method';
import {Modern} from './Modern';
import {Morgan} from './Morgan';
import {Review} from './Review';
import {Sutton} from './Sutton';
import {Testcross} from './Testcross';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['sutton', Sutton],
	['method', Method],
	['morgan', Morgan],
	['explain', Explain],
	['testcross', Testcross],
	['linear', Linear],
	['modern', Modern],
	['review', Review],
];
