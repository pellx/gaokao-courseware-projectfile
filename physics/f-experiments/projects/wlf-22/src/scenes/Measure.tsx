import React from 'react';
import {AutoScene} from '../components/auto';

export const Measure: React.FC = () => <AutoScene k="measure" d={{"tag": "考点六", "title": "测量", "blocks": [{"t": "table", "at": "s1", "head": ["物理量", "第 1 次", "第 2 次", "第 3 次", "第 4 次", "第 5 次"], "cols": "1.4fr repeat(5, 1fr)", "rows": [{"at": "s1", "cells": ["长度 L", "…", "…", "…", "…", "…"]}, {"at": "s1", "cells": ["压强 p", "…", "…", "…", "…", "…"]}], "size": 30, "rowHeight": 64}, {"t": "big", "at": "s2", "text": "V = LS，S {不变}", "size": 56}, {"t": "rule", "tag": "简化", "at": "s3", "text": "用{长度}代替{体积}，不必测 S", "c": "red"}], "callout": {"label": "要点", "at": "s4", "text": "S 不变：{V 与 L 成正比}"}}} />;
