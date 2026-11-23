import React from 'react';
import {AutoScene} from '../components/auto';

export const AmpM: React.FC = () => <AutoScene k="amp" d={{"tag": "考点八", "title": "改装成电流表", "blocks": [{"t": "rule", "tag": "方法", "at": "m1", "text": "表头{并联}分流电阻", "c": "red", "size": 34}, {"t": "big", "at": "m2", "text": "R = {I_gR_g/(I − I_g)}", "size": 56}], "callout": {"label": "要点", "at": "m3", "text": "量程越大，内阻{越小}"}}} />;
