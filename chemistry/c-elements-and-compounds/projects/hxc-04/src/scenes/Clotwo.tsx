import React from 'react';
import {AutoScene} from '../components/auto';

export const Clotwo: React.FC = () => <AutoScene k="clo2" d={{"tag": "考点六", "title": "二氧化氯〔课外〕", "blocks": [{"t": "rule", "tag": "性质", "at": "c21", "text": "ClO2：Cl 为 {+4}，高效安全的消毒剂", "c": "red", "size": 31}, {"t": "table", "at": "c22", "head": ["消毒剂", "1 mol 得电子", "1 g 得电子（mol）"], "cols": "1fr 1.2fr 1.4fr", "rows": [{"at": "c22", "cells": ["Cl2（71）", "2", "2/71 ≈ 0.028"]}, {"at": "c22", "cells": ["ClO2（67.5）", "{5}", "{5/67.5 ≈ 0.074}"]}], "size": 32, "rowHeight": 64}, {"t": "rule", "tag": "制备", "at": "c23", "text": "NaClO3 被 SO2、H2O2 在酸性下还原；NaClO2 中 Cl 为 +3", "c": "orange", "size": 29}], "callout": {"label": "解题方法", "at": "c24", "text": "比较消毒效率：{价态变化 ÷ 摩尔质量}"}}} />;
