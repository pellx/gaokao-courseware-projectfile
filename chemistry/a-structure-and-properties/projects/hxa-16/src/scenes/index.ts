import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Metal} from './Metal';
import {Ionic} from './Ionic';
import {Mp} from './Mp';
import {Nacl} from './Nacl';
import {Caf2} from './Caf2';
import {IonicLiq} from './IonicLiq';
import {Transit} from './Transit';
import {Graphite} from './Graphite';
import {Compare} from './Compare';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['metal', Metal],
	['ionic', Ionic],
	['mp', Mp],
	['nacl', Nacl],
	['caf2', Caf2],
	['ionicliq', IonicLiq],
	['transit', Transit],
	['graphite', Graphite],
	['compare', Compare],
	['review', Review],
];
