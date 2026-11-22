import React from 'react';
import {AutoScene} from '../components/auto';

export const Cation: React.FC = () => <AutoScene k="cation" d={{"tag": "考点三", "title": "NH4^+、Na^+、K^+ 的检验", "blocks": [{"t": "rule", "tag": "NH4^+", "at": "ca1", "text": "NaOH 溶液、{加热} → 湿润红色石蕊试纸{变蓝}", "c": "red", "size": 31}, {"t": "rule", "tag": "Na^+ / K^+", "at": "ca2", "text": "焰色：黄色 / 透过{蓝色钴玻璃}看紫色", "c": "orange", "size": 31}, {"t": "text", "at": "ca3", "text": "铂丝用{盐酸}洗净，灼烧至无色", "size": 32, "center": true}], "callout": {"label": "易错", "at": "ca4", "text": "NH4^+：{加热} + {湿润}试纸"}, "beat": {"k": "chinatsu", "at": "ca3b", "text": "黄色火焰\n不能说明{没有 K^+|red}"}}} />;
