import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Common} from './Common';
import {Valence} from './Valence';
import {Strength} from './Strength';
import {Order} from './Order';
import {Mid} from './Mid';
import {Conserve} from './Conserve';
import {Transfer} from './Transfer';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['common', Common],
	['valence', Valence],
	['strength', Strength],
	['order', Order],
	['mid', Mid],
	['conserve', Conserve],
	['transfer', Transfer],
	['review', Review],
];
