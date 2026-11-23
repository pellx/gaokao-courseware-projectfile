import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Aris} from './Aris';
import {Free} from './Free';
import {Prop} from './Prop';
import {G} from './G';
import {Law} from './Law';
import {Gal} from './Gal';
import {Method} from './Method';
import {Up} from './Up';
import {Sym} from './Sym';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['aris', Aris],
	['free', Free],
	['prop', Prop],
	['g', G],
	['law', Law],
	['gal', Gal],
	['method', Method],
	['up', Up],
	['sym', Sym],
	['review', Review],
];
