import React from 'react';
import {AutoScene} from '../components/auto';

export const Cond: React.FC = () => <AutoScene k="cond" d={{"tag": "考点四", "title": "发生明显衍射的条件", "blocks": [{"t": "big", "at": "d1", "text": "尺寸 ≈ λ 或 {尺寸 < λ}", "size": 54}, {"t": "items", "items": [{"at": "d2", "text": "声波波长长 → 能绕过墙壁"}, {"at": "d3", "text": "障碍物 ≫ λ → 留下{阴影区}"}], "size": 34}], "callout": {"label": "易错", "at": "d4", "text": "“明显”是条件，衍射{总是存在}"}}} />;
