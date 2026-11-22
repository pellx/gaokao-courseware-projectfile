import React from 'react';
import {AutoScene} from '../components/auto';

export const Groupone: React.FC = () => <AutoScene k="fg1" d={{"tag": "考点二", "title": "常见官能团（一）", "blocks": [{"t": "table", "at": "f11", "head": ["官能团", "结构", "类别", "例"], "cols": "1.1fr 0.8fr 0.8fr 1.4fr", "rows": [{"at": "f11", "cells": ["{碳碳双键}", "C=C", "烯烃", "CH2=CH2"]}, {"at": "f11", "cells": ["{碳碳三键}", "C≡C", "炔烃", "CH≡CH"]}, {"at": "f12", "cells": ["碳卤键", "C—X", "卤代烃", "CH3CH2Br"]}, {"at": "f13", "cells": ["{羟基}", "—OH", "醇、酚", "CH3CH2OH"]}], "size": 31, "rowHeight": 62}], "callout": {"label": "易错", "at": "f14", "text": "苯环{不是官能团}；写“碳碳双键”不写“双键”"}, "beat": {"k": "ears", "at": "f13b", "text": "看耳朵认人\n看{官能团|red}认类别"}}} />;
