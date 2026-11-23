import React from 'react';
import {AutoScene} from '../components/auto';

export const Second: React.FC = () => <AutoScene k="second" d={{"tag": "考点四", "title": "第二类永动机", "blocks": [{"t": "rule", "tag": "第二类永动机", "at": "s1", "text": "单一热库吸热，{全部用来做功}", "c": "red"}, {"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "能量守恒", "at": "s3", "text": "{不违背|orange}", "c": "orange", "size": 32}]}, {"blocks": [{"t": "rule", "tag": "热力学第二定律", "at": "s3", "text": "{违背}", "c": "red", "size": 32}]}]}], "callout": {"label": "易错", "at": "s4", "text": "第一类违背{能量守恒}，第二类违背{第二定律}"}}} />;
