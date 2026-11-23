import React from 'react';
import {AutoScene} from '../components/auto';

export const Device: React.FC = () => <AutoScene k="device" d={{"tag": "考点三", "title": "器材及作用", "blocks": [{"t": "table", "at": "d1", "head": ["器材", "作用"], "cols": "1fr 2fr", "rows": [{"at": "d1", "cells": ["铁架台", "{悬挂}弹簧"]}, {"at": "d2", "cells": ["钩码", "提供{已知大小}的拉力"]}, {"at": "d3", "cells": ["刻度尺（竖直固定）", "测量弹簧{长度}"]}], "size": 34, "rowHeight": 72}], "callout": {"label": "要点", "at": "d4", "text": "弹力由{钩码重力}得出"}}} />;
