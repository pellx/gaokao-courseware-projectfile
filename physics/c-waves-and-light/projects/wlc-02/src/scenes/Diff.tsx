import React from 'react';
import {AutoScene} from '../components/auto';

export const Diff: React.FC = () => <AutoScene k="diff" d={{"tag": "考点三", "title": "波的衍射", "blocks": [{"t": "rule", "tag": "衍射", "at": "c1", "text": "波{绕过障碍物}继续传播", "c": "red"}, {"t": "text", "at": "c2", "text": "{一切波}都能发生衍射", "size": 36}, {"t": "big", "at": "c3", "text": "闻其声而不见其人", "size": 48}], "callout": {"label": "要点", "at": "c4", "text": "闻其声不见其人 → {声波衍射}"}, "beat": {"k": "around", "at": "c3b", "text": "绕过障碍物\n就是{衍射|red}"}}} />;
