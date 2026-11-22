import React from 'react';
import {AutoScene} from '../components/auto';

export const Five: React.FC = () => <AutoScene k="five" d={{"tag": "考点二", "title": "五种元素的二维图对照", "blocks": [{"t": "table", "at": "fv1", "head": ["元素", "常见价态", "关键转化"], "cols": "0.7fr 1.6fr 2.4fr", "rows": [{"at": "fv1", "cells": ["Na", "0、+1", "Na → Na2O2 → NaOH → Na2CO3"]}, {"at": "fv2", "cells": ["Fe", "0、+2、+3", "{Fe^2+ ⇌ Fe^3+}"]}, {"at": "fv2", "cells": ["Cl", "−1、0、+1、+5", "{Cl2 歧化}（与水、碱）"]}, {"at": "fv3", "cells": ["S", "−2、0、+4、+6", "{SO2 还原性}：+4 → +6"]}, {"at": "fv3", "cells": ["N", "−3、0、+2、+4、+5", "NH3 → NO → NO2 → HNO3"]}], "size": 29, "rowHeight": 58}], "callout": {"label": "考法", "at": "fv4", "text": "先按{价态和类别}把图中字母翻译成物质"}}} />;
