import React from 'react';
import {AutoScene} from '../components/auto';

export const Kp: React.FC = () => <AutoScene k="kp" d={{"tag": "考点七", "title": "压强平衡常数 Kp", "blocks": [{"t": "big", "at": "kp2", "text": "p(B) = p(总) × {n(B) ÷ n(总)}", "size": 44}, {"t": "panel", "title": "例：N2 : H2 : NH3 = 1 : 3 : 2，总压 p", "at": "kp2", "lines": ["p(N2) = p/6，p(H2) = p/2，p(NH3) = p/3", "Kp = (p/3)² ÷ [(p/6) × (p/2)³]"], "c": "orange", "size": 32}], "callout": {"label": "解题方法", "at": "kp4", "text": "三段式求出{各物质的量和总量}，再算分压"}}} />;
