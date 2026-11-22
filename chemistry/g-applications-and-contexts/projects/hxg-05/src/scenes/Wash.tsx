import React from 'react';
import {AutoScene} from '../components/auto';

export const Wash: React.FC = () => <AutoScene k="wash" d={{"tag": "考点二", "title": "晶体的洗涤", "blocks": [{"t": "table", "at": "wa1", "head": ["洗涤剂", "目的"], "cols": "1fr 3fr", "rows": [{"at": "wa1", "cells": ["{冰水}", "降低溶解度，{减少溶解损失}"]}, {"at": "wa2", "cells": ["{乙醇}", "减少损失；{易挥发便于干燥}；除去表面水"]}, {"at": "wa3", "cells": ["饱和溶液", "除杂而不溶解产物"]}], "size": 32, "rowHeight": 70}], "callout": {"label": "答题模板", "at": "wa4", "text": "乙醇：{减少溶解损失，易挥发便于干燥}"}, "beat": {"k": "beret", "at": "wa3b", "text": "洗涤为{除杂|red}\n选择为{少损失|red}"}}} />;
