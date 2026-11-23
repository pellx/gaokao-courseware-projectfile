import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Refl} from './Refl';
import {Refr} from './Refr';
import {Diff} from './Diff';
import {Cond} from './Cond';
import {Sup} from './Sup';
import {Intf} from './Intf';
import {Pts} from './Pts';
import {Disp} from './Disp';
import {Dop} from './Dop';
import {App} from './App';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['refl', Refl],
	['refr', Refr],
	['diff', Diff],
	['cond', Cond],
	['sup', Sup],
	['intf', Intf],
	['pts', Pts],
	['disp', Disp],
	['dop', Dop],
	['app', App],
	['review', Review],
];
