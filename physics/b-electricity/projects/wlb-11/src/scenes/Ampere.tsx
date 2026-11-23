import React from 'react';
import {AutoScene} from '../components/auto';

export const Ampere: React.FC = () => <AutoScene k="ampere" d={{"tag": "考点四", "title": "安培定则与常见磁场", "blocks": [{"t": "table", "at": "d2", "head": ["电流", "右手拇指", "弯曲四指"], "cols": "1fr 1fr 1fr", "rows": [{"at": "d2", "cells": ["直线电流", "{电流方向}", "磁感线环绕方向"]}, {"at": "d3", "cells": ["环形电流、螺线管", "{内部磁场}方向", "电流环绕方向"]}], "size": 30, "rowHeight": 64}, {"t": "rule", "tag": "螺线管", "at": "d4", "text": "外部像条形磁体，内部近似{匀强磁场}", "c": "orange", "size": 32}], "callout": {"label": "易错", "at": "d5", "text": "直线：拇指指电流　环形：{四指指电流}"}, "beat": {"k": "paw", "at": "d3b", "text": "四指弯曲\n指{环绕方向|red}"}}} />;
