import React from 'react';
import {AutoScene} from '../components/auto';

export const Filter: React.FC = () => <AutoScene k="filter" d={{"tag": "考点二", "title": "过滤", "blocks": [{"t": "items", "items": [{"at": "fi2", "text": "{一贴}：滤纸紧贴漏斗内壁"}, {"at": "fi2", "text": "{二低}：滤纸低于漏斗边缘；液面低于滤纸边缘"}, {"at": "fi2", "text": "{三靠}：烧杯靠玻璃棒；玻璃棒靠三层滤纸；漏斗下端靠烧杯内壁"}, {"at": "fi3", "text": "玻璃棒：{引流}"}], "size": 32}], "callout": {"label": "易错", "at": "fi4", "text": "过滤时{不能搅拌}"}}} />;
