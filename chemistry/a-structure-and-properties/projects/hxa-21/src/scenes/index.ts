import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Frame} from './Frame';
import {First} from './First';
import {Ie} from './Ie';
import {Hyb} from './Hyb';
import {Angle} from './Angle';
import {Mp} from './Mp';
import {Coord} from './Coord';
import {Open} from './Open';
import {Final} from './Final';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['frame', Frame],
	['first', First],
	['ie', Ie],
	['hyb', Hyb],
	['angle', Angle],
	['mp', Mp],
	['coord', Coord],
	['open', Open],
	['final', Final],
	['review', Review],
];
