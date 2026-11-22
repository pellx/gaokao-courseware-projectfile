import React from 'react';
import {AutoScene} from '../components/auto';

export const Rail: React.FC = () => <AutoScene k="rail" d={{"tag": "考点二", "title": "案例 1 的器材及作用", "blocks": [{"t": "table", "at": "r1", "head": ["器材", "作用"], "cols": "1fr 2fr", "rows": [{"at": "r1", "cells": ["气垫导轨", "托起滑块，{几乎没有摩擦}"]}, {"at": "r3", "cells": ["光电门、数字计时器", "测遮光时间 Δt，{v = d/Δt}"]}, {"at": "r4", "cells": ["天平", "测两个滑块的{质量}"]}], "size": 32, "rowHeight": 70}], "callout": {"label": "要点", "at": "r5", "text": "气垫导轨{减小摩擦}，外力矢量和近似为零"}}} />;
