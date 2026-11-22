import React from 'react';
import {AutoScene} from '../components/auto';

export const Mirror: React.FC = () => <AutoScene k="mirror" d={{"tag": "考点三", "title": "银镜反应", "blocks": [{"t": "rule", "tag": "配制", "at": "mi1", "text": "AgNO3 中{逐滴加稀氨水}，至沉淀恰好溶解", "c": "red", "size": 31}, {"t": "big", "at": "mi2", "text": "RCHO ～ {2Ag}　（水浴加热）", "size": 44}, {"t": "text", "at": "mi3", "text": "试管洁净；{水浴加热}；不振荡", "size": 32, "center": true}], "callout": {"label": "易错", "at": "mi4", "text": "顺序：{氨水滴入 AgNO3}；1 mol —CHO ～ 2 mol Ag"}, "beat": {"k": "sailor", "at": "mi3b", "text": "试管壁亮闪闪\n{析出的银|red}"}}} />;
