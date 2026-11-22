import React from 'react';
import {AutoScene} from '../components/auto';

export const Oxidant: React.FC = () => <AutoScene k="oxidant" d={{"tag": "考点三", "title": "加入氧化剂或还原剂", "blocks": [{"t": "big", "at": "ox1", "text": "Fe^2+ → {Fe^3+}：Fe(OH)3 在低 pH 下沉淀完全", "size": 38}, {"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "氧化剂", "at": "ox2", "text": "首选 {H2O2}：产物是水", "c": "red", "size": 31}]}, {"blocks": [{"t": "rule", "tag": "还原剂", "at": "ox3", "text": "SO2、Na2SO3、Fe 粉", "c": "orange", "size": 31}]}]}], "callout": {"label": "易错", "at": "ox4", "text": "H2O2 温度高会{分解}"}}} />;
