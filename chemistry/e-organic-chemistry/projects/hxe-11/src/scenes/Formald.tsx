import React from 'react';
import {AutoScene} from '../components/auto';

export const Formald: React.FC = () => <AutoScene k="formald" d={{"tag": "考点五", "title": "甲醛的定量关系", "blocks": [{"t": "table", "at": "fm1", "head": ["醛", "Ag", "Cu2O"], "cols": "1.2fr 1fr 1fr", "rows": [{"at": "fm1", "cells": ["1 mol RCHO", "2 mol", "1 mol"]}, {"at": "fm1", "cells": ["1 mol {HCHO}", "{4 mol}", "{2 mol}"]}], "size": 34, "rowHeight": 66}, {"t": "text", "at": "fm3", "text": "0.1 mol 一元醛 → 0.4 mol Ag：{甲醛}", "size": 33, "center": true}], "callout": {"label": "解题方法", "at": "fm4", "text": "一元醛生成 4 倍 Ag：{一定是甲醛}"}}} />;
