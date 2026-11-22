import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Sulfur} from './Sulfur';
import {Acidic} from './Acidic';
import {Reduce} from './Reduce';
import {Oxid} from './Oxid';
import {Bleach} from './Bleach';
import {Sothree} from './Sothree';
import {Identify} from './Identify';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['sulfur', Sulfur],
	['acidic', Acidic],
	['reduce', Reduce],
	['oxid', Oxid],
	['bleach', Bleach],
	['so3', Sothree],
	['identify', Identify],
	['review', Review],
];
