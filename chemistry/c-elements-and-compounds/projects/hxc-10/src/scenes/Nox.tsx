import React from 'react';
import {AutoScene} from '../components/auto';

export const Nox: React.FC = () => <AutoScene k="nox" d={{"tag": "考点二", "title": "NO 与 NO2", "blocks": [{"t": "table", "at": "no1", "head": ["比较项目", "NO", "NO2"], "cols": "1.2fr 1.5fr 1.5fr", "rows": [{"at": "no1", "cells": ["颜色", "{无色}", "{红棕色|orange}"]}, {"at": "no2", "cells": ["与水", "难溶于水", "3NO2 + H2O = 2HNO3 + NO"]}, {"at": "no1", "cells": ["与 O2", "2NO + O2 = 2NO2", "—"]}, {"at": "no4", "cells": ["收集方法", "{排水法}", "{向上排空气法|orange}"]}], "size": 31, "rowHeight": 66}, {"t": "rule", "tag": "歧化", "at": "no3", "text": "NO2 与水：氧化剂 : 还原剂 = {1 : 2}", "c": "red", "size": 31}], "callout": {"label": "易错", "at": "no4", "text": "NO 用{排水法}；NO2 用{向上排空气法|orange}"}}} />;
