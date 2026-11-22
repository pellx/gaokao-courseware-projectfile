import React from 'react';
import {AutoScene} from '../components/auto';

export const Detect: React.FC = () => <AutoScene k="detect" d={{"tag": "考点五", "title": "常见离子的检验", "blocks": [{"t": "table", "at": "de1", "head": ["离子", "试剂与顺序", "现象", "先加酸的目的"], "cols": "0.7fr 2fr 1.1fr 1.6fr", "rows": [{"at": "de1", "cells": ["Cl^-", "{稀 HNO3}，再加 AgNO3", "白色沉淀", "排除 CO3^2- 干扰"]}, {"at": "de2", "cells": ["SO4^2-", "{稀盐酸}（无现象），再加 BaCl2", "白色沉淀", "排除 Ag^+、CO3^2-、SO3^2-"]}, {"at": "de3", "cells": ["CO3^2-", "稀盐酸，气体通入澄清石灰水", "石灰水变浑浊", "—"]}], "size": 29, "rowHeight": 64}], "callout": {"label": "答题模板", "at": "de4", "text": "取少量待测液 → 先加{排除干扰}的试剂 → 再加检验试剂 → 现象 → 结论"}, "beat": {"k": "detect", "at": "de3b", "text": "侦探办案\n{先排除干扰|red}\n再下结论"}}} />;
