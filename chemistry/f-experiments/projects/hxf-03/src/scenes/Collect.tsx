import React from 'react';
import {AutoScene} from '../components/auto';

export const Collect: React.FC = () => <AutoScene k="collect" d={{"tag": "考点六", "title": "收集方法的选择", "blocks": [{"t": "table", "at": "co2", "head": ["收集方法", "气体"], "cols": "1.4fr 2fr", "rows": [{"at": "co2", "cells": ["排水、排空气都行", "O2、H2"]}, {"at": "co2", "cells": ["只能排水", "{NO}、CO、N2"]}, {"at": "co3", "cells": ["只能排空气", "{NH3、HCl、NO2、SO2}"]}, {"at": "co3", "cells": ["排饱和食盐水", "Cl2"]}], "size": 32, "rowHeight": 60}], "callout": {"label": "解题方法", "at": "co4", "text": "和 {29} 比：大向上、小向下"}}} />;
