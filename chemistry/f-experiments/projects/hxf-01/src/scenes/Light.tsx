import React from 'react';
import {AutoScene} from '../components/auto';

export const Light: React.FC = () => <AutoScene k="light" d={{"tag": "考点四", "title": "见光分解的试剂", "blocks": [{"t": "big", "at": "li1", "text": "{棕色瓶}：浓硝酸、AgNO3、氯水、KMnO4 溶液", "size": 40}, {"t": "items", "items": [{"at": "li2", "text": "浓硝酸久置变{黄}：溶有 NO2"}, {"at": "li3", "text": "氯水{现配现用}"}], "size": 34}], "callout": {"label": "易错", "at": "li4", "text": "浓硝酸：棕色细口瓶 + {玻璃塞}"}}} />;
