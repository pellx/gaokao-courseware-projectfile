import React from 'react';
import {AutoScene} from '../components/auto';

export const Collect: React.FC = () => <AutoScene k="collect" d={{"tag": "考点三", "title": "收集装置", "blocks": [{"t": "table", "at": "co1", "head": ["方法", "适用", "例"], "cols": "1.2fr 2fr 1.4fr", "rows": [{"at": "co1", "cells": ["排水法", "难溶、不与水反应", "H2、O2、{NO}"]}, {"at": "co2", "cells": ["向上排空气", "密度比空气大", "Cl2、CO2、SO2"]}, {"at": "co2", "cells": ["向下排空气", "密度比空气小", "H2、{NH3}"]}], "size": 31, "rowHeight": 64}, {"t": "text", "at": "co3", "text": "万能瓶：密度大的{长进短出}", "size": 32, "center": true}], "callout": {"label": "易错", "at": "co4", "text": "NO 不能排空气；{NO2、NH3} 不能排水"}}} />;
