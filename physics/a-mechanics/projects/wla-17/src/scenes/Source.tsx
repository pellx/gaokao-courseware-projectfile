import React from 'react';
import {AutoScene} from '../components/auto';

export const Source: React.FC = () => <AutoScene k="source" d={{"tag": "考点二", "title": "向心力的来源", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "某一个力", "at": "s1", "lines": ["重力", "弹力（拉力、支持力）", "摩擦力"], "c": "red", "size": 32}]}, {"blocks": [{"t": "panel", "title": "几个力共同", "at": "s2", "lines": ["几个力的合力", "某个力的分力"], "c": "orange", "size": 32}]}]}, {"t": "items", "items": [{"at": "s3", "text": "光滑水平面上绳拉小球：{拉力}提供"}, {"at": "s3", "text": "圆锥摆：{重力与拉力的合力}提供"}], "size": 30}], "callout": {"label": "易错", "at": "s4", "text": "受力分析{不另画}向心力"}}} />;
