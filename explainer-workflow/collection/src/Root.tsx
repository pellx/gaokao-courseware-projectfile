import React from 'react';
import {Still} from 'remotion';
import './theme';
import {Collection} from './Collection';

export const RemotionRoot: React.FC = () => <Still id="Cover" component={Collection} width={960} height={540} />;
