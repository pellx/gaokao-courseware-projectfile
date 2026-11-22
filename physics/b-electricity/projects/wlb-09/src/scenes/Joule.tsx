import React from 'react';
import {AutoScene} from '../components/auto';

export const Joule: React.FC = () => <AutoScene k="joule" d={{"tag": "考点三", "title": "焦耳定律", "blocks": [{"t": "big", "at": "c2", "text": "Q = {I^2Rt}", "size": 60}, {"t": "big", "at": "c3", "text": "P_热 = {I^2R|orange}", "size": 52, "c": "orange", "soft": "orangeSoft"}], "callout": {"label": "要点", "at": "c4", "text": "Q = I^2Rt 计算电热，{任何电路都适用}"}}} />;
