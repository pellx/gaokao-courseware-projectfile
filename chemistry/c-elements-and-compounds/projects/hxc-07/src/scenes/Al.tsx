import React from 'react';
import {AutoScene} from '../components/auto';

export const Al: React.FC = () => <AutoScene k="al" d={{"tag": "考点三", "title": "铝与氧化铝", "blocks": [{"t": "rule", "tag": "氧化膜", "at": "a1", "text": "{致密}的 Al2O3 保护层", "c": "brown", "size": 31}, {"t": "items", "items": [{"at": "a2", "text": "2Al + 6HCl = 2AlCl3 + 3H2↑"}, {"at": "a2", "text": "2Al + 2NaOH + 6H2O = 2Na[Al(OH)4] + 3H2↑"}, {"at": "a3", "text": "Al2O3 + 6HCl = 2AlCl3 + 3H2O"}, {"at": "a3", "text": "Al2O3 + 2NaOH + 3H2O = 2Na[Al(OH)4]（{两性}）"}], "size": 31}], "callout": {"label": "易错", "at": "a4", "text": "Al 与 NaOH 溶液反应：{H2O 是氧化剂}"}, "beat": {"k": "foil", "at": "a3b", "text": "铝制餐具\n{不宜长放酸碱食物|red}"}}} />;
