import React from 'react';
import {AutoScene} from '../components/auto';

export const Tool: React.FC = () => <AutoScene k="tool" d={{"tag": "考点三", "title": "器材及作用", "blocks": [{"t": "table", "at": "t1", "head": ["器材", "作用"], "cols": "1fr 1.8fr", "rows": [{"at": "t1", "cells": ["油酸酒精溶液", "实验用的{油}"]}, {"at": "t1", "cells": ["浅盘", "盛水"]}, {"at": "t2", "cells": ["爽身粉", "显示油膜的{轮廓}"]}, {"at": "t3", "cells": ["注射器、量筒", "测{一滴溶液}的体积"]}, {"at": "t4", "cells": ["方格玻璃板、彩笔", "描轮廓、{算面积}"]}], "size": 30, "rowHeight": 62}], "callout": {"label": "要点", "at": "t5", "text": "爽身粉显{轮廓}，方格板算{面积}"}}} />;
