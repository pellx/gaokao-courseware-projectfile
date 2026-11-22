import React from 'react';
import {AutoScene} from '../components/auto';

export const Hclo: React.FC = () => <AutoScene k="hclo" d={{"tag": "考点五", "title": "次氯酸的性质", "blocks": [{"t": "rule", "tag": "弱酸性", "at": "hc1", "text": "酸性：H2CO3 > {HClO}", "c": "red", "size": 34}, {"t": "rule", "tag": "不稳定", "at": "hc2", "text": "2HClO ═光照═ 2HCl + O2↑：{棕色瓶、避光保存|orange}", "c": "orange", "size": 34}, {"t": "rule", "tag": "强氧化性", "at": "hc3", "text": "杀菌、消毒、{漂白}有色物质", "c": "green", "size": 34}], "callout": {"label": "易错", "at": "hc4", "text": "湿润布条褪色靠 {HClO}；干燥 Cl2 不能漂白干燥布条"}, "beat": {"k": "sun", "at": "hc2b", "text": "怕光\n{HClO 见光分解|red}"}}} />;
