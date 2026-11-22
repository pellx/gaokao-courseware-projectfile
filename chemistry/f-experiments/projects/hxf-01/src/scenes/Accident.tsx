import React from 'react';
import {AutoScene} from '../components/auto';

export const Accident: React.FC = () => <AutoScene k="accident" d={{"tag": "考点七", "title": "意外事故的处理", "blocks": [{"t": "table", "at": "ac1", "head": ["事故", "处理"], "cols": "1.4fr 2.6fr", "rows": [{"at": "ac1", "cells": ["浓硫酸沾皮肤", "大量水冲洗 → 涂 {NaHCO3 溶液}"]}, {"at": "ac2", "cells": ["碱液沾皮肤", "大量水冲洗 → 涂{硼酸}"]}, {"at": "ac3", "cells": ["酒精灯着火", "{湿抹布}盖灭"]}, {"at": "ac3", "cells": ["钠着火", "{干燥沙土}盖灭"]}], "size": 32, "rowHeight": 62}], "callout": {"label": "易错", "at": "ac4", "text": "不能用 {NaOH} 中和皮肤上的酸"}}} />;
