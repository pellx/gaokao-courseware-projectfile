import React from 'react';
import {AutoScene} from '../components/auto';

export const Cond: React.FC = () => <AutoScene k="cond" d={{"tag": "考点四", "title": "发生全反射的条件", "blocks": [{"t": "items", "items": [{"at": "d2", "text": "光从{光密}射入{光疏}"}, {"at": "d3", "text": "入射角 {≥ C}"}], "size": 44}], "callout": {"label": "易错", "at": "d4", "text": "光疏 → 光密：{不会}全反射"}}} />;
