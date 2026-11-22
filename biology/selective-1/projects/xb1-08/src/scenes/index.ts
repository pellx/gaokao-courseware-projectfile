import React from 'react';
import type {T} from '../timeline';
import {Emotion} from './Emotion';
import {Hemisphere} from './Hemisphere';
import {Intro} from './Intro';
import {Language} from './Language';
import {Mechanism} from './Mechanism';
import {Memory} from './Memory';
import {Review} from './Review';
import {Symptoms} from './Symptoms';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['language', Language],
	['hemisphere', Hemisphere],
	['memory', Memory],
	['mechanism', Mechanism],
	['emotion', Emotion],
	['symptoms', Symptoms],
	['review', Review],
];
