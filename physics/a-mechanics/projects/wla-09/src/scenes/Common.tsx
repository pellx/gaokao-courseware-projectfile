import React from 'react';
import {AutoScene} from '../components/auto';

export const Common: React.FC = () => <AutoScene k="common" d={{"tag": "考点二", "title": "共点力", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "作用点相同", "at": "b1", "lines": ["几个力作用在物体的{同一点}"], "c": "red", "size": 32}]}, {"blocks": [{"t": "panel", "title": "作用线交于一点", "at": "b2", "lines": ["作用线或延长线{交于一点}"], "c": "orange", "size": 32}]}]}, {"t": "text", "at": "b3", "text": "物体可看成质点时，所受各力都可看成共点力", "size": 30}], "callout": {"label": "要点", "at": "b4", "text": "平行四边形定则适用于{共点力}"}, "beat": {"k": "hands", "at": "b3b", "text": "几股力作用于同一点\n{共点力|red}"}}} />;
