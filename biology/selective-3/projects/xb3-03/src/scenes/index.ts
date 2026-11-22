import React from 'react';
import type {T} from '../timeline';
import {Control} from './Control';
import {Count} from './Count';
import {Identify} from './Identify';
import {Intro} from './Intro';
import {Micro} from './Micro';
import {Review} from './Review';
import {Select} from './Select';
import {Small} from './Small';
import {Spread} from './Spread';
import {Urea} from './Urea';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['select', Select],
	['urea', Urea],
	['spread', Spread],
	['count', Count],
	['small', Small],
	['micro', Micro],
	['control', Control],
	['identify', Identify],
	['review', Review],
];
