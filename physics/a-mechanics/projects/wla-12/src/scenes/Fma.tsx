import React from 'react';
import {AutoScene} from '../components/auto';

export const Fma: React.FC = () => <AutoScene k="fma" d={{"tag": "考点二", "title": "表达式 F = ma", "blocks": [{"t": "big", "at": "b1", "text": "F = {ma}", "size": 64}, {"t": "text", "at": "b2", "text": "1 N = {1 kg·m/s^2}", "size": 36}, {"t": "rule", "tag": "F", "at": "b3", "text": "物体所受的{合力}", "c": "orange"}], "callout": {"label": "易错", "at": "b4", "text": "k = 1 是{选取单位}的结果"}}} />;
