import React from 'react';
import {AutoScene} from '../components/auto';

export const Distill: React.FC = () => <AutoScene k="distill" d={{"tag": "考点二", "title": "蒸馏", "blocks": [{"t": "rule", "tag": "适用", "at": "di1", "text": "互溶液体，{沸点相差较大}", "c": "red", "size": 32}, {"t": "items", "items": [{"at": "di2", "text": "温度计水银球：{支管口处}"}, {"at": "di2", "text": "冷凝水：{下进上出}"}, {"at": "di2", "text": "加碎瓷片防暴沸"}], "size": 34}], "callout": {"label": "易错", "at": "di4", "text": "忘加碎瓷片：{冷却后补加}"}}} />;
