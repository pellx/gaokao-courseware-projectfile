import React from 'react';
import {AutoScene} from '../components/auto';

export const End: React.FC = () => <AutoScene k="end" d={{"tag": "考点七", "title": "实验结论", "blocks": [{"t": "table", "at": "n1", "head": ["改变的量", "结果"], "cols": "1fr 2fr", "rows": [{"at": "n2", "cells": ["电阻 R", "只改变{快慢}，电荷量不变"]}, {"at": "n3", "cells": ["电源电压 U", "电荷量 {Q = CU} 改变"]}, {"at": "n3", "cells": ["电容 C", "电荷量 {Q = CU} 改变"]}], "size": 32, "rowHeight": 64}, {"t": "text", "at": "n1", "text": "充、放电电流都{逐渐减小到 0}", "size": 34}], "callout": {"label": "易错", "at": "n4", "text": "R 变大：变{慢}，图线下{面积不变}"}}} />;
