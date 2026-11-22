import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {MolCrys} from './MolCrys';
import {Packing} from './Packing';
import {MolProp} from './MolProp';
import {Covalent} from './Covalent';
import {Sio2} from './Sio2';
import {Hard} from './Hard';
import {Trap} from './Trap';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['molcrys', MolCrys],
	['packing', Packing],
	['molprop', MolProp],
	['covalent', Covalent],
	['sio2', Sio2],
	['hard', Hard],
	['trap', Trap],
	['review', Review],
];
