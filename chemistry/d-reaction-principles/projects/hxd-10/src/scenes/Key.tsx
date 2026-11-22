import React from 'react';
import {AutoScene} from '../components/auto';

export const Key: React.FC = () => <AutoScene k="key" d={{"tag": "考点六", "title": "曲线上的关键点", "blocks": [{"t": "table", "at": "ke1", "head": ["关键点", "V(NaOH)", "溶质", "特点"], "cols": "1fr 0.9fr 1.8fr 1.6fr", "rows": [{"at": "ke1", "cells": ["半中和点", "10 mL", "CH3COOH : CH3COONa = 1 : 1", "pH ≈ pK_a"]}, {"at": "ke2", "cells": ["中性点", "略小于 20 mL", "CH3COONa + 少量 CH3COOH", "pH = 7"]}, {"at": "ke3", "cells": ["恰好反应点", "20 mL", "{CH3COONa}", "碱性，{水电离最大}"]}], "size": 28, "rowHeight": 66}], "callout": {"label": "解题方法", "at": "ke4", "text": "每个点先写{溶质及比例}，再判断"}}} />;
