import React from 'react';
import type {T} from '../timeline';
import {Component} from './Component';
import {Func} from './Func';
import {Glyco} from './Glyco';
import {Intro} from './Intro';
import {Model} from './Model';
import {Property} from './Property';
import {Review} from './Review';
import {Signal} from './Signal';
import {Structure} from './Structure';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['func', Func],
	['signal', Signal],
	['component', Component],
	['structure', Structure],
	['model', Model],
	['glyco', Glyco],
	['property', Property],
	['review', Review],
];
