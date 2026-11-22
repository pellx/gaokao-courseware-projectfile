import React from 'react';
import {AutoScene} from '../components/auto';

export const Prep: React.FC = () => <AutoScene k="prep" d={{"tag": "考点四", "title": "溴苯、硝基苯的制备", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "溴苯", "at": "pr1", "lines": ["HBr 遇水蒸气：{白雾}", "导管不插入水中：防倒吸", "粗产品用 {NaOH 溶液}洗去 Br2"], "c": "red", "size": 30}]}, {"blocks": [{"t": "panel", "title": "硝基苯", "at": "pr3", "lines": ["先浓硝酸，{再慢慢加浓硫酸}", "冷却后加苯", "{水浴}控制 50～60 ℃"], "c": "orange", "size": 30}]}]}], "callout": {"label": "易错", "at": "pr4", "text": "检验 HBr 前先用 CCl4 除去 {Br2}"}, "beat": {"k": "guitar", "at": "pr3b", "text": "浓硫酸\n{后加、慢慢加|red}"}}} />;
