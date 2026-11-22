import React from 'react';
import {AutoScene} from '../components/auto';

export const Pole: React.FC = () => <AutoScene k="pole" d={{"tag": "考点一", "title": "电解池与阴阳极判断", "blocks": [{"t": "big", "at": "po1", "text": "电能 → {化学能}", "size": 46}, {"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "阳极", "at": "po2", "text": "接电源{正极}，{氧化}反应", "c": "red", "size": 33}]}, {"blocks": [{"t": "rule", "tag": "阴极", "at": "po2", "text": "接电源负极，{还原|orange}反应", "c": "orange", "size": 33}]}]}, {"t": "text", "at": "po3", "text": "现象：出 Cl2、O2 → 阳极；析出金属、出 H2 → 阴极", "size": 31, "center": true}], "callout": {"label": "易错", "at": "po4", "text": "原电池：正负极；电解池：{阴阳极}"}, "beat": {"k": "shine", "at": "po2b", "text": "{阳极接正极}\n{阳极氧化|red}"}}} />;
