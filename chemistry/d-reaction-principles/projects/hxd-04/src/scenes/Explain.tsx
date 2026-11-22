import React from 'react';
import {AutoScene} from '../components/auto';

export const Explain: React.FC = () => <AutoScene k="explain" d={{"tag": "考点二", "title": "用活化能解释速率", "blocks": [{"t": "table", "at": "ex2", "head": ["条件", "单位体积活化分子数", "活化分子百分数"], "cols": "1fr 1.4fr 1.4fr", "rows": [{"at": "ex2", "cells": ["增大浓度、压强", "增多", "{不变}"]}, {"at": "ex3", "cells": ["升高温度", "增多", "{增大}"]}, {"at": "ex4", "cells": ["加催化剂", "增多", "{增大|green}"]}], "size": 32, "rowHeight": 70}], "callout": {"label": "易错", "at": "ex5", "text": "浓度、压强：活化分子百分数{不变}"}}} />;
