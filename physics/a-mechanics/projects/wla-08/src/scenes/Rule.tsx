import React from 'react';
import {AutoScene} from '../components/auto';

export const Rule: React.FC = () => <AutoScene k="rule" d={{"tag": "考点八", "title": "受力分析的原则", "blocks": [{"t": "mark", "ok": true, "at": "h1", "text": "只分析研究对象{受到}的力"}, {"t": "mark", "ok": true, "at": "h2", "text": "每个力都有{施力物体}"}, {"t": "mark", "ok": false, "at": "h3", "text": "另画“合力”“下滑力”"}], "callout": {"label": "易错", "at": "h4", "text": "“下滑力”{不存在}"}}} />;
