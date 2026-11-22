import React from 'react';
import {AutoScene} from '../components/auto';

export const Nmr: React.FC = () => <AutoScene k="nmr" d={{"tag": "考点四", "title": "核磁共振氢谱：峰数与面积比", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "峰数", "at": "nm1", "text": "= {等效氢种类}", "c": "red", "size": 33}]}, {"blocks": [{"t": "rule", "tag": "面积比", "at": "nm1", "text": "= {各种氢的个数比}", "c": "orange", "size": 33}]}]}, {"t": "table", "at": "nm4", "head": ["面积数", "常见结构"], "cols": "1fr 2fr", "rows": [{"at": "nm4", "cells": ["3", "—CH3"]}, {"at": "nm2", "cells": ["6", "{两个等效 —CH3}"]}, {"at": "nm4", "cells": ["9", "—C(CH3)3"]}], "size": 32, "rowHeight": 58}], "callout": {"label": "解题方法", "at": "nm4", "text": "用面积比{分配 H 原子}"}, "beat": {"k": "hat", "at": "nm3b", "text": "想少几组峰\n结构{要对称|red}"}}} />;
