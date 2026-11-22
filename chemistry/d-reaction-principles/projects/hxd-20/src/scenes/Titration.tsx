import React from 'react';
import {AutoScene} from '../components/auto';

export const Titration: React.FC = () => <AutoScene k="titration" d={{"tag": "考点五", "title": "滴定曲线中的守恒", "blocks": [{"t": "table", "at": "ti1", "head": ["点", "溶质", "关键关系"], "cols": "0.9fr 1.6fr 2.6fr", "rows": [{"at": "ti3", "cells": ["半中和点", "CH3COOH : CH3COONa = 1 : 1", "2c(Na^+) = c(CH3COO^-) + c(CH3COOH)"]}, {"at": "ti2", "cells": ["中性点", "CH3COONa + 少量 CH3COOH", "{c(Na^+) = c(CH3COO^-)}"]}, {"at": "ti1", "cells": ["恰好反应点", "CH3COONa", "c(Na^+) > c(CH3COO^-) > c(OH^-) > c(H^+)"]}], "size": 27, "rowHeight": 66}], "callout": {"label": "解题方法", "at": "ti4", "text": "先定{溶质和比例}，再写守恒"}}} />;
