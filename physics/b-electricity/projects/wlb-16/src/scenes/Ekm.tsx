import React from 'react';
import {AutoScene} from '../components/auto';

export const Ekm: React.FC = () => <AutoScene k="ekm" d={{"tag": "考点六", "title": "最大动能", "blocks": [{"t": "rule", "tag": "引出", "at": "k1", "text": "半径达到 D 形盒半径 {R} 时引出", "c": "red", "size": 34}, {"t": "big", "at": "k2", "text": "Ekm = {q^2B^2R^2/2m}", "size": 52}, {"t": "text", "at": "k3", "text": "由 B 和 R 决定", "size": 34}], "callout": {"label": "易错", "at": "k4", "text": "最大动能{与加速电压无关}"}}} />;
