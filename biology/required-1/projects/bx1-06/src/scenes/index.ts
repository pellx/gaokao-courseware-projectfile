import React from 'react';
import type {T} from '../timeline';
import {Aa} from './Aa';
import {Calc1} from './Calc1';
import {Calc2} from './Calc2';
import {Dehydrate} from './Dehydrate';
import {Denature} from './Denature';
import {Diverse} from './Diverse';
import {Func} from './Func';
import {Intro} from './Intro';
import {Kinds} from './Kinds';
import {Review} from './Review';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['func', Func],
	['aa', Aa],
	['kinds', Kinds],
	['dehydrate', Dehydrate],
	['calc1', Calc1],
	['calc2', Calc2],
	['diverse', Diverse],
	['denature', Denature],
	['review', Review],
];
