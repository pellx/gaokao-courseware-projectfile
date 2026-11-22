import React from 'react';
import type {T} from '../timeline';
import {Intro} from './Intro';
import {Review} from './Review';
import {Structure} from './Structure';
import {Reduce} from './Reduce';
import {Mirror} from './Mirror';
import {Cuoh} from './Cuoh';
import {Formald} from './Formald';
import {Ketone} from './Ketone';
import {Distinguish} from './Distinguish';

// Scene order of the video. Each key must match a scene in narration.json.
export const SCENES: [keyof typeof T, React.FC][] = [
	['intro', Intro],
	['structure', Structure],
	['reduce', Reduce],
	['mirror', Mirror],
	['cuoh', Cuoh],
	['formald', Formald],
	['ketone', Ketone],
	['distinguish', Distinguish],
	['review', Review],
];
