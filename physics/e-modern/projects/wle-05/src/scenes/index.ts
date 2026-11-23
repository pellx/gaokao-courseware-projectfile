import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Cathode} from './Cathode';
import {Meaning} from './Meaning';
import {Charge} from './Charge';
import {Thomson} from './Thomson';
import {Alpha} from './Alpha';
import {Nucleus} from './Nucleus';
import {Explain} from './Explain';
import {Size} from './Size';
import {Trouble} from './Trouble';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['cathode', Cathode],
	['meaning', Meaning],
	['charge', Charge],
	['thomson', Thomson],
	['alpha', Alpha],
	['nucleus', Nucleus],
	['explain', Explain],
	['size', Size],
	['trouble', Trouble],
	['review', Review],
];
