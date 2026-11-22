import React from 'react';
import {AutoScene} from '../components/auto';

export const Distill: React.FC = () => <AutoScene k="distill" d={{"tag": "考点五", "title": "蒸馏与分馏", "blocks": [{"t": "rule", "tag": "适用", "at": "di1", "text": "互溶液体，{沸点相差较大}", "c": "red", "size": 32}, {"t": "items", "items": [{"at": "di2", "text": "温度计水银球在{支管口处}"}, {"at": "di2", "text": "冷凝水{下进上出}"}, {"at": "di2", "text": "碎瓷片防暴沸"}, {"at": "di3", "text": "石油分馏：{物理变化}"}], "size": 33}], "callout": {"label": "易错", "at": "di4", "text": "制无水乙醇：先加{生石灰}再蒸馏"}}} />;
