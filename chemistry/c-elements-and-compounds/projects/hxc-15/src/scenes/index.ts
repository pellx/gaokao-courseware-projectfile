import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Mn} from './Mn';
import {Mnofour} from './Mnofour';
import {Cr} from './Cr';
import {Coni} from './Coni';
import {Feremove} from './Feremove';
import {Color} from './Color';
import {Sum} from './Sum';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['mn', Mn],
	['mno4', Mnofour],
	['cr', Cr],
	['coni', Coni],
	['fe', Feremove],
	['color', Color],
	['sum', Sum],
	['review', Review],
];
