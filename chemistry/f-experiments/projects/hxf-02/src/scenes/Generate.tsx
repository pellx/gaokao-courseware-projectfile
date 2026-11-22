import React from 'react';
import {AutoScene} from '../components/auto';

export const Generate: React.FC = () => <AutoScene k="generate" d={{"tag": "考点二", "title": "气体发生装置", "blocks": [{"t": "table", "at": "ge1", "head": ["类型", "要点", "例"], "cols": "1fr 2fr 1.6fr", "rows": [{"at": "ge1", "cells": ["固固加热", "试管口{略向下倾斜}", "O2、NH3"]}, {"at": "ge2", "cells": ["固液不加热", "启普：块状、不溶、不放大量热", "H2、CO2"]}, {"at": "ge3", "cells": ["{固液加热}", "圆底烧瓶 + 分液漏斗", "Cl2"]}], "size": 30, "rowHeight": 72}], "callout": {"label": "易错", "at": "ge4", "text": "MnO2 与{稀盐酸不反应}；试管口不能向上"}}} />;
