import React from 'react';
import {AutoScene} from '../components/auto';

export const Timer: React.FC = () => <AutoScene k="timer" d={{"tag": "考点二", "title": "打点计时器", "blocks": [{"t": "table", "at": "t1", "head": ["计时器", "电源", "打点周期"], "cols": "1.3fr 1.3fr 1fr", "rows": [{"at": "t1", "cells": ["电磁打点计时器", "{低压}交变电源", "0.02 s"]}, {"at": "t2", "cells": ["电火花计时器", "{220 V} 交变电源", "0.02 s"]}], "size": 32, "rowHeight": 72}, {"t": "big", "at": "t3", "text": "f = 50 Hz　→　T = {0.02 s}", "size": 44}, {"t": "text", "at": "t4", "text": "点迹同时记录{时间}和{位移}", "size": 32}], "callout": {"label": "易错", "at": "t5", "text": "都用{交变电源}；周期由电源频率决定"}, "beat": {"k": "drum", "at": "t4b", "text": "鼓点间隔相等\n每 {0.02 s|red} 打一个点"}}} />;
