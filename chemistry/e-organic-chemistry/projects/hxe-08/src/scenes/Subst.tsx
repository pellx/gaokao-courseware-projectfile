import React from 'react';
import {AutoScene} from '../components/auto';

export const Subst: React.FC = () => <AutoScene k="subst" d={{"tag": "考点二", "title": "苯的取代反应", "blocks": [{"t": "table", "at": "sb1", "head": ["反应", "试剂与条件", "产物"], "cols": "0.8fr 1.8fr 1.4fr", "rows": [{"at": "sb1", "cells": ["溴代", "{液溴}，FeBr3", "C6H5Br + HBr"]}, {"at": "sb2", "cells": ["硝化", "{浓硝酸}，浓硫酸，50～60 ℃", "C6H5NO2 + H2O"]}], "size": 31, "rowHeight": 72}, {"t": "rule", "tag": "浓硫酸", "at": "sb3", "text": "{催化剂、吸水剂}", "c": "orange", "size": 32}], "callout": {"label": "易错", "at": "sb4", "text": "用{液溴}，不用溴水"}}} />;
