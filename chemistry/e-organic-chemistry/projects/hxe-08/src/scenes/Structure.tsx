import React from 'react';
import {AutoScene} from '../components/auto';

export const Structure: React.FC = () => <AutoScene k="structure" d={{"tag": "考点一", "title": "苯的结构", "blocks": [{"t": "big", "at": "st1", "text": "6 个碳碳键{完全相同}：介于单键和双键之间", "size": 40}, {"t": "items", "items": [{"at": "st2", "text": "证据：邻二甲苯{只有一种}"}, {"at": "st2", "text": "不能使溴水、酸性 KMnO4 因反应褪色"}], "size": 33}, {"t": "big", "at": "st3", "text": "易取代、难加成、{难氧化}", "size": 40, "c": "orange", "soft": "orangeSoft"}], "callout": {"label": "易错", "at": "st4", "text": "苯使溴水层褪色是{萃取}"}, "beat": {"k": "flower", "at": "st3b", "text": "六个碳一模一样\n{没有单双之分|red}"}}} />;
