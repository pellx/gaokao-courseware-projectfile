import React from 'react';
import type {T} from '../timeline';
import {Content} from './Content';
import {History} from './History';
import {Induction} from './Induction';
import {Intro} from './Intro';
import {Levels} from './Levels';
import {Life} from './Life';
import {Meaning} from './Meaning';
import {Review} from './Review';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['history', History],
	['content', Content],
	['meaning', Meaning],
	['induction', Induction],
	['life', Life],
	['levels', Levels],
	['review', Review],
];
