import React from 'react';
import {AutoScene} from '../components/auto';

export const Naoh: React.FC = () => <AutoScene k="naoh" d={{"tag": "考点七", "title": "1 mol 有机物消耗 NaOH 的量", "blocks": [{"t": "table", "at": "na1", "head": ["官能团", "NaOH / mol"], "cols": "2fr 1fr", "rows": [{"at": "na1", "cells": ["—COOH、酚羟基", "1"]}, {"at": "na1", "cells": ["醇羟基", "{0}"]}, {"at": "na2", "cells": ["普通酯基、卤代烃（脂肪族）", "1"]}, {"at": "na2", "cells": ["{酚酯基}、苯环上的卤素", "{2}"]}], "size": 31, "rowHeight": 60}, {"t": "text", "at": "na3", "text": "阿司匹林：—COOH 1 + 酚酯 2 = {3 mol}", "size": 33, "center": true}], "callout": {"label": "解题方法", "at": "na4", "text": "{酚酯、苯环卤素按 2}，醇羟基不算"}}} />;
