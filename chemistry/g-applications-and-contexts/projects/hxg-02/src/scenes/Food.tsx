import React from 'react';
import {AutoScene} from '../components/auto';

export const Food: React.FC = () => <AutoScene k="food" d={{"tag": "考点五", "title": "食品添加剂与消毒剂", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "食品添加剂", "at": "fo1", "lines": ["防腐剂、着色剂", "{抗氧化剂}：维生素 C（还原性）", "膨松剂：NaHCO3"], "c": "orange", "size": 30}]}, {"blocks": [{"t": "panel", "title": "消毒剂", "at": "fo2", "lines": ["NaClO、ClO2：{强氧化性}", "酒精 {75%}：蛋白质变性"], "c": "red", "size": 30}]}]}], "callout": {"label": "易错", "at": "fo4", "text": "酒精{不是越浓越好}；84 不与洁厕灵混用"}}} />;
