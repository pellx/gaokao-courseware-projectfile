import React from 'react';
import {AutoScene} from '../components/auto';

export const Thm: React.FC = () => <AutoScene k="thm" d={{"tag": "考点七", "title": "动量定理", "blocks": [{"t": "chain", "steps": [{"at": "t1", "text": "F = ma"}, {"at": "t2", "text": "a = (v′ − v)/Δt"}, {"at": "t2", "text": "{FΔt = mv′ − mv}"}], "arrows": []}, {"t": "big", "at": "t3", "text": "I_合 = {Δp}", "size": 56}], "callout": {"label": "易错", "at": "t4", "text": "是{合力}的冲量"}}} />;
