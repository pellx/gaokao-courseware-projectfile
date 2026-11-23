import React from 'react';
import {AutoScene} from '../components/auto';

export const Spec: React.FC = () => <AutoScene k="spec" d={{"tag": "考点五", "title": "比结合能", "blocks": [{"t": "big", "at": "e1", "text": "比结合能 = {结合能 ÷ 核子数}", "size": 48}, {"t": "rule", "tag": "稳定性", "at": "e3", "text": "比结合能越大，原子核{越稳定}", "c": "orange"}], "callout": {"label": "易错", "at": "e4", "text": "稳定性看{比结合能}，不看结合能"}}} />;
