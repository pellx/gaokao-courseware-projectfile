import React from 'react';
import {AutoScene} from '../components/auto';

export const Essence: React.FC = () => <AutoScene k="essence" d={{"tag": "考点一", "title": "金属冶炼的本质", "blocks": [{"t": "big", "at": "es1", "text": "M^n+ + ne^- = M　（{还原}）", "size": 50}, {"t": "big", "at": "es2", "text": "金属越活泼 → 阳离子越{难还原|orange} → 冶炼越难", "size": 38, "c": "orange", "soft": "orangeSoft"}], "callout": {"label": "易错", "at": "es3", "text": "冶炼都是{还原反应}：金属的化合价降低"}, "beat": {"k": "ruri", "at": "es2b", "text": "矿石里是化合态\n{还原|red}才得到单质"}}} />;
