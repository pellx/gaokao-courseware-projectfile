import React from 'react';
import {AutoScene} from '../components/auto';

export const Tip: React.FC = () => <AutoScene k="tip" d={{"tag": "考点四", "title": "尖端放电", "blocks": [{"t": "chain", "steps": [{"at": "t1", "text": "尖端电场强"}, {"at": "t1", "text": "空气{电离}"}, {"at": "t2", "text": "异号离子{中和}尖端电荷"}], "arrows": [], "size": 32}, {"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "利用", "at": "t3", "text": "{避雷针}", "c": "red", "size": 32}]}, {"blocks": [{"t": "rule", "tag": "防止", "at": "t3", "text": "高压导体表面{光滑|orange}", "c": "orange", "size": 32}]}]}], "callout": {"label": "要点", "at": "t4", "text": "利用：避雷针；防止：{表面光滑}"}}} />;
