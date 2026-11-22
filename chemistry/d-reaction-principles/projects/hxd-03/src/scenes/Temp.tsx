import React from 'react';
import {AutoScene} from '../components/auto';

export const Temp: React.FC = () => <AutoScene k="temp" d={{"tag": "考点五", "title": "温度和催化剂", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "温度", "at": "te1", "text": "升温：正、逆反应{都加快}", "c": "red", "size": 32}, {"t": "text", "at": "te2", "text": "每升高 10 ℃，速率约变为 {2～4 倍|orange}", "size": 30}]}, {"blocks": [{"t": "rule", "tag": "催化剂", "at": "te3", "text": "{同等程度}加快正、逆反应", "c": "green", "size": 32}]}]}], "callout": {"label": "易错", "at": "te4", "text": "升温放热反应也{加快}；催化剂不改平衡、不改 ΔH"}, "beat": {"k": "run", "at": "te3b", "text": "升温：分子跑得快\n{正逆反应都加速|red}"}}} />;
