import React from 'react';
import {AutoScene} from '../components/auto';

export const Homolog: React.FC = () => <AutoScene k="homolog" d={{"tag": "考点五", "title": "苯的同系物的氧化", "blocks": [{"t": "big", "at": "ho2", "text": "C6H5CH3 → C6H5{COOH}（酸性 KMnO4）", "size": 42}, {"t": "rule", "tag": "条件", "at": "ho3", "text": "与苯环相连的碳上{要有氢}；侧链再长也变成 —COOH", "c": "red", "size": 31}], "callout": {"label": "易错", "at": "ho4", "text": "叔丁苯：相连碳{无氢}，不被氧化"}}} />;
