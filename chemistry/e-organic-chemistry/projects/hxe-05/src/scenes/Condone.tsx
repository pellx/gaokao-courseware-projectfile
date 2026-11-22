import React from 'react';
import {AutoScene} from '../components/auto';

export const Condone: React.FC = () => <AutoScene k="cond1" d={{"tag": "考点二", "title": "条件翻译（一）", "blocks": [{"t": "table", "at": "c11", "head": ["题目条件", "对应结构"], "cols": "1.6fr 1.6fr", "rows": [{"at": "c11", "cells": ["能发生银镜反应", "{—CHO}（含 HCOO—）"]}, {"at": "c12", "cells": ["与 NaHCO3 反应放出 CO2", "{—COOH}"]}, {"at": "c13", "cells": ["遇 FeCl3 显紫色", "{酚羟基}"]}], "size": 33, "rowHeight": 70}], "callout": {"label": "易错", "at": "c14", "text": "银镜反应{不一定是醛}：甲酸酯也行"}, "beat": {"k": "wow", "at": "c13b", "text": "一句条件\n{锁定一个官能团|red}"}}} />;
