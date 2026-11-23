import React from 'react';
import {AutoScene} from '../components/auto';

export const Univ: React.FC = () => <AutoScene k="univ" d={{"tag": "考点五", "title": "普遍性", "blocks": [{"t": "big", "at": "e1", "text": "与{运动状态}无关", "size": 52}, {"t": "row", "cols": [{"blocks": [{"t": "mark", "ok": true, "at": "e2", "text": "静止"}]}, {"blocks": [{"t": "mark", "ok": true, "at": "e2", "text": "匀速"}]}, {"blocks": [{"t": "mark", "ok": true, "at": "e2", "text": "加速"}]}]}, {"t": "text", "at": "e3", "text": "与物体的大小、质量{都无关}", "size": 32}], "callout": {"label": "易错", "at": "e4", "text": "赢的一方的力{并不更大}"}, "beat": {"k": "arm", "at": "e3b", "text": "谁赢谁输\n相互作用力都{大小相等|red}"}}} />;
