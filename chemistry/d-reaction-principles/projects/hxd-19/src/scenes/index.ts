import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Vt} from './Vt';
import {Ct} from './Ct';
import {Fix} from './Fix';
import {First} from './First';
import {Peak} from './Peak';
import {Select} from './Select';
import {Template} from './Template';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['vt', Vt],
	['ct', Ct],
	['fix', Fix],
	['first', First],
	['peak', Peak],
	['select', Select],
	['tpl', Template],
	['review', Review],
];
