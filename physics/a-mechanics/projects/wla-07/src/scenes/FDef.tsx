import React from 'react';
import {AutoScene} from '../components/auto';

export const FDef: React.FC = () => <AutoScene k="fdef" d={{"tag": "考点一", "title": "摩擦力", "blocks": [{"t": "rule", "tag": "定义", "at": "a2", "text": "阻碍{相对运动}或{相对运动趋势}的力", "c": "red", "size": 34}, {"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "滑动摩擦力", "at": "a3", "lines": ["发生{相对运动}"], "c": "red", "size": 32}]}, {"blocks": [{"t": "panel", "title": "静摩擦力", "at": "a3", "lines": ["有相对运动{趋势|orange}", "仍相对静止"], "c": "orange", "size": 32}]}]}, {"t": "text", "at": "a4", "text": "作用在{接触面}上，方向沿接触面", "size": 32}], "callout": {"label": "要点", "at": "a5", "text": "阻碍的是{相对}运动"}}} />;
