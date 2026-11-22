import React from 'react';
import {AutoScene} from '../components/auto';

export const Diene: React.FC = () => <AutoScene k="diene" d={{"tag": "考点三", "title": "不对称加成与二烯烃", "blocks": [{"t": "rule", "tag": "不对称加成", "at": "dn1", "text": "CH2=CHCH3 + HBr → {两种}产物", "c": "red", "size": 31}, {"t": "table", "at": "dn2", "head": ["1,3-丁二烯 + Br2（1 : 1）", "产物"], "cols": "1.2fr 2fr", "rows": [{"at": "dn2", "cells": ["1,2-加成", "CH2BrCHBrCH=CH2"]}, {"at": "dn2", "cells": ["{1,4-加成|orange}", "CH2BrCH={CH}CH2Br（双键移到中间）"]}], "size": 31, "rowHeight": 66}], "callout": {"label": "易错", "at": "dn4", "text": "1,4-加成：双键{移到中间}"}}} />;
