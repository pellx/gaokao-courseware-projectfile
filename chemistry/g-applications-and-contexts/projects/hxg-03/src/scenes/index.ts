import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Structure} from './Structure';
import {Read} from './Read';
import {Grind} from './Grind';
import {Roast} from './Roast';
import {Leach} from './Leach';
import {Proper} from './Proper';
import {Residue} from './Residue';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['structure', Structure],
	['read', Read],
	['grind', Grind],
	['roast', Roast],
	['leach', Leach],
	['proper', Proper],
	['residue', Residue],
	['review', Review],
];
