import React from 'react';
import {AutoScene} from '../components/auto';

export const Shield: React.FC = () => <AutoScene k="shield" d={{"tag": "考点五", "title": "静电屏蔽", "blocks": [{"t": "rule", "tag": "静电屏蔽", "at": "s1", "text": "导体壳内空腔{不受外电场影响}", "c": "red", "size": 34}, {"t": "items", "items": [{"at": "s2", "text": "{金属网}也能屏蔽"}, {"at": "s3", "text": "高压作业：含金属丝的工作服"}, {"at": "s3", "text": "输电线上方的{接地导线}"}], "size": 31}], "callout": {"label": "要点", "at": "s4", "text": "壳内 E = {0}"}, "beat": {"k": "a2", "at": "s3b", "text": "金属车身\n车里{不受外电场影响|red}"}}} />;
