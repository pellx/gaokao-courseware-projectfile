import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Spec} from './Spec';
import {Use} from './Use';
import {Sel} from './Sel';
import {Dee} from './Dee';
import {Sync} from './Sync';
import {Ekm} from './Ekm';
import {Limit} from './Limit';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['spec', Spec],
	['use', Use],
	['sel', Sel],
	['dee', Dee],
	['sync', Sync],
	['ekm', Ekm],
	['limit', Limit],
	['review', Review],
];
