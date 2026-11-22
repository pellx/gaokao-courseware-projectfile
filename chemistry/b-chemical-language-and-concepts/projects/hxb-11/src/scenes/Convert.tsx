import React from 'react';
import {AutoScene} from '../components/auto';

export const Convert: React.FC = () => <AutoScene k="convert" d={{"tag": "考点七", "title": "化学方程式与离子方程式", "blocks": [{"t": "mark", "ok": true, "at": "cv1", "text": "问“{离子方程式}”就写离子方程式，问“化学方程式”就写化学方程式", "size": 32}, {"t": "mark", "ok": true, "at": "cv2", "text": "气体 ↑、沉淀 ↓；条件写在等号上（△、通电、高温、催化剂）", "size": 32}, {"t": "mark", "ok": true, "at": "cv3", "text": "看清是“{总反应|orange}”还是“某一步”的反应", "size": 32}], "callout": {"label": "易错", "at": "cv4", "text": "答非所问（离子式 ↔ 化学式）、可逆写成等号 → {扣分}"}}} />;
