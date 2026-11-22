import React from 'react';
import {AutoScene} from '../components/auto';

export const Grignard: React.FC = () => <AutoScene k="grignard" d={{"tag": "考点五", "title": "格氏试剂", "blocks": [{"t": "big", "at": "gr1", "text": "RX + Mg → {RMgX}（无水乙醚）", "size": 42}, {"t": "text", "at": "gr2", "text": "RMgX + R′CHO → 水解 → {R′CH(OH)R}", "size": 36, "center": true}, {"t": "table", "at": "gr3", "head": ["羰基化合物", "得到"], "cols": "1fr 1fr", "rows": [{"at": "gr3", "cells": ["HCHO", "伯醇"]}, {"at": "gr3", "cells": ["其他醛", "{仲醇}"]}, {"at": "gr3", "cells": ["酮", "叔醇"]}], "size": 31, "rowHeight": 54}], "callout": {"label": "易错", "at": "gr4", "text": "R 连{羰基碳}；必须无水"}, "beat": {"k": "arms", "at": "gr3b", "text": "R 基敲到羰基碳上\n{碳链接长|red}"}}} />;
