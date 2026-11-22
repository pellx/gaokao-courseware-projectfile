import React from 'react';
import type {T} from '../timeline';
import {Apply} from './Apply';
import {Co2} from './Co2';
import {Curves} from './Curves';
import {Disk} from './Disk';
import {Grossnet} from './Grossnet';
import {Intensity} from './Intensity';
import {Intro} from './Intro';
import {Light} from './Light';
import {Others} from './Others';
import {Review} from './Review';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['intensity', Intensity],
	['disk', Disk],
	['light', Light],
	['grossnet', Grossnet],
	['co2', Co2],
	['others', Others],
	['curves', Curves],
	['apply', Apply],
	['review', Review],
];
