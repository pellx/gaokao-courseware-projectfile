import React from 'react';
import {AutoScene} from '../components/auto';

export const Period: React.FC = () => <AutoScene k="period" d={{"tag": "考点四", "title": "周期的测量", "blocks": [{"t": "chain", "steps": [{"at": "p1", "text": "摆角{很小}"}, {"at": "p2", "text": "从{最低点}开始计时"}, {"at": "p3", "text": "测 {30～50} 次全振动总时间 t"}, {"at": "p3", "text": "T = {t / n}"}], "arrows": []}], "callout": {"label": "要点", "at": "p4", "text": "{累积法}：测多次总时间，减小相对误差"}, "beat": {"k": "swing", "at": "p3b", "text": "最低点速度{最大|red}\n这时开始计时"}}} />;
