import React from 'react';
import {AutoScene} from '../components/auto';

export const Amp: React.FC = () => <AutoScene k="amp" d={{"tag": "考点五", "title": "振幅、周期和频率", "blocks": [{"t": "table", "at": "a1", "head": ["物理量", "含义", "意义"], "cols": "1fr 1.8fr 1.4fr", "rows": [{"at": "a1", "cells": ["振幅 A", "离开平衡位置的{最大距离}", "振动的{强弱}"]}, {"at": "a2", "cells": ["周期 T", "完成一次{全振动}的时间", "振动的{快慢}"]}, {"at": "a3", "cells": ["频率 f", "{f = 1/T}，单位 Hz", "振动的{快慢}"]}], "size": 30, "rowHeight": 74}], "callout": {"label": "易错", "at": "a4", "text": "一个周期内路程为 {4A}"}}} />;
