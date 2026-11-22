import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Alkyl} from './Alkyl';
import {Alkane} from './Alkane';
import {Alkene} from './Alkene';
import {Alcohol} from './Alcohol';
import {Benzene} from './Benzene';
import {Carbonyl} from './Carbonyl';
import {Trap} from './Trap';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['alkyl', Alkyl],
	['alkane', Alkane],
	['alkene', Alkene],
	['alcohol', Alcohol],
	['benzene', Benzene],
	['carbonyl', Carbonyl],
	['trap', Trap],
	['review', Review],
];
