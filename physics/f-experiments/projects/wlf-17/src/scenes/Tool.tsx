import React from 'react';
import {AutoScene} from '../components/auto';

export const Tool: React.FC = () => <AutoScene k="tool" d={{"tag": "考点三", "title": "器材及作用", "blocks": [{"t": "table", "at": "t1", "head": ["器材", "作用"], "cols": "1fr 1.8fr", "rows": [{"at": "t1", "cells": ["可拆变压器", "铁芯可拆装；多个接线柱选{不同匝数}"]}, {"at": "t2", "cells": ["学生电源", "提供{低压交流电}"]}, {"at": "t3", "cells": ["多用电表", "{交流电压挡}测 U_1、U_2"]}], "size": 30, "rowHeight": 64}], "callout": {"label": "要点", "at": "t4", "text": "用{交流电压挡}测电压"}, "beat": {"k": "guitar", "at": "t3b", "text": "换个接线柱\n就换了{匝数|red}"}}} />;
