import React from 'react';
import {AutoScene} from '../components/auto';

export const Agent: React.FC = () => <AutoScene k="agent" d={{"tag": "考点四", "title": "氧化剂与还原剂", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "还原剂", "at": "ag2", "lines": ["化合价{升高}", "{失去}电子", "被{氧化}", "→ 氧化产物"], "c": "red", "size": 34}]}, {"blocks": [{"t": "panel", "title": "氧化剂", "at": "ag3", "lines": ["化合价{降低|orange}", "{得到|orange}电子", "被{还原|orange}", "→ 还原产物"], "c": "orange", "size": 34}]}]}, {"t": "big", "at": "ag4", "text": "Fe2O3（{氧化剂|orange}）+ 3CO（{还原剂}）= 2Fe（还原产物）+ 3CO2（氧化产物）", "size": 32}], "callout": {"label": "易错", "at": "ag5", "text": "氧化剂{被还原}，还原剂{被氧化}：名称和过程相反"}, "beat": {"k": "up", "at": "ag3b", "text": "化合价升高\n失电子、被氧化\n= {还原剂|red}"}}} />;
