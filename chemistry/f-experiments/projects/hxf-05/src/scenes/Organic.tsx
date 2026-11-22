import React from 'react';
import {AutoScene} from '../components/auto';

export const Organic: React.FC = () => <AutoScene k="organic" d={{"tag": "考点七", "title": "有机物与碘的检验", "blocks": [{"t": "table", "at": "or1", "head": ["对象", "试剂", "现象"], "cols": "1fr 1.8fr 1.6fr", "rows": [{"at": "or1", "cells": ["I2 / 淀粉", "淀粉 / 碘水", "{变蓝}"]}, {"at": "or2", "cells": ["醛基", "银氨溶液；新制 Cu(OH)2", "银镜；砖红色沉淀"]}, {"at": "or2", "cells": ["酚羟基", "{FeCl3}；浓溴水", "紫色；白色沉淀"]}, {"at": "or3", "cells": ["碳碳双键", "溴的 CCl4 溶液", "褪色"]}], "size": 30, "rowHeight": 60}], "callout": {"label": "易错", "at": "or4", "text": "淀粉检验 {I2 单质}，不检验 I^-"}}} />;
