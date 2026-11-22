import React from 'react';
import {AutoScene} from '../components/auto';

export const Feature: React.FC = () => <AutoScene k="feature" d={{"tag": "考点一", "title": "特征与本质", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "特征（用来判断）", "at": "fe1", "lines": ["元素{化合价}发生变化"], "c": "red", "size": 36}]}, {"blocks": [{"t": "panel", "title": "本质", "at": "fe2", "lines": ["{电子转移}"], "c": "orange", "size": 36}]}]}, {"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "得失", "at": "fe2", "text": "2Na + Cl2 = 2NaCl：Na 失去电子给 Cl", "c": "red", "size": 29}]}, {"blocks": [{"t": "rule", "tag": "偏移", "at": "fe3", "text": "H2 + Cl2 = 2HCl：共用电子对偏向 Cl", "c": "orange", "size": 29}]}]}], "callout": {"label": "易错", "at": "fe4", "text": "特征是{化合价升降}，本质是{电子转移}；与有没有氧参加无关"}}} />;
