import React from 'react';
import {AutoScene} from '../components/auto';

export const Oxid: React.FC = () => <AutoScene k="oxid" d={{"tag": "考点六", "title": "Na2O2 的强氧化性与漂白性", "blocks": [{"t": "chain", "steps": [{"at": "ox2", "text": "Na2O2 加入\n含酚酞的水", "c": "orange"}, {"at": "ox2", "text": "生成 NaOH\n{变红}", "c": "red"}, {"at": "ox2", "text": "强氧化性\n{褪色}", "c": "red"}], "arrows": [], "center": true, "size": 34}, {"t": "rule", "tag": "课外", "at": "ox3", "text": "Na2O2 + SO2 = Na2SO4；与 FeCl2 溶液 → Fe(OH)3↓ + O2", "c": "brown", "size": 30}], "callout": {"label": "考法", "at": "ox4", "text": "解释“先变红后褪色”：{生成碱} + {强氧化性漂白}"}}} />;
