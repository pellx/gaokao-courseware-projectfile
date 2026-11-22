import React from 'react';
import type {T} from '../timeline';
import {Atom} from './Atom';
import {Confuse} from './Confuse';
import {Count} from './Count';
import {Diagram} from './Diagram';
import {Intro} from './Intro';
import {Isotope} from './Isotope';
import {NuclideScene} from './Nuclide';
import {Review} from './Review';
import {Shell} from './Shell';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['atom', Atom],
	['count', Count],
	['shell', Shell],
	['diagram', Diagram],
	['nuclide', NuclideScene],
	['isotope', Isotope],
	['confuse', Confuse],
	['review', Review],
];
