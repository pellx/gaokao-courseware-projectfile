import React from 'react';
import {AutoScene} from '../components/auto';

export const Verify: React.FC = () => <AutoScene k="verify" d={{"tag": "考点六", "title": "物质波的实验验证", "blocks": [{"t": "chain", "steps": [{"at": "f1", "text": "电子束"}, {"at": "f2", "text": "穿过晶体"}, {"at": "f2", "text": "{衍射图样}", "c": "orange"}], "arrows": []}, {"t": "big", "at": "f3", "text": "衍射 → 电子具有{波动性}", "size": 46}, {"t": "text", "at": "f4", "text": "质子、中子等也有波动性", "size": 32}], "callout": {"label": "要点", "at": "f5", "text": "电子衍射证实了{物质波}"}}} />;
