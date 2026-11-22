import React from 'react';
import {AutoScene} from '../components/auto';

export const Qksp: React.FC = () => <AutoScene k="qk" d={{"tag": "考点三", "title": "Q 与 K_sp", "blocks": [{"t": "table", "at": "qk2", "head": ["比较", "结果"], "cols": "1fr 2fr", "rows": [{"at": "qk2", "cells": ["Q > K_sp", "{有沉淀析出}"]}, {"at": "qk2", "cells": ["Q = K_sp", "饱和溶液"]}, {"at": "qk2", "cells": ["Q < K_sp", "{不饱和|orange}，沉淀溶解"]}], "size": 34, "rowHeight": 66}, {"t": "text", "at": "qk3", "text": "例：混合后 Q = 10^-4 × 10^-4 = 10^-8 > K_sp(AgCl)，{有沉淀}", "size": 31, "center": true}], "callout": {"label": "易错", "at": "qk4", "text": "等体积混合：浓度先{减半}"}}} />;
