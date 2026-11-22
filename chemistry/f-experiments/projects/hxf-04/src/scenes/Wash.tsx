import React from 'react';
import {AutoScene} from '../components/auto';

export const Wash: React.FC = () => <AutoScene k="wash" d={{"tag": "考点七", "title": "沉淀的洗涤与检验洗净", "blocks": [{"t": "panel", "title": "洗涤", "at": "wa1", "lines": ["沿玻璃棒加蒸馏水至{浸没沉淀}", "自然流下，重复 {2～3 次}"], "c": "red", "size": 32}, {"t": "panel", "title": "检验洗净", "at": "wa2", "lines": ["取{最后一次洗涤液}", "加试剂，{无现象}则已洗净"], "c": "orange", "size": 32}], "callout": {"label": "易错", "at": "wa4", "text": "取“{最后一次洗涤液}”，不搅拌"}}} />;
