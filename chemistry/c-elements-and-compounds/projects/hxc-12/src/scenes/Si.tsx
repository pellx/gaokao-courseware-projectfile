import React from 'react';
import {AutoScene} from '../components/auto';

export const Si: React.FC = () => <AutoScene k="si" d={{"tag": "考点二", "title": "硅单质", "blocks": [{"t": "big", "at": "sl1", "text": "Si：{半导体} → 芯片、太阳能电池板", "size": 42}, {"t": "big", "at": "sl2", "text": "SiO2 + 2C ═高温═ Si + {2CO↑}", "size": 42, "c": "orange", "soft": "orangeSoft"}, {"t": "chain", "steps": [{"at": "sl3", "text": "粗硅"}, {"at": "sl3", "text": "SiHCl3"}, {"at": "sl3", "text": "高纯硅", "c": "red"}], "arrows": ["+HCl", "+H2"], "center": true, "size": 36}], "callout": {"label": "易错", "at": "sl4", "text": "制粗硅生成 {CO}，不是 CO2"}}} />;
