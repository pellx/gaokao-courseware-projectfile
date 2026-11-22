import React from 'react';
import {AutoScene} from '../components/auto';

export const Onestep: React.FC = () => <AutoScene k="onestep" d={{"tag": "考点四", "title": "转化能否一步实现", "blocks": [{"t": "table", "at": "os1", "head": ["不能一步实现", "原因"], "cols": "1.6fr 2fr", "rows": [{"at": "os1", "cells": ["S → {SO3}", "S 燃烧只生成 SO2"]}, {"at": "os1", "cells": ["N2 → {NO2}", "N2 与 O2 只生成 NO"]}, {"at": "os2", "cells": ["SiO2、Al2O3、CuO → 氢氧化物", "{难溶于水}，不与水反应"]}, {"at": "os3", "cells": ["Fe + Cl2 → {FeCl2}", "Fe 与 Cl2 只生成 FeCl3"]}], "size": 31, "rowHeight": 66}], "callout": {"label": "解题方法", "at": "os4", "text": "两类陷阱：{难溶氧化物 → 氢氧化物}、{越级氧化}"}}} />;
