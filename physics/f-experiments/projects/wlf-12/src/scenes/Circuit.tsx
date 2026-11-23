import React from 'react';
import {AutoScene} from '../components/auto';

export const Circuit: React.FC = () => <AutoScene k="circuit" d={{"tag": "考点二", "title": "实验电路与器材作用", "blocks": [{"t": "table", "at": "c1", "head": ["器材", "作用"], "cols": "1fr 2.4fr", "rows": [{"at": "c1", "cells": ["直流电源", "提供{电压}"]}, {"at": "c2", "cells": ["单刀双掷开关", "接电源一侧{充电}，接另一侧{放电}"]}, {"at": "c3", "cells": ["电阻 R", "{限制电流}，使过程变慢"]}, {"at": "c4", "cells": ["电流表（传感器）", "显示电流的{大小和方向}"]}, {"at": "c4", "cells": ["电压表", "显示电容器两端{电压}"]}], "size": 30, "rowHeight": 60}], "callout": {"label": "要点", "at": "c4", "text": "电流表看{电流}，电压表看{电容器两端电压}"}}} />;
