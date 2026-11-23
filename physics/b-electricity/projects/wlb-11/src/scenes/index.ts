import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Magnet} from './Magnet';
import {Oersted} from './Oersted';
import {Lines} from './Lines';
import {Ampere} from './Ampere';
import {Earth} from './Earth';
import {FieldB} from './FieldB';
import {Uniform} from './Uniform';
import {Flux} from './Flux';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['magnet', Magnet],
	['oersted', Oersted],
	['lines', Lines],
	['ampere', Ampere],
	['earth', Earth],
	['field', FieldB],
	['uniform', Uniform],
	['flux', Flux],
	['review', Review],
];
