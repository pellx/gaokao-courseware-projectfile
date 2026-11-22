import React from 'react';
import type {T} from '../timeline';
import {Apps} from './Apps';
import {Care} from './Care';
import {Concept} from './Concept';
import {Explore} from './Explore';
import {Herb} from './Herb';
import {Intro} from './Intro';
import {Result} from './Result';
import {Review} from './Review';
import {Types} from './Types';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['concept', Concept],
	['types', Types],
	['apps', Apps],
	['care', Care],
	['explore', Explore],
	['result', Result],
	['herb', Herb],
	['review', Review],
];
