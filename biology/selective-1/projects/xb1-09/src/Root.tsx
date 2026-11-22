import React from 'react';
import {AbsoluteFill, Composition, Series, Still} from 'remotion';
import {Cover} from './Cover';
import './theme';
import {DISEASE_DUR, Disease} from './scenes/Disease';
import {FEATURES_DUR, Features} from './scenes/Features';
import {FUNCTIONS_DUR, Functions} from './scenes/Functions';
import {GLANDS_DUR, Glands} from './scenes/Glands';
import {INSULIN_DUR, Insulin} from './scenes/Insulin';
import {INTRO_DUR, Intro} from './scenes/Intro';
import {METHODS_DUR, Methods} from './scenes/Methods';
import {NATURE_DUR, Nature} from './scenes/Nature';
import {REVIEW_DUR, Review} from './scenes/Review';
import {SECRETIN_DUR, Secretin} from './scenes/Secretin';
import {TESTIS_DUR, Testis} from './scenes/Testis';

const SCENES: [React.FC, number][] = [
	[Intro, INTRO_DUR],
	[Secretin, SECRETIN_DUR],
	[Insulin, INSULIN_DUR],
	[Testis, TESTIS_DUR],
	[Methods, METHODS_DUR],
	[Glands, GLANDS_DUR],
	[Functions, FUNCTIONS_DUR],
	[Nature, NATURE_DUR],
	[Disease, DISEASE_DUR],
	[Features, FEATURES_DUR],
	[Review, REVIEW_DUR],
];

const TOTAL = SCENES.reduce((sum, [, d]) => sum + d, 0);

const Hormones: React.FC = () => (
	<AbsoluteFill style={{backgroundColor: '#ffffff'}}>
		<Series>
			{SCENES.map(([SceneComp, dur], i) => (
				<Series.Sequence key={i} durationInFrames={dur}>
					<SceneComp />
				</Series.Sequence>
			))}
		</Series>
	</AbsoluteFill>
);

export const RemotionRoot: React.FC = () => (
	<>
		<Composition id="Hormones" component={Hormones} durationInFrames={TOTAL} fps={30} width={1920} height={1080} />
		<Still id="Cover16x9" component={Cover} width={1920} height={1080} defaultProps={{w: 1920, h: 1080}} />
		<Still id="Cover4x3" component={Cover} width={1440} height={1080} defaultProps={{w: 1440, h: 1080}} />
		<Still id="Cover3x4" component={Cover} width={1080} height={1440} defaultProps={{w: 1080, h: 1440}} />
	</>
);