import React from 'react';
import {AutoScene} from '../components/auto';

export const Blank: React.FC = () => <AutoScene k="blank" d={{"tag": "考点四", "title": "对照实验与空白实验", "blocks": [{"t": "rule", "tag": "对照", "at": "bl1", "text": "{不加}或{换成}某物质", "c": "red", "size": 32}, {"t": "rule", "tag": "空白", "at": "bl2", "text": "用{等量的水或不含该离子的溶液}代替", "c": "orange", "size": 32}, {"t": "text", "at": "bl2", "text": "例：用 NaCl 溶液代替 FeCl3 溶液 → 看 {Cl^-} 有无影响", "size": 32, "center": true}], "callout": {"label": "易错", "at": "bl4", "text": "代替物：{只差一个离子}"}, "beat": {"k": "doodle", "at": "bl3b", "text": "空白实验像{线稿|red}\n用来对比"}}} />;
