import React from 'react';
import {AutoScene} from '../components/auto';

export const Feohthree: React.FC = () => <AutoScene k="feoh3" d={{"tag": "考点五", "title": "Fe(OH)3", "blocks": [{"t": "big", "at": "f31", "text": "Fe^3+ + 3OH^- = Fe(OH)3↓（{红褐色}）", "size": 40}, {"t": "big", "at": "f32", "text": "2Fe(OH)3 ═△═ {Fe2O3} + 3H2O", "size": 40, "c": "orange", "soft": "orangeSoft"}, {"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "沉淀", "at": "f33", "text": "Fe^3+ + NaOH 溶液", "c": "orange", "size": 32}]}, {"blocks": [{"t": "rule", "tag": "胶体", "at": "f33", "text": "FeCl3 滴入{沸水}", "c": "green", "size": 32}]}]}], "callout": {"label": "易错", "at": "f34", "text": "Fe(OH)2 在空气中灼烧 → {Fe2O3}"}}} />;
