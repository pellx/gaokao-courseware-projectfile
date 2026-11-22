import React from 'react';
import {AutoScene} from '../components/auto';

export const Dettwo: React.FC = () => <AutoScene k="det2" d={{"tag": "考点四", "title": "Fe^2+ 的检验", "blocks": [{"t": "table", "at": "d21", "head": ["方法", "操作与现象", "注意"], "cols": "0.9fr 2.2fr 1.6fr", "rows": [{"at": "d21", "cells": ["KSCN + 氯水", "先加 KSCN {无现象}，再加氯水{变红}", "{顺序不能反}"]}, {"at": "d23", "cells": ["K3[Fe(CN)6]", "生成{蓝色沉淀|orange}", "不受 Fe^3+ 干扰"]}, {"at": "d24", "cells": ["酸性 KMnO4", "紫红色褪去", "{有 Cl^- 时不能用}"]}, {"at": "d24", "cells": ["NaOH", "白 → 灰绿 → 红褐", "有 Fe^3+ 时看不清"]}], "size": 29, "rowHeight": 64}], "callout": {"label": "解题方法", "at": "d25", "text": "已有 Fe^3+ 时检验 Fe^2+：用 {K3[Fe(CN)6]}，不用 KSCN 法"}}} />;
