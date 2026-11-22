import React from 'react';
import {AutoScene} from '../components/auto';

export const Colloid: React.FC = () => <AutoScene k="colloid" d={{"tag": "考点三", "title": "胶体的性质与应用", "blocks": [{"t": "rule", "tag": "丁达尔效应", "at": "co1", "text": "光束通过胶体出现{光亮的通路} → 鉴别胶体与溶液", "c": "red"}, {"t": "rule", "tag": "能否透过", "at": "co2", "text": "滤纸：{能|green}　　半透膜：{不能|orange}", "c": "orange"}, {"t": "rule", "tag": "净水", "at": "co3", "text": "明矾、铁盐形成胶体 → {吸附}悬浮杂质；{不能杀菌|orange}", "c": "green"}, {"t": "rule", "tag": "课外", "at": "co4", "text": "电泳；聚沉（卤水点豆腐）；渗析（半透膜提纯）", "c": "brown"}], "callout": {"label": "易错", "at": "co5", "text": "胶体{不带电}，带电的是胶体粒子；明矾净水是吸附不是杀菌"}, "beat": {"k": "milk", "at": "co3b", "text": "牛奶、豆浆、云、雾\n都是{胶体|red}\n光照过去 → 一条光路"}}} />;
