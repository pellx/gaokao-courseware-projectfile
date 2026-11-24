import React from 'react';
import {AutoScene} from '../components/auto';

export const Aim: React.FC = () => <AutoScene k="aim" d={{"tag": "考点一", "title": "实验目的", "blocks": [{"t": "rule", "tag": "目的", "at": "m1", "text": "估测{油酸分子的直径}", "c": "red"}, {"t": "chain", "steps": [{"at": "m3", "text": "测宏观量：体积 V、面积 S"}, {"at": "m2", "text": "算微观量：分子直径 d", "c": "orange"}], "arrows": []}], "callout": {"label": "要点", "at": "m4", "text": "由{宏观量}估测{微观量}"}}} />;
