import React from 'react';
import {AutoScene} from '../components/auto';

export const Topics: React.FC = () => <AutoScene k="topics" d={{"tag": "考点七", "title": "常见探究主题", "blocks": [{"t": "table", "at": "tp1", "head": ["主题", "例"], "cols": "1.6fr 2.4fr", "rows": [{"at": "tp1", "cells": ["{氧化还原能否发生}", "Fe^3+ 与 SO3^2-；Ag^+ 与 I^-；Cu^2+ 与 I^-"]}, {"at": "tp2", "cells": ["{沉淀与配位竞争}", "AgCl 溶于氨水；Fe^3+ 与 SCN^-、F^-"]}, {"at": "tp3", "cells": ["浓度、酸碱性的影响", "浓度变化使氧化性、还原性改变"]}, {"at": "tp3", "cells": ["速率异常", "先慢后快、先出现后消失"]}], "size": 29, "rowHeight": 62}], "callout": {"label": "解题方法", "at": "tp4", "text": "常有{两种反应同时竞争}"}}} />;
