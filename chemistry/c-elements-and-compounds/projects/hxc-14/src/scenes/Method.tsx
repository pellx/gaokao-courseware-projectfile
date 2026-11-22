import React from 'react';
import {AutoScene} from '../components/auto';

export const Method: React.FC = () => <AutoScene k="method" d={{"tag": "考点七", "title": "陌生金属的解题方法", "blocks": [{"t": "chain", "steps": [{"at": "mt2", "text": "① 标化合价\n→ 氧化还原", "c": "red"}, {"at": "mt3", "text": "② 看沉淀\n→ Ksp", "c": "orange"}, {"at": "mt3", "text": "③ 看配体\n→ 配位平衡", "c": "green"}], "arrows": [], "center": true, "size": 36}, {"t": "text", "at": "mt3", "text": "常见配体：NH3、Cl^-、CN^-、SCN^-、H2O", "size": 32, "center": true, "c": "muted"}], "callout": {"label": "解题方法", "at": "mt4", "text": "{价态、沉淀、配体}三条线，颜色和现象是依据"}, "beat": {"k": "yui", "at": "mt3b", "text": "陌生金属\n{冷静地按三步走|red}"}}} />;
