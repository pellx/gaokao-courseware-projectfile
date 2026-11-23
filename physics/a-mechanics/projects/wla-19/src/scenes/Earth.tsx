import React from 'react';
import {AutoScene} from '../components/auto';

export const Earth: React.FC = () => <AutoScene k="earth" d={{"tag": "考点四", "title": "“称量”地球的质量", "blocks": [{"t": "big", "at": "d1", "text": "M = {gR^2/G}", "size": 60}, {"t": "text", "at": "d3", "text": "卡文迪什测出 G，才算出{地球质量}", "size": 32}], "callout": {"label": "要点", "at": "d4", "text": "关键是测出{G}"}}} />;
