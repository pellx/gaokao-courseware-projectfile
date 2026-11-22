import React from 'react';
import {AutoScene} from '../components/auto';

export const Flow: React.FC = () => <AutoScene k="flow" d={{"tag": "考点三", "title": "液流电池", "blocks": [{"t": "items", "items": [{"at": "fl2", "text": "正极：VO2^+ + 2H^+ + e^- = {VO^2+} + H2O（+5 → +4）"}, {"at": "fl2", "text": "负极：V^2+ − e^- = {V^3+}（+2 → +3）"}, {"at": "fl3", "text": "质子交换膜：{H^+ 移向正极}"}], "size": 32}], "callout": {"label": "解题方法", "at": "fl4", "text": "看{化合价}：降低的是正极"}, "beat": {"k": "four", "at": "fl3b", "text": "正负极物质\n{分开存放|red}"}}} />;
