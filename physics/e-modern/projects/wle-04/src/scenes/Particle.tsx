import React from 'react';
import {AutoScene} from '../components/auto';

export const Particle: React.FC = () => <AutoScene k="particle" d={{"tag": "考点三", "title": "光的粒子性", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "光电效应", "at": "c1", "lines": ["光子具有{能量}", "ε = hν"], "c": "red", "size": 34}]}, {"blocks": [{"t": "panel", "title": "康普顿效应", "at": "c2", "lines": ["光子还具有{动量}", "p = h/λ"], "c": "orange", "size": 34}]}]}, {"t": "big", "at": "c3", "text": "都说明光具有{粒子性}", "size": 46}], "callout": {"label": "要点", "at": "c4", "text": "光电效应看{能量}，康普顿效应看{动量}"}}} />;
