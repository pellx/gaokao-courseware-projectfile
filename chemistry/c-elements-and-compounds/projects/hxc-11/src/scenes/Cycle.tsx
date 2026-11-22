import React from 'react';
import {AutoScene} from '../components/auto';

export const Cycle: React.FC = () => <AutoScene k="cycle" d={{"tag": "考点七", "title": "氮循环图", "blocks": [{"t": "table", "at": "cy2", "head": ["过程", "变化", "N 的价态", "类型"], "cols": "1fr 2fr 1.4fr 1fr", "rows": [{"at": "cy2", "cells": ["固氮", "N2 → NH3 / NO", "0 → −3 / +2", "氧化还原"]}, {"at": "cy2", "cells": ["{硝化|orange}", "NH4^+ → NO2^- → NO3^-", "−3 → +3 → +5", "{氧化|orange}"]}, {"at": "cy3", "cells": ["{反硝化|green}", "NO3^- → N2", "+5 → 0", "{还原|green}"]}, {"at": "cy3", "cells": ["氨化", "有机氮 → NH3", "不变", "非氧化还原"]}], "size": 30, "rowHeight": 64}], "callout": {"label": "解题方法", "at": "cy4", "text": "先给每个物质{标 N 的化合价}：升高氧化，降低还原"}, "beat": {"k": "circle", "at": "cy3b", "text": "氮转一圈\n每一步先{标化合价|red}"}}} />;
