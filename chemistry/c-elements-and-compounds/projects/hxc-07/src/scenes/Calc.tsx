import React from 'react';
import {AutoScene} from '../components/auto';

export const Calc: React.FC = () => <AutoScene k="calc" d={{"tag": "考点六", "title": "金属与酸反应的计算", "blocks": [{"t": "big", "at": "ca4", "text": "n(金属) × 失电子数 = {n(H2) × 2}", "size": 44}, {"t": "table", "at": "ca2", "head": ["金属", "失电子数", "生成 1 mol H2 需要", "每克失电子（mol）"], "cols": "0.8fr 1fr 1.4fr 1.4fr", "rows": [{"at": "ca2", "cells": ["Na", "1", "2 mol", "1/23"]}, {"at": "ca2", "cells": ["Mg", "2", "1 mol", "2/24"]}, {"at": "ca2", "cells": ["Al", "3", "{2/3 mol}", "{3/27（最多）}"]}], "size": 31, "rowHeight": 64}], "callout": {"label": "解题方法", "at": "ca4", "text": "用{得失电子守恒}：每生成 1 mol H2 得 2 mol 电子"}}} />;
