import React from 'react';
import {AutoScene} from '../components/auto';

export const Template: React.FC = () => <AutoScene k="tpl" d={{"tag": "考点七", "title": "条件选择的答题模板", "blocks": [{"t": "table", "at": "tp1", "head": ["条件", "过低", "过高"], "cols": "0.8fr 1.6fr 2.2fr", "rows": [{"at": "tp1", "cells": ["温度", "{速率慢|orange}", "{平衡逆移}；催化剂活性降低；副反应多"]}, {"at": "tp2", "cells": ["压强", "速率慢、转化率低", "{设备要求高|orange}、成本大"]}, {"at": "tp3", "cells": ["投料比", "贵重原料转化率低", "产物含量降低"]}], "size": 30, "rowHeight": 66}], "callout": {"label": "答题模板", "at": "tp4", "text": "同时说{速率、平衡、成本}；先说好处再说坏处"}}} />;
