import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Force} from './Force';
import {Source} from './Source';
import {Vary} from './Vary';
import {Curve} from './Curve';
import {Train} from './Train';
import {Bridge} from './Bridge';
import {Space} from './Space';
import {Off} from './Off';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['force', Force],
	['source', Source],
	['vary', Vary],
	['curve', Curve],
	['train', Train],
	['bridge', Bridge],
	['space', Space],
	['off', Off],
	['review', Review],
];
