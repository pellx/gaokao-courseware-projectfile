import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Medium} from './Medium';
import {Methods} from './Methods';
import {Pour} from './Pour';
import {Review} from './Review';
import {Steps} from './Steps';
import {Sterile} from './Sterile';
import {Streak} from './Streak';
import {Types} from './Types';
import {Yeast} from './Yeast';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['medium', Medium],
	['types', Types],
	['sterile', Sterile],
	['methods', Methods],
	['steps', Steps],
	['pour', Pour],
	['streak', Streak],
	['yeast', Yeast],
	['review', Review],
];
