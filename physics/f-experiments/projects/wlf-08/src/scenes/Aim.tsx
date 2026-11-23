import React from 'react';
import {AutoScene} from '../components/auto';

export const Aim: React.FC = () => <AutoScene k="aim" d={{"tag": "考点一", "title": "实验目的与方法", "blocks": [{"t": "rule", "tag": "目的", "at": "a1", "text": "探究向心力 F 与{质量 m}、{半径 r}、{角速度 ω} 的关系", "c": "red"}, {"t": "rule", "tag": "方法", "at": "a2", "text": "{控制变量法}：每次只改变一个量", "c": "orange"}, {"t": "table", "at": "a3", "head": ["探究关系", "保持不变"], "cols": "1fr 1fr", "rows": [{"at": "a3", "cells": ["F 与 ω", "{m、r}"]}, {"at": "a3", "cells": ["F 与 r", "{m、ω}"]}, {"at": "a3", "cells": ["F 与 m", "{r、ω}"]}], "size": 32, "rowHeight": 60}], "callout": {"label": "要点", "at": "a4", "text": "每次只改变{一个量}，其余两个保持不变"}, "beat": {"k": "triple", "at": "a3b", "text": "其他条件{一模一样|red}\n只改变一个量"}}} />;
