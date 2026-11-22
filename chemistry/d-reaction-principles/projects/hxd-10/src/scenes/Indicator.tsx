import React from 'react';
import {AutoScene} from '../components/auto';

export const Indicator: React.FC = () => <AutoScene k="indicator" d={{"tag": "考点三", "title": "指示剂与滴定终点", "blocks": [{"t": "table", "at": "in32", "head": ["滴定类型", "终点溶液", "指示剂"], "cols": "1.4fr 1fr 1.2fr", "rows": [{"at": "in32", "cells": ["强碱滴强酸 / 强酸滴强碱", "中性", "酚酞或甲基橙"]}, {"at": "in32", "cells": ["强碱滴弱酸（NaOH 滴醋酸）", "碱性", "{酚酞}"]}, {"at": "in32", "cells": ["强酸滴弱碱（盐酸滴氨水）", "酸性", "{甲基橙|orange}"]}], "size": 29, "rowHeight": 64}, {"t": "big", "at": "in33", "text": "最后半滴 → {变色} → {半分钟内不恢复}", "size": 36}], "callout": {"label": "答题模板", "at": "in34", "text": "“最后半滴、由{某色}变为{某色}、半分钟内不恢复”"}}} />;
