import React from 'react';
import {AutoScene} from '../components/auto';

export const Gas: React.FC = () => <AutoScene k="gas" d={{"tag": "考点六", "title": "常见气体的制备与检验", "blocks": [{"t": "table", "at": "ga1", "head": ["气体", "制备", "检验"], "cols": "0.6fr 1.9fr 2.1fr", "rows": [{"at": "ga1", "cells": ["O2", "KMnO4 △；H2O2 + MnO2", "带火星的木条{复燃}"]}, {"at": "ga2", "cells": ["Cl2", "MnO2 + 浓盐酸 △", "湿润的淀粉 KI 试纸{变蓝}"]}, {"at": "ga3", "cells": ["SO2", "Na2SO3 + 较浓 H2SO4", "品红{褪色，加热恢复}"]}, {"at": "ga3", "cells": ["NH3", "NH4Cl + Ca(OH)2 △", "湿润的红色石蕊试纸{变蓝}"]}, {"at": "ga4", "cells": ["NO", "Cu + 稀 HNO3（{排水法|orange}）", "遇空气变红棕色"]}, {"at": "ga4", "cells": ["NO2", "Cu + 浓 HNO3（{向上排空气|orange}）", "红棕色"]}], "size": 28, "rowHeight": 56}], "callout": {"label": "易错", "at": "ga5", "text": "检验气体的试纸要{湿润}"}}} />;
