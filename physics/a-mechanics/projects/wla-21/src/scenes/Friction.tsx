import React from 'react';
import {AutoScene} from '../components/auto';

export const Friction: React.FC = () => <AutoScene k="friction" d={{"tag": "考点八", "title": "摩擦力做功", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "正功", "at": "h2", "lines": ["传送带送货物", "静摩擦力与位移{同向}"], "c": "red", "size": 30}]}, {"blocks": [{"t": "panel", "title": "负功 / 不做功", "at": "h3", "lines": ["滑行物块：滑动摩擦力{负功}", "静止桌面：{不做功}"], "c": "orange", "size": 30}]}]}], "callout": {"label": "易错", "at": "h4", "text": "摩擦力{不一定}做负功"}}} />;
