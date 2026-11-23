import React from 'react';
import {AutoScene} from '../components/auto';

export const SunMass: React.FC = () => <AutoScene k="sunm" d={{"tag": "考点五", "title": "计算太阳的质量", "blocks": [{"t": "big", "at": "e2", "text": "GMm/r^2 = {m·4π^2r/T^2}", "size": 46}, {"t": "big", "at": "e3", "text": "M = {4π^2r^3/(GT^2)}", "size": 52, "c": "orange", "soft": "orangeSoft"}], "callout": {"label": "要点", "at": "e4", "text": "由环绕天体的 {r、T} 求中心天体质量"}}} />;
