import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Joule} from './Joule';
import {Work} from './Work';
import {Heat} from './Heat';
import {Ways} from './Ways';
import {First} from './First';
import {Sign} from './Sign';
import {Conserve} from './Conserve';
import {History} from './History';
import {Perpetual} from './Perpetual';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['joule', Joule],
	['work', Work],
	['heat', Heat],
	['ways', Ways],
	['first', First],
	['sign', Sign],
	['conserve', Conserve],
	['history', History],
	['perpetual', Perpetual],
	['review', Review],
];
