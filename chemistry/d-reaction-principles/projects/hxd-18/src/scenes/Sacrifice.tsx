import React from 'react';
import {AutoScene} from '../components/auto';

export const Sacrifice: React.FC = () => <AutoScene k="sacrifice" d={{"tag": "考点四", "title": "牺牲阳极法", "blocks": [{"t": "big", "at": "sa1", "text": "原电池：活泼金属作{负极}被腐蚀，被保护金属作{正极|orange}", "size": 38}, {"t": "items", "items": [{"at": "sa2", "text": "船体外壳嵌{锌块}"}, {"at": "sa2", "text": "地下钢管连{镁块}"}], "size": 34}], "callout": {"label": "易错", "at": "sa4", "text": "牺牲阳极法是{原电池}原理"}, "beat": {"k": "nervous", "at": "sa2b", "text": "锌块{自己被腐蚀|red}\n保护了铁"}}} />;
