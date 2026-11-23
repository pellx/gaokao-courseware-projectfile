import React from 'react';
import {AutoScene} from '../components/auto';

export const VoltM: React.FC = () => <AutoScene k="volt" d={{"tag": "考点七", "title": "改装成电压表", "blocks": [{"t": "rule", "tag": "方法", "at": "v1", "text": "表头{串联}分压电阻", "c": "red", "size": 34}, {"t": "big", "at": "v2", "text": "R = {U/I_g − R_g}", "size": 56}], "callout": {"label": "要点", "at": "v3", "text": "量程越大，内阻{越大}"}, "beat": {"k": "a3", "at": "v2b", "text": "串联大电阻\n扛住{大电压|red}"}}} />;
