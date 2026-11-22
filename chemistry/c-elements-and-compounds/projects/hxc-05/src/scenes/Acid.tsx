import React from 'react';
import {AutoScene} from '../components/auto';

export const Acid: React.FC = () => <AutoScene k="acid" d={{"tag": "考点二", "title": "铁与酸", "blocks": [{"t": "big", "at": "ac1", "text": "Fe + 2H^+ = {Fe^2+} + H2↑（稀硫酸、盐酸）", "size": 40}, {"t": "rule", "tag": "钝化", "at": "ac2", "text": "常温遇{浓 H2SO4、浓 HNO3}：表面生成致密氧化膜", "c": "red", "size": 32}, {"t": "rule", "tag": "稀硝酸", "at": "ac3", "text": "不放 H2，生成 {NO|orange}；Fe 过量最终得 Fe^2+", "c": "orange", "size": 32}], "callout": {"label": "易错", "at": "ac4", "text": "钝化{是化学变化}，不是不反应"}}} />;
