import React from 'react';
import {AutoScene} from '../components/auto';

export const Summary: React.FC = () => <AutoScene k="sum" d={{"tag": "考点六", "title": "ΔH 的计算方法汇总", "blocks": [{"t": "table", "at": "su1", "head": ["已知", "ΔH 的算法"], "cols": "1fr 2.4fr", "rows": [{"at": "su1", "cells": ["总能量", "{生成物总能量 − 反应物总能量}"]}, {"at": "su2", "cells": ["键能", "{反应物键能总和 − 生成物键能总和|orange}"]}, {"at": "su2", "cells": ["活化能", "E1 − E2"]}, {"at": "su3", "cells": ["方程式", "盖斯定律加减"]}, {"at": "su4", "cells": ["热量", "Q = n × |ΔH|"]}], "size": 31, "rowHeight": 62}], "callout": {"label": "解题方法", "at": "su5", "text": "看给了什么用什么；键能与能量公式{正好相反}"}}} />;
