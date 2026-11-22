import React from 'react';
import {AutoScene} from '../components/auto';

export const Coni: React.FC = () => <AutoScene k="coni" d={{"tag": "考点四", "title": "钴与镍", "blocks": [{"t": "rule", "tag": "分离", "at": "cn1", "text": "Co^2+、Ni^2+ 性质相近：{调 pH} 或 {萃取}", "c": "red", "size": 31}, {"t": "rule", "tag": "Co(Ⅲ)〔课外〕", "at": "cn2", "text": "氧化性很强：酸性下把 Cl^- 氧化成 Cl2", "c": "orange", "size": 31}, {"t": "big", "at": "cn3", "text": "浸出：加 {H2O2} 或 Na2SO3，把 Co(Ⅲ) 还原成 Co^2+", "size": 38}], "callout": {"label": "易错", "at": "cn4", "text": "浸钴时 H2O2 作{还原剂}，生成 O2"}}} />;
