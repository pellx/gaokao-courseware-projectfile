import React from 'react';
import {AutoScene} from '../components/auto';

export const Titr: React.FC = () => <AutoScene k="titr" d={{"tag": "考点四", "title": "滴定计算", "blocks": [{"t": "table", "at": "ti1", "head": ["方法", "关系式", "依据"], "cols": "1fr 1.4fr 1.4fr", "rows": [{"at": "ti1", "cells": ["KMnO4 法", "MnO4^- ～ {5Fe^2+}", "Mn：+7 → +2（降 5）"]}, {"at": "ti2", "cells": ["K2Cr2O7 法", "Cr2O7^2- ～ {6Fe^2+}", "2 个 Cr：+6 → +3"]}, {"at": "ti3", "cells": ["碘量法", "I2 ～ {2S2O3^2-}", "1 : 2"]}], "size": 31, "rowHeight": 66}, {"t": "big", "at": "ti4", "text": "配成 250 mL，取 25.00 mL 滴定 → 总量 {× 10|orange}", "size": 38}], "callout": {"label": "易错", "at": "ti5", "text": "别漏乘{取样倍数}"}}} />;
