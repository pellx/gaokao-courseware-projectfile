import React from 'react';
import {AutoScene} from '../components/auto';

export const Small: React.FC = () => <AutoScene k="small" d={{"tag": "考点三", "title": "小角度近似", "blocks": [{"t": "big", "at": "s1", "text": "摆角很小：sinθ ≈ {x/l}", "size": 52}, {"t": "big", "at": "s2", "text": "{F = −(mg/l)x}", "size": 60}, {"t": "text", "at": "s3", "text": "符合 F = −kx，k = mg/l", "size": 34}], "callout": {"label": "要点", "at": "s4", "text": "小摆角时单摆做{简谐运动}"}}} />;
