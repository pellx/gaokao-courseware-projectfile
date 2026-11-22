import React from 'react';
import {AutoScene} from '../components/auto';

export const Diff: React.FC = () => <AutoScene k="diff" d={{"tag": "考点二", "title": "用分子式差值确定变化", "blocks": [{"t": "table", "at": "df2", "head": ["分子式变化", "可能的反应"], "cols": "1.2fr 2.4fr", "rows": [{"at": "df2", "cells": ["少 H2O", "消去、酯化、缩合{成环}"]}, {"at": "df2", "cells": ["多 O 或少 H2", "{氧化}"]}, {"at": "df2", "cells": ["多 H2", "加成（还原）"]}, {"at": "df2", "cells": ["少 HX", "消去"]}, {"at": "df3", "cells": ["碳数增加", "{碳链增长}"]}], "size": 31, "rowHeight": 58}], "callout": {"label": "解题方法", "at": "df4", "text": "每步写分子式，{算差值}"}}} />;
