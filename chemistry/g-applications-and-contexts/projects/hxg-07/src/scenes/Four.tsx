import React from 'react';
import {AutoScene} from '../components/auto';

export const Four: React.FC = () => <AutoScene k="four" d={{"tag": "考点七", "title": "四个判断点", "blocks": [{"t": "chain", "steps": [{"at": "fo1", "text": "{电极}"}, {"at": "fo1", "text": "{电子}"}, {"at": "fo2", "text": "{离子}"}, {"at": "fo3", "text": "电极反应"}], "arrows": [], "center": true, "size": 42}, {"t": "items", "items": [{"at": "fo1", "text": "电子只在{导线}中"}, {"at": "fo2", "text": "阳离子 → 正极 / 阴极"}, {"at": "fo3", "text": "看环境、看 pH、算电子"}], "size": 34}], "callout": {"label": "答题模板", "at": "fo4", "text": "逐项对应：{电极、电子、离子、反应}"}}} />;
