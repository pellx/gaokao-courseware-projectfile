import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Structure} from './Structure';
import {Subst} from './Subst';
import {Addition} from './Addition';
import {Prep} from './Prep';
import {Homolog} from './Homolog';
import {Toluene} from './Toluene';
import {Mutual} from './Mutual';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['structure', Structure],
	['subst', Subst],
	['addition', Addition],
	['prep', Prep],
	['homolog', Homolog],
	['toluene', Toluene],
	['mutual', Mutual],
	['review', Review],
];
