import React from 'react';
import {AutoScene} from '../components/auto';

export const Agppt: React.FC = () => <AutoScene k="agppt" d={{"tag": "考点四", "title": "银的沉淀", "blocks": [{"t": "table", "at": "ap1", "head": ["沉淀", "颜色", "溶解度"], "cols": "1fr 1fr 1.6fr", "rows": [{"at": "ap1", "cells": ["AgCl", "{白色}", "最大"]}, {"at": "ap1", "cells": ["AgBr", "{浅黄色|orange}", "↓"]}, {"at": "ap1", "cells": ["AgI", "{黄色|orange}", "↓"]}, {"at": "ap1", "cells": ["Ag2S", "黑色", "最小"]}], "size": 32, "rowHeight": 60}, {"t": "big", "at": "ap3", "text": "AgCl(s) + I^- ⇌ {AgI(s)} + Cl^-（白 → 黄）", "size": 38}], "callout": {"label": "易错", "at": "ap4", "text": "比较 Ksp：Ag^+ 必须{先沉淀完全}，否则不能说明转化"}}} />;
