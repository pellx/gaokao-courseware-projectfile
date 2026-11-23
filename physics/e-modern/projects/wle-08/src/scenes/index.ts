import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Four} from './Four';
import {Nuclear} from './Nuclear';
import {Weak} from './Weak';
import {Bind} from './Bind';
import {Spec} from './Spec';
import {Curve} from './Curve';
import {Defect} from './Defect';
import {Emc} from './Emc';
import {Clarify} from './Clarify';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['four', Four],
	['nuclear', Nuclear],
	['weak', Weak],
	['bind', Bind],
	['spec', Spec],
	['curve', Curve],
	['defect', Defect],
	['emc', Emc],
	['clarify', Clarify],
	['review', Review],
];
