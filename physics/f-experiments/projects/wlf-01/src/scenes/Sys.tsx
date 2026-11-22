import React from 'react';
import {AutoScene} from '../components/auto';

export const Sys: React.FC = () => <AutoScene k="sys" d={{"tag": "考点四", "title": "系统误差", "blocks": [{"t": "table", "at": "d1", "head": ["", "偶然误差", "系统误差"], "cols": "1fr 1.6fr 2fr", "rows": [{"at": "d1", "cells": ["来源", "偶然因素", "{仪器、原理、方法}"]}, {"at": "d2", "cells": ["特点", "时大时小", "{总是偏大或总是偏小}"]}, {"at": "d4", "cells": ["减小", "多次测量取平均", "{校准仪器、改进原理和方法}"]}], "size": 32, "rowHeight": 72}, {"t": "text", "at": "d3", "text": "例：刻度尺刻得偏短 → 每次测量都{偏大}", "size": 30}], "callout": {"label": "易错", "at": "d5", "text": "系统误差{不能}靠多次测量取平均减小"}}} />;
