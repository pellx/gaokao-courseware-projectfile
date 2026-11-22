import React from 'react';
import {AutoScene} from '../components/auto';

export const Sum: React.FC = () => <AutoScene k="sum" d={{"tag": "考点七", "title": "三条规律的综合", "blocks": [{"t": "table", "at": "su2", "head": ["流程环节", "常用手段", "对应规律"], "cols": "1fr 2.2fr 1.2fr", "rows": [{"at": "su2", "cells": ["浸出", "酸溶；加氧化剂或还原剂", "{氧化还原}"]}, {"at": "su2", "cells": ["除杂", "先调价态，再调 pH", "氧化还原 + {沉淀|orange}"]}, {"at": "su3", "cells": ["分离", "萃取、调 pH、加沉淀剂", "{沉淀|orange}、配位"]}, {"at": "su3", "cells": ["得产品", "结晶、电解、热还原", "—"]}], "size": 31, "rowHeight": 64}], "callout": {"label": "解题方法", "at": "su4", "text": "每一步问“{加了什么、为什么加}”"}}} />;
