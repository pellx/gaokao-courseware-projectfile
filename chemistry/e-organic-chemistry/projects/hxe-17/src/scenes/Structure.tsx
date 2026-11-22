import React from 'react';
import {AutoScene} from '../components/auto';

export const Structure: React.FC = () => <AutoScene k="structure" d={{"tag": "考点六", "title": "线型与网状结构", "blocks": [{"t": "table", "at": "st1", "head": ["结构", "受热", "性质", "例"], "cols": "0.9fr 1.3fr 0.9fr 1.6fr", "rows": [{"at": "st1", "cells": ["线型", "{软化熔融}", "热塑性", "聚乙烯"]}, {"at": "st2", "cells": ["网状", "{不软化}", "热固性", "酚醛树脂、硫化橡胶"]}], "size": 31, "rowHeight": 72}], "callout": {"label": "考法", "at": "st4", "text": "加{交联剂}：强度、耐热性提高，溶解性降低"}, "beat": {"k": "maid", "at": "st3b", "text": "线型：{面条|red}\n网状：{织好的网|red}"}}} />;
