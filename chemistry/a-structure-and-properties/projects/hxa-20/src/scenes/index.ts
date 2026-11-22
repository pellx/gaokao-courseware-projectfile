import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Struct} from './Struct';
import {Prop} from './Prop';
import {Pos} from './Pos';
import {Formula} from './Formula';
import {Opt1} from './Opt1';
import {Opt2} from './Opt2';
import {Opt3} from './Opt3';
import {Trap} from './Trap';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['struct', Struct],
	['prop', Prop],
	['pos', Pos],
	['formula', Formula],
	['opt1', Opt1],
	['opt2', Opt2],
	['opt3', Opt3],
	['trap', Trap],
	['review', Review],
];
