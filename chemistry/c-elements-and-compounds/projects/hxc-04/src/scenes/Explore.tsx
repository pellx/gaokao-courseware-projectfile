import React from 'react';
import {AutoScene} from '../components/auto';

export const Explore: React.FC = () => <AutoScene k="explore" d={{"tag": "考点七", "title": "含氯物质的实验探究", "blocks": [{"t": "rule", "tag": "酸性", "at": "ex2", "text": "NaClO 加酸 → 生成更多 HClO → 氧化性{增强}", "c": "red", "size": 31}, {"t": "rule", "tag": "证明", "at": "ex3", "text": "加淀粉变蓝证明生成 I2；排除{溶解 O2|orange}的干扰", "c": "orange", "size": 31}, {"t": "rule", "tag": "氯水", "at": "ex4", "text": "久置：HClO 分解 → {pH 减小}、c(Cl^-) 增大、颜色变浅", "c": "green", "size": 31}], "callout": {"label": "解题方法", "at": "ex5", "text": "探究谁起作用：设计{只少这一种成分}的对照实验"}}} />;
