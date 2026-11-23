import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Cap} from './Cap';
import {ChargeC} from './ChargeC';
import {Def} from './Def';
import {Unit} from './Unit';
import {Plate} from './Plate';
import {KindsC} from './KindsC';
import {Volt} from './Volt';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['cap', Cap],
	['charge', ChargeC],
	['def', Def],
	['unit', Unit],
	['plate', Plate],
	['kinds', KindsC],
	['volt', Volt],
	['review', Review],
];
