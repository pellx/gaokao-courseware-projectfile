import React from 'react';
import {AutoScene} from '../components/auto';

export const Emo: React.FC = () => <AutoScene k="emo" d={{"tag": "考点四", "title": "电磁振荡", "blocks": [{"t": "chain", "steps": [{"at": "d1", "text": "放电"}, {"at": "d1", "text": "反向充电"}, {"at": "d1", "text": "反向放电"}, {"at": "d1", "text": "充电"}], "arrows": []}, {"t": "big", "at": "d2", "text": "电场能 ⇄ {磁场能}", "size": 50}], "callout": {"label": "要点", "at": "d4", "text": "{电场能 ⇄ 磁场能}"}, "beat": {"k": "swing", "at": "d3b", "text": "电场能 ⇄ 磁场能\n像秋千{来回荡|red}"}}} />;
