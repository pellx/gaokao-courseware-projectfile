import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Aris} from './Aris';
import {Galileo} from './Galileo';
import {Descartes} from './Descartes';
import {Law} from './Law';
import {Status} from './Status';
import {Force} from './Force';
import {Inertia} from './Inertia';
import {NotForce} from './NotForce';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['aris', Aris],
	['galileo', Galileo],
	['descartes', Descartes],
	['law', Law],
	['status', Status],
	['force', Force],
	['inertia', Inertia],
	['notforce', NotForce],
	['review', Review],
];
