import React from 'react';
import {AutoScene} from '../components/auto';

export const VPrin: React.FC = () => <AutoScene k="vprin" d={{"tag": "考点四", "title": "游标卡尺的原理与精度", "blocks": [{"t": "big", "at": "p2", "text": "游标每格比主尺 1 mm 短　{1/n mm}　= 精度", "size": 42}, {"t": "table", "at": "p4", "head": ["游标分度", "游标总长", "精度"], "cols": "1fr 1fr 1fr", "rows": [{"at": "p3", "cells": ["10 分度", "9 mm", "{0.1 mm}"]}, {"at": "p4", "cells": ["20 分度", "19 mm", "{0.05 mm}"]}, {"at": "p4", "cells": ["50 分度", "49 mm", "{0.02 mm}"]}], "size": 32, "rowHeight": 64}], "callout": {"label": "要点", "at": "p5", "text": "精度 = {1/n mm}，分度越多越精确"}}} />;
