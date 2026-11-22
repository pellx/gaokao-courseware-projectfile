import React from 'react';
import {AutoScene} from '../components/auto';

export const Cush: React.FC = () => <AutoScene k="cush" d={{"tag": "考点九", "title": "用动量定理解释现象", "blocks": [{"t": "big", "at": "c1", "text": "Δp 一定：Δt {↑} → F {↓}", "size": 50}, {"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "延长时间", "at": "c2", "lines": ["安全气囊", "跳远沙坑", "泡沫塑料包装"], "c": "green", "size": 32}]}, {"blocks": [{"t": "panel", "title": "缩短时间", "at": "c3", "lines": ["锤子钉钉子"], "c": "red", "size": 32}]}]}], "callout": {"label": "易错", "at": "c4", "text": "缓冲减小{作用力}，Δp 和冲量不变"}, "beat": {"k": "think", "at": "c3b", "text": "软垫：Δt {变长|red}\n冲击力 F {变小|red}"}}} />;
