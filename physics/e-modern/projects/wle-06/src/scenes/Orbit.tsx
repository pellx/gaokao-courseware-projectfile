import React from 'react';
import {AutoScene} from '../components/auto';

export const Orbit: React.FC = () => <AutoScene k="orbit" d={{"tag": "考点四", "title": "轨道量子化与定态假设", "blocks": [{"t": "rule", "tag": "轨道量子化", "at": "d1", "text": "轨道半径只能取某些{分立的数值}", "c": "red"}, {"t": "rule", "tag": "定态", "at": "d3", "text": "原子只能处于一系列{不连续}的能量状态", "c": "orange"}, {"t": "text", "at": "d2", "text": "量子化的能量值叫{能级}", "size": 34}], "callout": {"label": "易错", "at": "d4", "text": "定态中电子{不辐射}能量"}, "beat": {"k": "stairs", "at": "d3b", "text": "能量也是\n{一级一级|red}的"}}} />;
