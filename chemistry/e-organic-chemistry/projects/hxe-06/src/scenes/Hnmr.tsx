import React from 'react';
import {AutoScene} from '../components/auto';

export const Hnmr: React.FC = () => <AutoScene k="hnmr" d={{"tag": "考点七", "title": "核磁共振氢谱", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "峰组数", "at": "hn1", "text": "= {氢的种类}", "c": "red", "size": 33}]}, {"blocks": [{"t": "rule", "tag": "面积比", "at": "hn1", "text": "= {个数比}", "c": "orange", "size": 33}]}]}, {"t": "table", "at": "hn2", "head": ["物质", "峰组数", "面积比"], "cols": "1.4fr 1fr 1fr", "rows": [{"at": "hn2", "cells": ["CH3CH2OH", "{3}", "3 : 2 : 1"]}, {"at": "hn2", "cells": ["CH3OCH3", "{1}", "—"]}], "size": 33, "rowHeight": 64}], "callout": {"label": "解题方法", "at": "hn4", "text": "数峰组 → 用面积比{分配氢}"}}} />;
