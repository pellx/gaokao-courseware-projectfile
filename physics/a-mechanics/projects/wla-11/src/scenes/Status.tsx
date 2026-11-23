import React from 'react';
import {AutoScene} from '../components/auto';

export const Status: React.FC = () => <AutoScene k="status" d={{"tag": "考点五", "title": "定律的地位", "blocks": [{"t": "mark", "ok": false, "at": "e1", "text": "不能用实验直接验证"}, {"t": "mark", "ok": true, "at": "e2", "text": "实验 + {推理概括}得出"}, {"t": "text", "at": "e3", "text": "推论与事实相符 → 定律正确", "size": 32}], "callout": {"label": "易错", "at": "e4", "text": "第一定律{不是}第二定律的特例"}}} />;
