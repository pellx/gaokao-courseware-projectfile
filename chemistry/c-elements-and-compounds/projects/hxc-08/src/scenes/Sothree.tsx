import React from 'react';
import {AutoScene} from '../components/auto';

export const Sothree: React.FC = () => <AutoScene k="so3" d={{"tag": "考点六", "title": "SO3 与工业制硫酸", "blocks": [{"t": "chain", "steps": [{"at": "so2", "text": "FeS2"}, {"at": "so2", "text": "SO2"}, {"at": "so2", "text": "SO3"}, {"at": "so3", "text": "H2SO4", "c": "red"}], "arrows": ["O2、高温", "O2、催化剂、△", "{98.3% 浓硫酸}吸收"], "center": true, "size": 38}, {"t": "rule", "tag": "SO3", "at": "so1", "text": "SO3 + H2O = H2SO4；标况下{不是气体}", "c": "orange", "size": 32}], "callout": {"label": "易错", "at": "so4", "text": "吸收 SO3 用 {98.3% 浓硫酸}，不用水"}}} />;
