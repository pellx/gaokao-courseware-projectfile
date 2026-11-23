import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {GravWork} from './GravWork';
import {Ep} from './Ep';
import {Relation} from './Relation';
import {Relative} from './Relative';
import {System} from './System';
import {Elastic} from './Elastic';
import {Size} from './Size';
import {ElasticWork} from './ElasticWork';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['gw', GravWork],
	['ep', Ep],
	['rel', Relation],
	['relative', Relative],
	['system', System],
	['elastic', Elastic],
	['size', Size],
	['ew', ElasticWork],
	['review', Review],
];
