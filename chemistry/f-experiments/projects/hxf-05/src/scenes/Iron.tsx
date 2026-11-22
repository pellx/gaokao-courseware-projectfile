import React from 'react';
import {AutoScene} from '../components/auto';

export const Iron: React.FC = () => <AutoScene k="iron" d={{"tag": "考点二", "title": "Fe^3+ 与 Fe^2+ 的检验", "blocks": [{"t": "table", "at": "ir1", "head": ["离子", "试剂", "现象"], "cols": "0.8fr 1.8fr 1.6fr", "rows": [{"at": "ir1", "cells": ["Fe^3+", "{KSCN 溶液}", "溶液变{红色}"]}, {"at": "ir2", "cells": ["Fe^2+", "{K3[Fe(CN)6] 溶液}", "{蓝色沉淀|orange}"]}, {"at": "ir2", "cells": ["Fe^2+", "先 KSCN，再氯水", "先无现象，后变红"]}], "size": 31, "rowHeight": 66}], "callout": {"label": "易错", "at": "ir4", "text": "KSCN：{溶液变红}，不是沉淀"}}} />;
