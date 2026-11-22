import React from 'react';
import {AutoScene} from '../components/auto';

export const Disp: React.FC = () => <AutoScene k="disp" d={{"tag": "考点一", "title": "分散系的分类", "blocks": [{"t": "table", "at": "di2", "head": ["比较项目", "溶液", "胶体", "浊液"], "cols": "1.2fr 1fr 1fr 1fr", "rows": [{"at": "di2", "cells": ["粒子直径", "< 1 nm", "{1～100 nm}", "> 100 nm"]}, {"at": "di3", "cells": ["稳定性", "稳定", "{介稳}", "不稳定"]}, {"at": "di3", "cells": ["外观", "均一、透明", "较均一", "不均一"]}, {"at": "di3", "cells": ["丁达尔效应", "无", "{有}", "—"]}], "size": 32, "rowHeight": 66}], "callout": {"label": "易错", "at": "di4", "text": "本质区别是{粒子直径}；丁达尔效应是{鉴别方法|orange}"}}} />;
