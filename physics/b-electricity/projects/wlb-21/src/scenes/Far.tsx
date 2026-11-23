import React from 'react';
import {AutoScene} from '../components/auto';

export const Far: React.FC = () => <AutoScene k="far" d={{"tag": "考点八", "title": "远距离输电的基本环节", "blocks": [{"t": "chain", "steps": [{"at": "h1", "text": "发电厂"}, {"at": "h1", "text": "升压变压器", "c": "red"}, {"at": "h2", "text": "高压输电线", "c": "orange"}, {"at": "h2", "text": "降压变压器", "c": "red"}, {"at": "h2", "text": "用户"}], "arrows": [], "size": 30}, {"t": "text", "at": "h3", "text": "输电电压{不是越高越好}：绝缘、成本", "size": 36}], "callout": {"label": "要点", "at": "h4", "text": "升压 → 高压输电 → {降压}"}, "beat": {"k": "drag", "at": "h2b", "text": "一站一站\n把电{送到用户|red}"}}} />;
