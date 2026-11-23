import React from 'react';
import {AutoScene} from '../components/auto';

export const Steps: React.FC = () => <AutoScene k="steps" d={{"tag": "考点四", "title": "关键步骤与注意事项", "blocks": [{"t": "chain", "steps": [{"at": "s1", "text": "弹簧、刻度尺都{竖直}"}, {"at": "s2", "text": "钩码{静止}后读数，视线{相平}"}, {"at": "s3", "text": "{逐个增挂}，记录多组数据"}], "arrows": []}], "callout": {"label": "易错", "at": "s4", "text": "不能超过{弹性限度}"}}} />;
