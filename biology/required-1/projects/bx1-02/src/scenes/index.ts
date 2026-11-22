import React from 'react';
import type {T} from '../timeline';
import {Confuse} from './Confuse';
import {Count} from './Count';
import {Image} from './Image';
import {Intro} from './Intro';
import {ProkEu} from './ProkEu';
import {Prokaryotes} from './Prokaryotes';
import {Review} from './Review';
import {Scope} from './Scope';
import {Unity} from './Unity';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['scope', Scope],
	['image', Image],
	['count', Count],
	['prokeu', ProkEu],
	['prokaryotes', Prokaryotes],
	['unity', Unity],
	['confuse', Confuse],
	['review', Review],
];
