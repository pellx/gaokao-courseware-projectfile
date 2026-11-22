import React from 'react';
import {AutoScene} from '../components/auto';

export const Model: React.FC = () => <AutoScene k="model" d={{"tag": "考点六", "title": "球棍模型与空间填充模型", "blocks": [{"t": "table", "at": "mo1", "head": ["分子", "空间结构", "原子大小"], "cols": "1fr 1.2fr 1.6fr", "rows": [{"at": "mo2", "cells": ["CO2", "直线形", "{C > O}"]}, {"at": "mo3", "cells": ["CH4", "正四面体形", "C > H"]}, {"at": "mo3", "cells": ["H2O", "V 形", "O > H"]}, {"at": "mo3", "cells": ["CCl4", "正四面体形", "{Cl > C|orange}（Cl 画得比 C 大）"]}], "size": 33, "rowHeight": 70}], "callout": {"label": "解题方法", "at": "mo4", "text": "先判{形状}（VSEPR），再判{大小}（原子半径）"}, "beat": {"k": "test", "at": "mo3b", "text": "模型题\n{看大小、看形状|red}\n两样都对才选"}}} />;
